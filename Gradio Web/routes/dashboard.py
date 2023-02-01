from flask import render_template

def main_dashboard():
    return render_template('pages/iklim/index.html')

def research():
    return render_template('pages/penelitian/index.html')

def scraper():
    return render_template('pages/scraper/index.html')

def about():
    return render_template('pages/about/about.html')