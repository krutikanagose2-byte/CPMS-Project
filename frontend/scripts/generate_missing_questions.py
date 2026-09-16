import os
import json

topics = {
    'GameBasedAptitude.jsx': [
        ('Dice Games', 'diceGamesQuestions'),
        ('Cards & Playing Games', 'cardsPlayingGamesQuestions'),
        ('Coin Games', 'coinGamesQuestions'),
        ('Selection Games', 'selectionGamesQuestions'),
        ('Arrangement Games', 'arrangementGamesQuestions'),
        ('Game/Score Based Problems', 'scoreBasedGamesQuestions'),
    ],
    'VisualReasoning.jsx': [
        ('Paper Folding', 'paperFoldingQuestions'),
        ('Paper Cutting', 'paperCuttingQuestions'),
        ('Embedded Figures', 'embeddedFiguresQuestions'),
        ('Counting Figures', 'countingFiguresQuestions'),
        ('Pattern Completion', 'patternCompletionQuestions'),
        ('Cube & Dice', 'cubeAndDiceQuestions'),
    ],
    'Psychometric.jsx': [
        ('Personality Questions', 'personalityQuestions'),
        ('Situational Judgement', 'situationalJudgementQuestions'),
        ('Behavioural Questions', 'behaviouralQuestions'),
        ('Work Style', 'workStyleQuestions'),
        ('Leadership', 'leadershipQuestions'),
        ('Teamwork', 'teamworkQuestions'),
        ('Communication', 'communicationQuestions'),
        ('Problem Solving', 'problemSolvingQuestions'),
        ('Decision Making', 'decisionMakingQuestions'),
        ('Stress Management', 'stressManagementQuestions'),
        ('Adaptability', 'adaptabilityQuestions'),
        ('Motivation & Attitude', 'motivationAttitudeQuestions'),
    ],
    'Cryptarithmetic.jsx': [
        ('Letter–Digit Substitution', 'letterDigitSubstitutionQuestions'),
        ('Addition', 'additionQuestions'),
        ('Subtraction', 'subtractionQuestions'),
        ('Multiplication', 'multiplicationQuestions'),
        ('Division', 'divisionQuestions'),
        ('Missing Digits', 'missingDigitsQuestions'),
        ('Carry & Borrow', 'carryBorrowQuestions'),
        ('Word-Based Arithmetic', 'wordBasedArithmeticQuestions'),
        ('Equation-Based Cryptarithms', 'equationBasedCryptarithmsQuestions'),
        ('Alphametic Puzzles', 'alphameticPuzzlesQuestions'),
    ],
    'EssayWriting.jsx': [
        ('Technology', 'technologyQuestions'),
        ('Artificial Intelligence', 'aiQuestions'),
        ('Education', 'educationQuestions'),
        ('Social Media', 'socialMediaQuestions'),
        ('Environment', 'environmentQuestions'),
        ('Digital India', 'digitalIndiaQuestions'),
        ('Work From Home', 'wfhQuestions'),
        ('Women Empowerment', 'womenEmpowermentQuestions'),
        ('Online Education', 'onlineEducationQuestions'),
        ('Cyber Security', 'cyberSecurityQuestions'),
        ('Climate Change', 'climateChangeQuestions'),
        ('Startup & Entrepreneurship', 'startupQuestions'),
        ('Impact of AI on Jobs', 'aiJobsQuestions'),
        ('Data Privacy', 'dataPrivacyQuestions'),
        ('Importance of Teamwork', 'teamworkEssayQuestions'),
    ]
}

data_dir = r"c:\Users\ratho\Desktop\Clone\CPMS-Project-main\frontend\src\data"
components_dir = r"c:\Users\ratho\Desktop\Clone\CPMS-Project-main\frontend\src\components\StudyAndPreparationResources\CognizantMenu"

def generate_questions(topic_name):
    questions = []
    for i in range(1, 21):
        questions.append({
            "id": i,
            "text": f"Sample Question {i} for {topic_name}",
            "options": ["Option A", "Option B", "Option C", "Option D"],
            "answer": 0,
            "explanation": f"Sample explanation for {topic_name} question {i}.",
            "difficulty": "Medium"
        })
    return questions

# 1. Create data files
for comp, topic_list in topics.items():
    for title, var_name in topic_list:
        file_path = os.path.join(data_dir, f"{var_name}.js")
        q_data = generate_questions(title)
        
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(f"export const {var_name} = [\n")
            for q in q_data:
                f.write(f"  {json.dumps(q)},\n")
            f.write("];\n")

# 2. Update JSX components
for comp, topic_list in topics.items():
    comp_path = os.path.join(components_dir, comp)
    if not os.path.exists(comp_path):
        continue
    
    with open(comp_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Add imports at the top
    import_statements = ""
    for title, var_name in topic_list:
        import_statements += f"import {{ {var_name} }} from '../../../data/{var_name}';\n"
    
    if "import React" in content:
        content = content.replace("import React", import_statements + "import React", 1)

    # Replace `data: null` with `data: var_name`
    for title, var_name in topic_list:
        # e.g., { id: 2, title: 'Dice Games', questions: 20, color: '#fef3c7', iconColor: '#f59e0b', data: null }
        # Need a safe replace that finds the exact title and replaces data: null with data: var_name
        import re
        # Pattern: title: 'Dice Games' ... data: null
        # We can just do a regex sub
        pattern = rf"(title:\s*'{title}'.*?data:\s*)null"
        content = re.sub(pattern, rf"\1{var_name}", content, flags=re.IGNORECASE)
        
    with open(comp_path, "w", encoding="utf-8") as f:
        f.write(content)

print("Done generating and linking questions.")
