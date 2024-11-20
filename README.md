# Previsão de Atraso de Voo

Este projeto tem como objetivo prever atrasos de voos utilizando técnicas de Machine Learning. Ele foi desenvolvido com Flask, uma biblioteca leve para aplicações web em Python.

## Estrutura do Projeto

```
JaPodeVoar/
├── .gitignore
├── .vscode/
│   └── settings.json
├── app/
│   ├── __init__.py
│   ├── models/
│   │   ├── eda.ipynb
│   │   ├── le_airline.pkl
│   │   ├── le_airportfrom.pkl
│   │   ├── le_airportto.pkl
│   │   ├── mlp_model.pkl
│   │   ├── scaler.pkl
│   │   ├── train_model.ipynb
│   ├── routes.py
│   ├── static/
│   │   ├── css/
│   │   │   ├── dashboards.css
│   │   │   ├── forms.css
│   │   │   ├── globals.css
│   │   ├── image/
│   │   ├── js/
│   ├── templates/
│   │   ├── dashboard.html
│   │   ├── index.html
│   │   ├── predictor.html
│   │   ├── results.html
│   ├── utils.py
│   ├── config.py
├── data/
│   ├── Airlines.csv
│   ├── dados_balanceados.csv
├── tests/
│   ├── test_routes.py
├── app.py
├── requirements.txt
└── README.md
```

## Pré-requisitos

Antes de executar o projeto, você precisa ter o Python 3.x instalado em sua máquina.

## Como Usar

1. **Crie o Ambiente Virtual**:
   No terminal, navegue até o diretório do projeto e execute o seguinte comando para criar um ambiente virtual:

   ```bash
   python -m venv venv   
   ```

   Ativar no Windows:
   ```bash
   .\venv\Scripts\activate   
   ```
   No macOS e Linux:
   ```bash
   source venv/bin/activate   
   ```

2. **Instalando as Dependências**:
   Instale as dependências necessárias com o seguinte comando:

   ```bash
   pip install -r requirements.txt
   ```

3. **Inicie o Servidor Flask**:
   Execute o arquivo `app.py` para iniciar o servidor:

   ```bash
   python app.py
   ```

   O aplicativo estará disponível em `http://127.0.0.1:5000`.

4. **Faça Previsões**:
   Acesse o aplicativo no seu navegador e preencha o formulário com os dados do voo. O modelo retornará a previsão de atraso.

## Estrutura dos Dados

O modelo utiliza as seguintes colunas na base de dados de voos:

- **Airline**: Nome abreviado de diferentes companhias aéreas comerciais.
- **Flight**: Número que representa a aeronave que realizou o voo.
- **AirportFrom**: Sigla do aeroporto de origem do voo.
- **AirportTo**: Sigla do aeroporto de destino do voo.
- **DayOfWeek**: Representa o dia da semana em que o voo foi realizado (1 a 7).
- **Time**: Indica em minutos o horário programado para a decolagem ou pouso.
- **Length**: Tempo total que o voo levou, em minutos.
- **Delay**: Indica se houve ou não atraso (0 = sem atraso, 1 = com atraso).

## Autores

- **Herbert Gabriel** 
- **Everlyn Marques** 
- **Laryssa Thaynna**
- **Felipe Vinicius**  

