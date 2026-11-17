# World of Agents: background Blender runner.
# Started by woa_watch.bat. Runs headless (no window, no mouse or keyboard), so the PC stays free.
# Every .py dropped into WoA-models\jobs runs once in a clean scene, then moves to jobs\done.
# Progress and errors go to jobs\status.txt. Stop it by closing the console window, or by creating jobs\STOP.
import bpy, os, time, glob, shutil, traceback

HOME = os.path.join(os.path.expanduser('~'), 'Documents', 'WoA-models')
JOBS = os.path.join(HOME, 'jobs')
DONE = os.path.join(JOBS, 'done')
STATUS = os.path.join(JOBS, 'status.txt')
os.makedirs(DONE, exist_ok=True)

def stamp(msg):
    line = time.strftime('%H:%M:%S ') + msg
    print(line, flush=True)
    with open(STATUS, 'a', encoding='utf-8') as f:
        f.write(line + '\n')

stamp('runner started, Blender %s, watching %s' % (bpy.app.version_string, JOBS))
while True:
    if os.path.exists(os.path.join(JOBS, 'STOP')):
        os.remove(os.path.join(JOBS, 'STOP'))
        stamp('stopped')
        break
    for path in sorted(glob.glob(os.path.join(JOBS, '*.py'))):
        name = os.path.basename(path)
        t0 = time.time()
        stamp('run ' + name)
        try:
            bpy.ops.wm.read_factory_settings(use_empty=True)
            code = open(path, encoding='utf-8').read()
            exec(compile(code, path, 'exec'), {'__name__': '__main__', '__file__': path})
            stamp('ok %s (%.0fs)' % (name, time.time() - t0))
        except Exception:
            stamp('FAIL %s\n%s' % (name, traceback.format_exc()))
        try:
            shutil.move(path, os.path.join(DONE, time.strftime('%H%M%S_') + name))
        except Exception:
            stamp('could not move ' + name)
    time.sleep(2)
