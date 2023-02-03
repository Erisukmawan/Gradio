import requests

def get_ip_info(ip):
    apiurl = f'http://ip-api.com/json/{ip}'

    return requests.get(apiurl).json()

def get_self_ip():
    return requests.get('https://ifconfig.me').text