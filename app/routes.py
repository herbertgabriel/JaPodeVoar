# app/routes.py
from flask import Blueprint, jsonify, render_template
import pandas as pd
import os

main = Blueprint('main', __name__)

current_dir = os.getcwd()
print(f"Diretório de trabalho atual: {current_dir}")

csv_path = os.path.join(current_dir, 'data', 'dados_balanceados.csv')

if os.path.exists(csv_path):
    dados = pd.read_csv(csv_path)
    print(dados.head())
else:
    print(f"Arquivo não encontrado: {csv_path}")

@main.route('/get_airports_and_flights')
def get_airports_and_flights():
    aeroportos = dados['AirportFrom'].unique().tolist() + dados['AirportTo'].unique().tolist()
    flights = dados['Flight'].unique().tolist()
    return jsonify({'aeroportos': sorted(set(aeroportos)), 'flights': sorted(flights)})

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