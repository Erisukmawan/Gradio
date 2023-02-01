import json
import requests

# Get list dari json
kabupaten_list =  json.load(open('kabupaten.json'))

# counter
count = 1

def get_lat_long(query):
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
    else: return False
    
store = []

for kabupaten in kabupaten_list:
    print(f'[{count}] Scraping -> {kabupaten}', end='')
    place = get_lat_long(kabupaten)
    weather = get_30d_weather(place)
    if weather:
        print(' | OK | ', end='')
        store += weather
        print(f'Total: {len(store)}')
    else:
        print(' | Error!', end='')
    count+=1

open('dataset_hujan_perkabupaten.json', 'w').write(json.dumps(store))
# print(json.dumps(weather, indent=3))