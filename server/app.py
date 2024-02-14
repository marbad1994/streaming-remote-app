from flask import Flask
from pynput.keyboard import Key, Controller
from pynput.mouse import Button, Controller as Mouse
from time import sleep
from platform import system

app = Flask(__name__)
API_PREFIX = "/api/v1"
ctrl = Key.ctrl if system() != "Darwin" else Key.cmd
keys = {
    "space": [Key.space],
    "up": [Key.up],
    "down": [Key.down],
    "rewind": [Key.shift, Key.left],
    "fast-forward": [Key.shift, Key.right],
    "close": [ctrl, "w"],
    "refresh": [ctrl, "r"],
}
mouse = Mouse()

@app.route(f"{API_PREFIX}/key-command/<key>")
def key_command(key):
    if key == "sspace":
        mouse.press(Button.left)
        sleep(0.4)
        mouse.release(Button.left)
    if key in keys.keys():
        key = keys[key]
    else:
        key = [key]
    keyboard = Controller()
    for k in key:
        keyboard.press(k)
    for k in key:
        keyboard.release(k)
    return "Success"


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
