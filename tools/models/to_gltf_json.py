"""Turn a .glb into the .gltf.json the town loads.

Artifacts serve JSON and JPEG but not .glb, so each model ships as a standard embedded glTF (the binary buffer as a
base64 data URI) under a .json name. A texture inside the GLB is written out as <name>.jpg beside it and referenced by
file name; the page decodes the buffer itself and never fetches a data: URL. Usage:
    python tools/models/to_gltf_json.py <in.glb> <out_dir>      ->  <out_dir>/<name>.gltf.json (+ <name>.jpg)
"""
import base64
import json
import os
import struct
import sys


def convert(src, out_dir):
    name = os.path.basename(src)[:-4]
    b = open(src, 'rb').read()
    assert b[:4] == b'glTF', 'not a GLB'
    clen, _ = struct.unpack('<II', b[12:20])
    j = json.loads(b[20:20 + clen])
    blen, _ = struct.unpack('<II', b[20 + clen:28 + clen])
    data = b[28 + clen:28 + clen + blen]
    if j.get('images'):
        assert len(j['images']) == 1, 'one texture per model'
        iv = j['images'][0]['bufferView']
        assert iv == len(j['bufferViews']) - 1, 'the image must be the last buffer view'
        v = j['bufferViews'][iv]
        open(os.path.join(out_dir, name + '.jpg'), 'wb').write(data[v['byteOffset']:v['byteOffset'] + v['byteLength']])
        data = data[:v['byteOffset']]
        j['bufferViews'] = j['bufferViews'][:-1]
        j['images'] = [{'uri': name + '.jpg', 'mimeType': 'image/jpeg', 'name': name + '_color'}]
    j['buffers'] = [{'byteLength': len(data), 'uri': 'data:application/octet-stream;base64,' + base64.b64encode(data).decode()}]
    dst = os.path.join(out_dir, name + '.gltf.json')
    open(dst, 'w').write(json.dumps(j, separators=(',', ':')))
    print(dst, os.path.getsize(dst) // 1024, 'KB')


if __name__ == '__main__':
    for p in sys.argv[1:-1]:
        convert(p, sys.argv[-1])
