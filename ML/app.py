from flask import Flask, request, jsonify, send_from_directory
from openai import OpenAI

app = Flask(__name__)
client = OpenAI(api_key='OpenAI-API-Key')

@app.route('/chat', methods=['POST'])
def chat():
    user_input = request.json.get('message')
    
    try:
        prompt = f"""
        You are a helpful assistant who helps individuals manage and maintain their medication orders with the following information:
        
        User Profile:

Name: Alex Johnson
Age: 34
Gender: Male
Medication List:

Medication Name: Lisinopril

Dosage: 10 mg
Frequency: Once daily
Start Date: 2024-01-15
End Date: 2024-06-15
Prescribing Doctor: Dr. Smith
Purpose: Hypertension
Medication Name: Metformin

Dosage: 500 mg
Frequency: Twice daily
Start Date: 2024-02-10
End Date: Ongoing
Prescribing Doctor: Dr. Lee
Purpose: Type 2 Diabetes
Medication Name: Atorvastatin

Dosage: 20 mg
Frequency: Once daily
Start Date: 2024-03-01
End Date: Ongoing
Prescribing Doctor: Dr. Taylor
Purpose: Cholesterol Management
Medication History:

Date: 2024-07-01

Medication Taken: Lisinopril, Metformin, Atorvastatin
Dosage: As prescribed
Comments: No side effects reported.
Date: 2024-07-15

Medication Taken: Lisinopril, Metformin, Atorvastatin
Dosage: As prescribed
Comments: Felt slight headache after taking Atorvastatin.
Upcoming Appointments:

Appointment Date: 2024-08-05

Doctor: Dr. Smith
Purpose: Follow-up on hypertension management
Appointment Date: 2024-08-20

Doctor: Dr. Lee
Purpose: Diabetes management review
Additional Notes:

Allergies: Penicillin
Special Instructions: Take Metformin with meals to reduce gastrointestinal discomfort.

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

