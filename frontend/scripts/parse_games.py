import re
import os
import json

raw_file = 'raw_game_based.txt'
out_dir = '.'

with open(raw_file, 'r', encoding='utf-8') as f:
    text = f.read()

# Split into topics
topics_raw = re.split(r'\n(\d+)\.\s+([A-Za-z0-9&\- ]+)\s+—\s+\d+\n', '\n' + text)
# topics_raw[0] is empty
# topics_raw[1] is number, topics_raw[2] is title, topics_raw[3] is content

def to_camel_case(s):
    # Remove non-alphanumeric (keep spaces), title case, then remove spaces
    s = re.sub(r'[^a-zA-Z0-9 ]', '', s)
    words = s.split()
    if not words:
        return ''
    return words[0].lower() + ''.join(w.capitalize() for w in words[1:])

topics = []

for i in range(1, len(topics_raw), 3):
    topic_num = topics_raw[i]
    topic_title = topics_raw[i+1].strip()
    topic_content = topics_raw[i+2]
    
    questions = []
    
    # parse questions
    # Example: 1. 2,4,8,16,? A)20 B)24 C)32 D)36 — Ans: C
    q_matches = re.finditer(r'(\d+)\.\s+(.*?)\s+A\)(.*?)\s+B\)(.*?)\s+C\)(.*?)\s+D\)(.*?)\s+—\s+Ans:\s+([A-D])', topic_content)
    
    for match in q_matches:
        q_num, q_text, opt_a, opt_b, opt_c, opt_d, ans = match.groups()
        options = [opt_a.strip(), opt_b.strip(), opt_c.strip(), opt_d.strip()]
        
        # Determine correct answer text
        ans_idx = ord(ans) - ord('A')
        correct_answer = options[ans_idx]
        
        questions.append({
            "id": int(q_num),
            "question": q_text.strip(),
            "options": options,
            "answer": correct_answer
        })
        
    if questions:
        var_name = to_camel_case(topic_title) + 'Questions'
        
        file_path = os.path.join(out_dir, f'{var_name}.js')
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(f'export const {var_name} = ')
            json.dump(questions, f, indent=2)
            f.write(';\n')
            
        topics.append({
            "num": int(topic_num),
            "title": topic_title,
            "var_name": var_name
        })

print("Generated files:")
for t in topics:
    print(t)
    
# Update GameBasedAptitude.jsx
jsx_path = '../components/StudyAndPreparationResources/CognizantMenu/GameBasedAptitude.jsx'
with open(jsx_path, 'r', encoding='utf-8') as f:
    jsx_content = f.read()
    
# Generate imports
imports = []
for t in topics:
    imports.append(f"import {{ {t['var_name']} }} from '../../../data/{t['var_name']}';")
    
# Check where to add imports
if 'import { numberGamesQuestions' not in jsx_content:
    imports_str = '\n'.join(imports) + '\n'
    # Insert after import QuizComponent
    jsx_content = jsx_content.replace("import QuizComponent from './QuizComponent';", "import QuizComponent from './QuizComponent';\n" + imports_str)
    
# Update topics array
# Example: 
#   {
#     "id": 1,
#     "title": "Number Games",
#     "questions": 4,
#     "color": "blue"
#   },
import re

for t in topics:
    # replace "questions": 4 with "data": var_name
    title_pattern = f'"title": "{t["title"]}"'
    # find the block and add data property
    # regex to find the object block for this title
    # { id: X, title: "Title", questions: 4, color: "blue" }
    
    # We can just do a string replacement if it matches exactly, or use regex
    # The JSON array in JSX has exact format
    
    search_str = f'    "title": "{t["title"]}",\n    "questions": 4,\n    "color":'
    replace_str = f'    "title": "{t["title"]}",\n    "data": {t["var_name"]},\n    "questions": {t["var_name"]}.length,\n    "color":'
    
    jsx_content = jsx_content.replace(search_str, replace_str)
    
with open(jsx_path, 'w', encoding='utf-8') as f:
    f.write(jsx_content)
    
print("Updated GameBasedAptitude.jsx")
