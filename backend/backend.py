from flask import Flask, jsonify, render_template, send_from_directory
import random

app = Flask(__name__, template_folder='../templates', static_folder='../frontend')

def generate_unique_answers(correct_answer, count=4):
    answers = set()
    answers.add(correct_answer)
    
    while len(answers) < count:
        # Generate a random offset, but ensure it's not zero
        offset = random.choice([-2, -1, 1, 2])
        new_answer = correct_answer + offset
        
        # Ensure the new answer is positive
        if new_answer > 0:
            answers.add(new_answer)
    
    return list(answers)

@app.route('/generate-question')
def generate_question():
    num1 = random.randint(1, 10)
    num2 = random.randint(1, 10)
    question = f"What is {num1} + {num2}?"
    correct_answer = num1 + num2
    
    all_answers = generate_unique_answers(correct_answer)
    random.shuffle(all_answers)
    
    return jsonify({
        "question": question,
        "answers": all_answers,
        "correct_answer": correct_answer
    })

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/static/<path:filename>')
def serve_static(filename):
    return send_from_directory(app.static_folder, filename)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)