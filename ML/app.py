from flask import Flask, request, jsonify, send_from_directory
from openai import OpenAI
from dotenv import load_dotenv
import os

app = Flask(__name__)
load_dotenv()
api_key = os.getenv('OPENAI_API_KEY')
client = OpenAI(api_key=api_key)

@app.route('/chat', methods=['POST'])
def chat():
    user_input = request.json.get('message')
    
    try:
        prompt = f"""
        You are a helpful assistant who helps individuals manage and maintain their medication orders with the following information. 
        Remember, do not reference the code, reference the information of the user, prescriptions, start data, end date, and 
        quantity of prescriptions, as well as pharmacies and make insights. Remember to greet the user by their name. Also, respond
        in sentences, don't just list information out:
        
        User Profile:

INSERT INTO users (email, password, first_name, last_name, address) VALUES
                    ('john.doe@gmail.com', '1234567', 'John', 'Doe', '123 Cherry Apple St, Denver CO 80014');

INSERT INTO prescriptions (name) VALUES
                        ('Lisinopril'),
                        ('Levothyroxine'),
                        ('Atorvastatin'),
                        ('Metformin'),
                        ('Simvastatin'),
                        ('Omeprazole'),
                        ('Amlodipine'),
                        ('Metoprolol'),
                        ('Acetaminophen'),
                        ('Albuterol');

INSERT INTO prescriptions_users (_prescription_id, _user_id, start_date, end_date, quantity) VALUES
                            (1, 1, '2024-07-14', '2024-08-05', 20),
                            (1, 1, '2024-05-01', '2024-05-15', 30),
                            (1, 1, '2024-03-05', '2024-03-18', 15),
                            (2, 1, '2024-07-25', '2024-08-12', 24),
                            (2, 1, '2024-05-04', '2024-05-20', 19),
                            (2, 1, '2024-03-10', '2024-03-20', 15),
                            (3, 1, '2024-07-22', '2024-08-12', 28),
                            (3, 1, '2024-05-10', '2024-05-20', 10),
                            (3, 1, '2024-03-08', '2024-03-25', 30),
                            (4, 1, '2024-07-20', '2024-08-02', 11),
                            (4, 1, '2024-05-08', '2024-05-20', 15),
                            (4, 1, '2024-03-17', '2024-03-28', 12),
                            (5, 1, '2024-07-17', '2024-08-10', 27),
                            (5, 1, '2024-05-11', '2024-05-25', 15),
                            (5, 1, '2024-03-02', '2024-03-12', 14),
                            (6, 1, '2024-07-15', '2024-08-25', 27),
                            (6, 1, '2024-05-03', '2024-05-25', 20),
                            (6, 1, '2024-03-08', '2024-03-26', 25),
                            (7, 1, '2024-07-04', '2024-08-01', 35),
                            (7, 1, '2024-05-10', '2024-05-22', 18),
                            (7, 1, '2024-03-10', '2024-03-24', 24),
                            (8, 1, '2024-07-20', '2024-08-01', 11),
                            (8, 1, '2024-05-20', '2024-05-28', 8),
                            (8, 1, '2024-03-12', '2024-03-23', 11),
                            (9, 1, '2024-07-22', '2024-08-05', 14),
                            (9, 1, '2024-05-17', '2024-05-25', 12),
                            (9, 1, '2024-03-05', '2024-03-17', 23),
                            (10, 1, '2024-07-11', '2024-08-02', 32),
                            (10, 1, '2024-05-12', '2024-05-25', 24),
                            (10, 1, '2024-03-18', '2024-03-28', 10);

INSERT INTO pharmacies (name, address) VALUES
                        ('Sams Club Pharmacy #4777', '7805 E 35th Ave, Denver, CO 80238'),
                        ('Walmart Pharmacy #3533', '7800 Smith Rd, Denver, CO 80207'),
                        ('Walgreens Pharmacy #7581', '7311 E 29th Dr, Denver, CO 80238');

INSERT INTO pharmacies_prescriptions (_pharmacy_id, _prescription_id) VALUES
                                    (1, 1),
                                    (2, 2),
                                    (3, 3),
                                    (1, 4),
                                    (2, 5),
                                    (3, 6),
                                    (1, 7),
                                    (2, 8),
                                    (3, 9),
                                    (1, 10);

                            

        User: {user_input}
        """

        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {"role": "system", "content": prompt},
                {"role": "user", "content": user_input}
            ]
        )
        
        bot_response = response.choices[0].message.content
        return jsonify({"response": bot_response})
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/')
def index():
    return send_from_directory('', 'index.html')

if __name__ == "__main__":
    app.run(debug=True)

