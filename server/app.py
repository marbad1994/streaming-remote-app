from flask import Flask, render_template
import webbrowser
from pynput.keyboard import Key, Controller
from pynput.mouse import Button, Controller as Mouse
from time import sleep
import pyautogui

app = Flask(__name__)
keys = {
        "space": [Key.space],
        "up": [Key.up],
        "down": [Key.down],
        "rewind": [Key.shift, Key.left],
        "fast-forward": [Key.shift, Key.right],
        "close": [Key.ctrl, "w"],
        "refresh": [Key.ctrl, "r"]
        }
mouse = Mouse()

def play_on_start():
    sleep(5)
    mouse.position = (987, 484)
    sleep(0.2)
    for i in range(1):
         mouse.press(Button.left)
         mouse.release(Button.left)

@app.route("/")
def index():
    return "START"

@app.route("/<netflix_id>")
def open_site(netflix_id):
    url = "https://www.netflix.com/watch/" + netflix_id
    webbrowser.open(url, new=1, autoraise=True)
    play_on_start()
    return "STARTED"

@app.route("/key-command/<key>")
def key_command(key):
    if key == "sspace":
        for i in range(1):
            mouse.press(Button.left)
            mouse.release(Button.left)
            sleep(0.4)
    if key in keys.keys():
        key = keys[key]
    else:
        key = [key]
    keyboard = Controller()
    for k in key:
        keyboard.press(k)
    for k in key:
        keyboard.release(k)
    print(key[0])
    if key[0] == "refresh":
        play_on_start()
    return "Success"

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")

