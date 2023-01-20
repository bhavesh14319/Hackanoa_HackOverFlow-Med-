import numpy as np
from flask import Flask, request, jsonify, render_template
import pickle
import pandas as pd

app = Flask(__name__)
model = pickle.load(open('token.pickle', 'rb'))

@app.route('/predict_api',methods=['POST'])
def predict_api():
    '''
    For direct API calls trought request
    '''
    # data = request.get_json(force=True)

    # output = prediction[0]
    output = request.get_json(force=True);
    prediction = model.predict([np.array(list(output.values()))])
    res = {"predicted disease" : prediction[0]}
    # prediction = model.predict(output)
    print(res)
    
    # print()
    return jsonify(res)

if __name__ == "__main__":
    app.run(debug=True)








