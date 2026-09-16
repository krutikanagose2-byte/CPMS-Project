import urllib.request
import re

url = 'https://www.youtube.com/results?search_query=non+verbal+visual+reasoning+playlist&sp=EgIQAw%253D%253D'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
html = urllib.request.urlopen(req).read().decode('utf-8', errors='ignore')
ids = re.findall(r'"playlistId":"([a-zA-Z0-9_-]+)"', html)

for pid in ids[:8]:
    try:
        purl = f"https://www.youtube.com/playlist?list={pid}"
        phtml = urllib.request.urlopen(urllib.request.Request(purl, headers={'User-Agent': 'Mozilla/5.0'}), timeout=5).read().decode('utf-8', errors='ignore')
        m = re.search(r'<title>(.*?)</title>', phtml)
        print(f"ID: {pid} => {m.group(1) if m else 'No title'}")
    except Exception as e:
        pass
