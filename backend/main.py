from flask import Flask, request, jsonify
import pickle
import torch

app = Flask(__name__)

def load_transformer_model():
    model = torch.load('models/transformer_model.pt')
    return model

def load_ffnn_model():
    with open('models/ffnn_model.pkl', 'rb') as f:
        model = pickle.load(f)
    return model

def load_lstm_model():
    model = torch.load('models/lstm_model.pt')
    return model

def load_rf_model():
    with open('models/rf_model.pkl', 'rb') as f:
        model = pickle.load(f)
    return model

def load_nb_model():
    with open('models/nb_model.pkl', 'rb') as f:
        model = pickle.load(f)
    return model

def predict_with_model(ciphertext, model):
    if isinstance(model, torch.nn.Module):
        model.eval()
        input_data = torch.tensor([ord(c) for c in ciphertext])
        with torch.no_grad():
            output = model(input_data)
        return output.tolist()
    else:
        input_data = [[ord(c) for c in ciphertext]]
        output = model.predict(input_data)
        return output.tolist()

@app.route('/ncidapi/evaluate/single_line/ciphertext', methods=['GET'])
def evaluate_ciphertext():
    ciphertext = request.args.get('ciphertext', '')
    architectures = request.args.getlist('architecture')

    model_loaders = {
        "Transformer": load_transformer_model,
        "FFNN": load_ffnn_model,
        "LSTM": load_lstm_model,
        "RF": load_rf_model,
        "NB": load_nb_model
    }

    response_data = {
        "ciphertext": ciphertext,
        "results": {}
    }

    for arch in architectures:
        model_loader = model_loaders.get(arch)
        if model_loader:
            model = model_loader()
            try:
                result = predict_with_model(ciphertext, model)
                response_data["results"][arch] = f"Prediction result: {result}"
            except Exception as e:
                response_data["results"][arch] = f"Error during prediction: {str(e)}"
        else:
            response_data["results"][arch] = f"Model {arch} not found."

    return jsonify(response_data)

if __name__ == '_main_':
    app.run(debug=True)