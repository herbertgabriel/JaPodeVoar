from flask import Blueprint, jsonify, render_template, request, redirect, url_for
import pandas as pd
import os
import joblib
from sklearn.preprocessing import LabelEncoder, MinMaxScaler

main = Blueprint('main', __name__)

current_dir = os.getcwd()
print(f"Diretório de trabalho atual: {current_dir}")

csv_path = os.path.join(current_dir, 'data', 'dados_balanceados.csv')

if os.path.exists(csv_path):
    dados = pd.read_csv(csv_path)
    print(dados.head())
else:
    print(f"Arquivo não encontrado: {csv_path}")

# Carregar o modelo e os encoders
model_path = os.path.join(current_dir, 'app/models', 'mlp_model.pkl')
le_airline_path = os.path.join(current_dir,'app/models',  'le_airline.pkl')
le_airportfrom_path = os.path.join(current_dir, 'app/models', 'le_airportfrom.pkl')
le_airportto_path = os.path.join(current_dir, 'app/models', 'le_airportto.pkl')
scaler_path = os.path.join(current_dir, 'app/models', 'scaler.pkl')

if os.path.exists(model_path) and os.path.exists(le_airline_path) and os.path.exists(le_airportfrom_path) and os.path.exists(le_airportto_path) and os.path.exists(scaler_path):
    model = joblib.load(model_path)
    le_airline = joblib.load(le_airline_path)
    le_airportfrom = joblib.load(le_airportfrom_path)
    le_airportto = joblib.load(le_airportto_path)
    scaler = joblib.load(scaler_path)
else:
    print("Modelo ou encoders não encontrados.")

@main.route('/get_airports_and_flights')
def get_airports_and_flights():
    aeroportos = dados['AirportFrom'].unique().tolist() + dados['AirportTo'].unique().tolist()
    airlines = dados['Airline'].unique().tolist()
    flights = dados['Flight'].unique().tolist()
    return jsonify({'aeroportos': sorted(set(aeroportos)), 'airlines': sorted(airlines), 'flights': sorted(flights)})

@main.route('/')
def index():
    return render_template('index.html')

@main.route('/dashboard')
def dashboard():
    return render_template('dashboard.html')

@main.route('/predictor')
def predictor():
    return render_template('predictor.html')

@main.route('/results')
def results():
    return render_template('results.html')

@main.route('/predict_delay', methods=['POST'])
def predict_delay():
    data = request.form
    airline = data['linha-aerea']
    airport_from = data['aeroporto-origem']
    airport_to = data['aeroporto-destino']
    day_of_week = int(data['dia-semana'])
    time = int(data['horario-voo'])
    length = int(data['duracao-voo'])
    flight_number = data['aeronave']

    # Criar um DataFrame com os dados do formulário
    input_data = pd.DataFrame({
        'Airline': [airline],
        'AirportFrom': [airport_from],
        'AirportTo': [airport_to],
        'DayOfWeek': [day_of_week],
        'Time': [time],
        'Length': [length],
        'Flight': [flight_number]
    })

    # Codificar as colunas categóricas
    input_data['Airline'] = le_airline.transform(input_data['Airline'])
    input_data['AirportFrom'] = le_airportfrom.transform(input_data['AirportFrom'])
    input_data['AirportTo'] = le_airportto.transform(input_data['AirportTo'])
    # Normalizar os dados
    input_data[['Airline', 'Flight', 'AirportFrom', 'AirportTo', 'DayOfWeek', 'Time', 'Length']] = scaler.transform(input_data[['Airline', 'Flight', 'AirportFrom', 'AirportTo', 'DayOfWeek', 'Time', 'Length']])

    # Fazer a previsão
    prediction = model.predict(input_data)[0]

    # Redirecionar para a página de resultados com a previsão
    return redirect(url_for('main.results', prediction=prediction))