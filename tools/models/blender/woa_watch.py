# World of Agents: background Blender runner.
# Started by woa_watch.bat. Runs headless (no window, no mouse or keyboard), so the PC stays free.
# Every .py dropped into WoA-models\jobs runs once in a clean scene, then moves to jobs\done.
# Progress and errors go to jobs\status.txt. Stop it by closing the console window, or by creating jobs\STOP.
#
# Only the jobs beside this runner may run (v4.0.0, 4a): when it starts it takes the SHA-256 of each woa_b*.py in its
# own folder, and a dropped file whose bytes match none of them is refused and moved to jobs\refused, never run. So a
# download, a script or an agent's file that lands in jobs\ can't run code here. It runs the very bytes it checked, and
# before each job writes its own woa_kit.py into WoA-models, since every job loads the kit from there.
import bpy, os, time, glob, shutil, traceback, hashlib

HERE = os.path.dirname(os.path.abspath(__file__))
HOME = os.path.join(os.path.expanduser('~'), 'Documents', 'WoA-models')
JOBS = os.path.join(HOME, 'jobs')
DONE = os.path.join(JOBS, 'done')
REFUSED = os.path.join(JOBS, 'refused')
STATUS = os.path.join(JOBS, 'status.txt')
os.makedirs(DONE, exist_ok=True)
os.makedirs(REFUSED, exist_ok=True)


def sha256(data):
    return hashlib.sha256(data).hexdigest()


def read(path):
    with open(path, 'rb') as f:
        return f.read()


ALLOWED = {sha256(read(p)): os.path.basename(p) for p in glob.glob(os.path.join(HERE, 'woa_b*.py'))}
KIT = read(os.path.join(HERE, 'woa_kit.py'))


def stamp(msg):
    line = time.strftime('%H:%M:%S ') + msg
    print(line, flush=True)
    with open(STATUS, 'a', encoding='utf-8') as f:
        f.write(line + '\n')


def move(path, folder, name):
    try:
        shutil.move(path, os.path.join(folder, time.strftime('%H%M%S_') + name))
    except Exception:
        stamp('could not move ' + name)


stamp('runner started, Blender %s, watching %s, %d jobs allowed: %s'
      % (bpy.app.version_string, JOBS, len(ALLOWED), ', '.join(sorted(ALLOWED.values()))))
while True:
    if os.path.exists(os.path.join(JOBS, 'STOP')):
        os.remove(os.path.join(JOBS, 'STOP'))
        stamp('stopped')
        break
    for path in sorted(glob.glob(os.path.join(JOBS, '*.py'))):
        name = os.path.basename(path)
        try:
            code = read(path)
        except Exception:
            stamp('could not read ' + name)
            continue
        if sha256(code) not in ALLOWED:
            stamp('refused %s: not one of the jobs beside the runner, as they were when it started' % name)
            move(path, REFUSED, name)
            continue
        t0 = time.time()
        stamp('run ' + name)
        try:
            bpy.ops.wm.read_factory_settings(use_empty=True)
            with open(os.path.join(HOME, 'woa_kit.py'), 'wb') as f:
                f.write(KIT)
            exec(compile(code.decode('utf-8'), path, 'exec'), {'__name__': '__main__', '__file__': path})
            stamp('ok %s (%.0fs)' % (name, time.time() - t0))
        except Exception:
            stamp('FAIL %s\n%s' % (name, traceback.format_exc()))
        move(path, DONE, name)
    time.sleep(2)
