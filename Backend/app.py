from flask_cors import CORS
from flask import Flask, request, jsonify 
import numpy as np 
import tensorflow as tf 
import joblib 

model = tf.keras.models.load_model('model/rent_prediction_model.h5', compile=False) # type: ignore
preprocessor = joblib.load('model/preprocessor.pkl')

app = Flask(__name__)
CORS(app, origins=["http://localhost:3000"])

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json  

    import pandas as pd 
    df = pd.DataFrame([data])

    X_processed = preprocessor.transform(df)

    prediction = model.predict(X_processed)[0][0]

    prediction = float(prediction)
    return jsonify({'predicted_rent': round(prediction, 2)})

if __name__ == '__main__':
    app.run(debug=True)
