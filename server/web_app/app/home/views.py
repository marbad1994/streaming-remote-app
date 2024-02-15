from flask import render_template, redirect, url_for
from . import home
import socket
import webbrowser
from pynput.keyboard import Key, Controller
from pynput.mouse import Button, Controller as Mouse
from time import sleep
from platform import system

def get_ip():
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        # doesn't even have to be reachable
        s.connect(('10.255.255.255', 1))
        IP = s.getsockname()[0]
    except:
        IP = '127.0.0.1'
    finally:
        s.close()
    return IP

@home.route("/api/v1/open-external-link/<url>")
def open_external_link(url):
    """
    Open an external link
    """
    webbrowser.open(f"www.{url}.com")
    return redirect(url_for("home.homepage"))

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

@home.route(f"{API_PREFIX}/key-command/<key>")
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

@home.route("/")
def homepage():
    """
    Render the homepage template on the / route
    """
    return render_template("page/home/index.html", title="Welcome", ip=get_ip())
