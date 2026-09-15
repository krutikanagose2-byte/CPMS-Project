import json
import re

answers_raw = """
1C, 2C, 3C, 4C, 5D, 6B, 7C, 8A, 9C, 10C, 11D, 12B, 13A, 14C, 15C, 16C, 17B, 18C, 19A, 20C
21C, 22D, 23B, 24C, 25C, 26C, 27C, 28B, 29B, 30B, 31C, 32B, 33C, 34C, 35C, 36B, 37C, 38A, 39C, 40A
41C, 42C, 43C, 44C, 45B, 46B, 47A, 48C, 49B, 50B, 51C, 52B, 53B, 54C, 55B, 56B, 57A, 58C, 59C, 60B
61B, 62B, 63B, 64B, 65B, 66B, 67A, 68C, 69C, 70B, 71B, 72C, 73C, 74C, 75B, 76B, 77B, 78B, 79A, 80B
81C, 82C, 83B, 84B, 85C, 86C, 87B, 88B, 89B, 90B, 91C, 92C, 93B, 94C, 95C, 96B, 97B, 98C, 99B, 100C
101C, 102B, 103B, 104C, 105C, 106B, 107B, 108B, 109B, 110C, 111C, 112B, 113B, 114B, 115B, 116B, 117A, 118B, 119B, 120B
121B, 122B, 123B, 124C, 125C, 126C, 127B, 128C, 129C, 130C, 131B, 132B, 133B, 134C, 135C, 136C, 137C, 138D, 139C, 140B
141C, 142B, 143C, 144C, 145C, 146C, 147B, 148C, 149B, 150C, 151C, 152C, 153B, 154C, 155D, 156C, 157C, 158C, 159A, 160B
341B, 351C, 342B, 352B, 343B, 353B, 344C, 354C, 345B, 355C, 346C, 356A, 347C, 357C, 348B, 358C, 349C, 359C, 350B, 360C
361C, 371C, 362C, 372B, 363C, 373C, 364B, 374B, 365C, 375C, 366C, 376C, 367C, 377A, 368B, 378D, 369A, 379C, 370B, 380B
381A, 391A, 382A, 392C, 383A, 393C, 384C, 394C, 385C, 395C, 386C, 396A, 387C, 397C, 388C, 398C, 389C, 399A, 390C, 400A
401C, 411B, 402D, 412C, 403A, 413B, 404C, 414B, 405B, 415B, 406B, 416C, 407C, 417B, 408C, 418B, 409D, 419C, 410C, 420B
421B, 431D, 422A, 432B, 423C, 433B, 424C, 434C, 425C, 435C, 426C, 436C, 427C, 437A, 428C, 438A, 429B, 439C, 430C, 440C
441B, 451C, 442B, 452C, 443B, 453B, 444B, 454B, 445B, 455A, 446B, 456D, 447A, 457C, 448C, 458B, 449B, 459B, 450C, 460C
461B, 471B, 462B, 472C, 463C, 473C, 464B, 474B, 465B, 475C, 466B, 476C, 467B, 477B, 468C, 478C, 469C, 479C, 470C, 480B
481B, 491B, 482B, 492C, 483B, 493B, 484B, 494C, 485B, 495B, 486D, 496C, 487C, 497C, 488C, 498B, 489C, 499C, 490B, 500C
"""
answers = {}
for match in re.finditer(r'(\d+)([A-D])', answers_raw):
    q_num, ans = match.groups()
    answers[int(q_num)] = ans

output_json = []

with open('scratch_di.txt', 'r', encoding='utf-8') as f:
    lines = f.readlines()

current_topic = ""
q_id = 0
current_q = None
options = []

for line in lines:
    line = line.strip()
    if not line: continue
    
    if line.startswith('#'):
        current_topic = line.lstrip('# ').strip()
        continue
        
    m = re.match(r'^Q(\d+)\.', line)
    if m:
        if current_q:
            ans_char = answers.get(q_id, 'A')
            ans_idx = ord(ans_char) - ord('A')
            output_json.append({
                'id': q_id,
                'topic': current_topic,
                'text': current_q,
                'options': options,
                'answer': ans_idx,
                'explanation': f'Correct Answer is {ans_char}',
                'difficulty': 'Medium'
            })
            
        q_id = int(m.group(1))
        current_q = line
        options = []
    elif line.startswith(('A)', 'B)', 'C)', 'D)')):
        options.append(line[3:].strip())
    elif line.startswith(('A ', 'B ', 'C ', 'D ')):
        options.append(line[2:].strip())
    elif current_q and not options:
        current_q += '\\n' + line

if current_q:
    ans_char = answers.get(q_id, 'A')
    ans_idx = ord(ans_char) - ord('A')
    output_json.append({
        'id': q_id,
        'topic': current_topic,
        'text': current_q,
        'options': options,
        'answer': ans_idx,
        'explanation': f'Correct Answer is {ans_char}',
        'difficulty': 'Medium'
    })

# Format the JS output
js_code = f"export const dataInterpretationQuestions = {json.dumps(output_json, indent=2)};"
with open('src/data/dataInterpretationQuestions.js', 'w', encoding='utf-8') as f:
    f.write(js_code)
print(f"Generated {len(output_json)} questions.")
