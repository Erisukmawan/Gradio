from flask import render_template, request
from functions import utils, weather

def main_dashboard():
    client_ip = request.remote_addr
    if client_ip == '127.0.0.1': client_ip = utils.get_self_ip()
    city = utils.get_ip_info(client_ip)['city']
    place_info = weather.get_place_info(city)
    place_id = place_info['placeId']
    today = weather.get_info_today(place_id)
    return render_template('pages/iklim/index.html', today=today)

def research():
    return render_template('pages/penelitian/index.html')

def radar():
    return render_template('pages/radar/index.html')

def about():
    return render_template('pages/about/about.html')