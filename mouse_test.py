from pynput.mouse import Button, Controller
from time import sleep
mouse = Controller()

# Read pointer position
print('The current pointer position is {0}'.format(
    mouse.position))


# Move pointer relative to current position
for i in range(10):
    mouse.move(5, i+5)
    sleep(0.1)