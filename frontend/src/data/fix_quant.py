import json
import re

with open('quant.py', 'r', encoding='utf-8') as f:
    code = f.read()

text_match = re.search(r'text = \"\"\"(.*?)\"\"\"', code, re.DOTALL)
if not text_match:
    text_match = re.search(r"text = '''(.*?)'''", code, re.DOTALL)

text = text_match.group(1)

def parse_questions(text):
    topics_data = {}
    
    topic_blocks = re.split(r'\d+\.\s+([A-Za-z &,-]+)\s+—\s+\d+\s+MCQs', text)
    
    for i in range(1, len(topic_blocks), 2):
        topic_name = topic_blocks[i].strip()
        questions_text = topic_blocks[i+1]
        
        q_blocks = re.split(r'(Q\d+\..+?)(?=Q\d+\.|$)', questions_text, flags=re.DOTALL)
        
        questions_arr = []
        q_id = 1
        
        for q_text in q_blocks:
            if not q_text.strip():
                continue
                
            q_match = re.search(r'Q\d+\.\s+(.*?)(?=A\))', q_text, re.DOTALL)
            options_match = re.findall(r'([A-D]\))\s+(.*?)(?=[A-D]\)|Answer:|$)', q_text, re.DOTALL)
            ans_match = re.search(r'Answer:\s+([A-D])', q_text, re.DOTALL)
            sol_match = re.search(r'Solution:\s+(.*?)$', q_text, re.DOTALL)
            
            if q_match and len(options_match) >= 4 and ans_match:
                q = q_match.group(1).strip()
                opts = [m[1].strip() for m in options_match[:4]]
                ans_char = ans_match.group(1).strip()
                ans_idx = ord(ans_char) - 65
                sol = sol_match.group(1).strip() if sol_match else ''
                
                difficulty = 'Easy'
                if q_id >= 15:
                    difficulty = 'Hard'
                elif q_id >= 8:
                    difficulty = 'Medium'
                
                questions_arr.append({
                    'id': q_id,
                    'text': q,
                    'options': opts,
                    'answer': ans_idx,
                    'explanation': sol,
                    'difficulty': difficulty
                })
                q_id += 1
                
        topics_data[topic_name] = questions_arr
        
    return topics_data

topics_data = parse_questions(text)

filenames = {
    'Number System': 'numberSystemQuestions',
    'HCF & LCM': 'hcfLcmQuestions',
    'Percentages': 'percentagesQuestions',
    'Profit, Loss & Discount': 'profitLossQuestions',
    'Ratio & Proportion': 'ratioProportionQuestions',
    'Average': 'averageQuestions',
    'Simple Interest & Compound Interest': 'interestQuestions'
}

for topic, q_arr in topics_data.items():
    if topic in filenames:
        var_name = filenames[topic]
        file_path = f'{var_name}.js'
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(f'export const {var_name} = ')
            json.dump(q_arr, f, indent=2, ensure_ascii=False)
            f.write(';\n')
        print(f'Created {file_path} with {len(q_arr)} questions.')
