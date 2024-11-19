import pytest
from flask import Flask
from flask_testing import TestCase
from app import create_app  # Supondo que sua aplicação Flask esteja no arquivo app.py

class TestRoutes(TestCase):
    def create_app(self):
        # Configurações para o ambiente de teste
        app = create_app()
        app.config['TESTING'] = True
        return app

    def test_index_route(self):
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'index', response.data)

    def test_dashboard_route(self):
        response = self.client.get('/dashboard')
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'dashboard', response.data)

    def test_predictor_route(self):
        response = self.client.get('/predictor')
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'predictor', response.data)

    def test_results_route(self):
        response = self.client.get('/results')
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'results', response.data)

    def test_get_airports_and_flights_route(self):
        response = self.client.get('/get_airports_and_flights')
        self.assertEqual(response.status_code, 200)
        data = response.get_json()
        self.assertIn('aeroportos', data)
        self.assertIn('airlines', data)
        self.assertIn('flights', data)

    def test_predict_delay_route(self):
        response = self.client.post('/predict_delay', data={
            'linha-aerea': 'Airline1',
            'aeroporto-origem': 'Airport1',
            'aeroporto-destino': 'Airport2',
            'dia-semana': 1,
            'horario-voo': 10,
            'duracao-voo': 120,
            'aeronave': 'Flight1'
        })
        self.assertEqual(response.status_code, 302)  # Redirecionamento esperado

if __name__ == '__main__':
    pytest.main()