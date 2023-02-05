import requests

from bs4 import BeautifulSoup


def get_place_info(query):
    url = f'https://api.weather.com/v3/location/search?query={query}&locationType=city&language=id-ID&format=json&apiKey=21d8a80b3d6b444998a80b3d6b1449d3'
    result = requests.get(url).json()

    if 'errors' in result:
        return False
    else:
        data = {
            'placeId': result['location']['placeId'][0],
            'lokasi': result['location']['address'][0],
            'provinsi': result['location']['adminDistrict'][0],
            'city': result['location']['city'][0],
            'timezone': result['location']['ianaTimeZone'][0],
            'latitude': result['location']['latitude'][0],
            'longitude': result['location']['longitude'][0]
        }

    return data


def get_30d_weather(place):
    if place:
        lat, long = place['latitude'], place['longitude']
        url = f'https://api.weather.com/v3/wx/conditions/historical/dailysummary/30day?geocode={lat},{long}&language=id-ID&format=json&units=m&apiKey=21d8a80b3d6b444998a80b3d6b1449d3'
        result = requests.get(url).json()

        data = []

        for i in range(len(result['dayOfWeek'])):
            data.append({
                **place,
                'hari': result['dayOfWeek'][i],
                'prediksi_hujan': result['rain24Hour'][i],
                'temperatureMin': result['temperatureMin'][i],
                'temperatureMax': result['temperatureMax'][i],
                'waktu': result['validTimeLocal'][i],
                'timestamp': result['validTimeUtc'][i],
                'kondisi_siang': result['wxPhraseLongDay'][i],
                'kondisi_malam': result['wxPhraseLongNight'][i],
            })

        return data
    else:
        return False


def get_info_today(placeId):
    url = f'https://weather.com/id-ID/weather/today/l/{place_id}'
    get_html = requests.get(url).text
    soup = BeautifulSoup(get_html, 'html.parser')

    result = {
        'location': soup.select_one('.CurrentConditions--location--1YWj_').text,
        'temp_now': soup.select_one('.CurrentConditions--tempValue--MHmYY').text,
        'condition': soup.select_one('.CurrentConditions--phraseValue--mZC_p').text,
        'wind': soup.select_one('.Wind--windWrapper--3Ly7c:not(svg)').text.replace('Wind Direction',''),
        'rain_precip': soup.select_one('div > section > div > ul > li > a > div.Column--precip--3JCDO > span').text.replace('Kemungkinan Hujan','')
    }

    return result


place_id = get_place_info('bandung')['placeId']
today = get_info_today(place_id)
# print(today)
# open('scr.html', 'w', encoding='utf-8').w
