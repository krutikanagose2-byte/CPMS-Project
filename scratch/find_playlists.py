import urllib.request
import urllib.parse
import re

def get_pl(query):
    url = f"https://www.youtube.com/results?search_query={urllib.parse.quote(query)}&sp=EgIQAw%253D%253D"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
    try:
        html = urllib.request.urlopen(req, timeout=10).read().decode('utf-8', errors='ignore')
        matches = re.findall(r'"playlistId":"([a-zA-Z0-9_-]+)"', html)
        titles = re.findall(r'"title":\{"simpleText":"(.*?)"\}', html)
        if not titles:
            titles = re.findall(r'"title":\{"runs":\[\{"text":"(.*?)"\}\]', html)
        return (matches[0] if matches else None), (titles[0] if titles else "None")
    except Exception as e:
        return None, str(e)

topics = {
    'Logical Reasoning': 'logical reasoning placement playlist',
    'Verbal Ability': 'verbal ability english placement playlist',
    'Data Interpretation': 'data interpretation aptitude placement playlist',
    'Visual Reasoning': 'non verbal visual reasoning placement playlist',
    'Cryptarithmetic': 'cryptarithmetic placement playlist',
    'Essay Writing': 'essay writing placement wipro capgemini playlist',
    'Game Based Aptitude': 'game based aptitude capgemini placement playlist',
    'Psychometric': 'psychometric test placement aptitude playlist'
}

for name, q in topics.items():
    pl, t = get_pl(q)
    print(f"[{name}] ID: {pl} | Title: {t}")
