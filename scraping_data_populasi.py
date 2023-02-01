import requests
from bs4 import BeautifulSoup
import pandas

# Create an URL object
url = 'https://www.worldometers.info/world-population/south-eastern-asia-population/'
# Create object page
page = requests.get(url)

# parser-lxml = Change html to Python friendly format
# Obtain page's information
soup = BeautifulSoup(page.text, 'lxml')
soup

# Obtain information from tag <table>
table1 = soup.find('table', {"class": "table"})
table1

# Obtain every title of columns with tag <th>
headers = []
for i in table1.find_all('th'):
 title = i.text
 headers.append(title)

# Convert wrapped text in column 13 into one line text

# Create a dataframe
populasi_data_ASEAN = pandas.DataFrame(columns = headers)
# Create a for loop to fill mydata
for j in table1.find_all('tr')[1:]:
 row_data = j.find_all('td')
 row = [i.text for i in row_data]
 length = len(populasi_data_ASEAN)
 populasi_data_ASEAN.loc[length] = row
