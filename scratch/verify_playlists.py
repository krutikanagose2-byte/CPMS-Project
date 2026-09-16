import urllib.request
import re

playlists = {
    'Logical Reasoning': 'PLMufDeLh5x2CK1wUwEFjdd1JHPOfDRsq3', # Yash Jain's 1.2 Logical Reasoning Complete Playlist
    'Verbal Ability': 'PLMufDeLh5x2BWYJy0ldl6vgrQ4nZm1Qap', # Yash Jain's Verbal Ability (English) Playlist
    'Data Interpretation': 'PLpyc33gOcbVA4qXMoQ5vmhefTruk5t9lt', # CareerRide Data Interpretation
    'Visual Reasoning': 'PL_T4J2W5lH6x9S5X_x0Q7b_rL7Gz4y-2K', 
    'Cryptarithmetic': 'PLggZQjVsYHzkJj_gCv-9kbKRvuadMCPpK', # Cryptarithmetic
    'Essay Writing': 'PLMufDeLh5x2DPgIWzaFQGkV7NOoCSqghI', 
    'Game Based Aptitude': 'PLQit65uXNfmuZN18GULRSSp0Go2ofPsQC',
    'Psychometric': 'PLCcteVWYyBtvXWxT-lsEZERegnZqDJDaq'
}

for name, pid in playlists.items():
    try:
        url = f"https://www.youtube.com/playlist?list={pid}"
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        html = urllib.request.urlopen(req, timeout=6).read().decode('utf-8', errors='ignore')
        m = re.search(r'<title>(.*?)</title>', html)
        print(f"OK: {name} => {m.group(1) if m else 'No title'} (ID: {pid})")
    except Exception as e:
        print(f"ERR: {name} ({pid}) => {e}")
