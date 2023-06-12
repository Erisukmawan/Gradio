from flask import Flask
from routes.dashboard import (
    main_dashboard,
    research,
    radar,
    about
)

app = Flask(__name__,
            static_url_path='',
            static_folder='./static/',
            template_folder='./template/')

app.add_url_rule('/', 'index', main_dashboard)
app.add_url_rule('/research', '', research)
app.add_url_rule('/radar', 'radar', radar)
app.add_url_rule('/about', 'about', about)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80)
