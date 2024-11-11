# Previsão de Atraso de Voo

Este projeto tem como objetivo prever atrasos de voos utilizando técnicas de Machine Learning. Ele foi desenvolvido com Flask, uma biblioteca leve para aplicações web em Python.

## Estrutura do Projeto

```
japodevoar/
├── app/
│   ├── __init__.py
│   ├── models/
│   │   ├── model.pkl           # Modelo de machine learning treinado (salvo com pickle)
│   │   └── model.py            # Script para carregar o modelo e fazer previsões
│   ├── static/                 # Arquivos estáticos (CSS, JavaScript, etc.)
│   ├── templates/
│   │   └── index.html          # Página inicial com formulário de entrada para previsões
│   ├── routes.py               # Define as rotas da aplicação
│   ├── utils.py                # Funções auxiliares para pré-processamento e outras tarefas
│   ├── config.py               # Configurações gerais (como variáveis de ambiente)
├── tests/                      # Pasta para testes pytest
│   ├── test_routes.py          # Testes para routes.py
│   ├── test_utils.py           # Testes para utils.py
│   └── ...   
├── data/                       # Dados brutos ou pré-processados
│   └── flight_data.csv
├── models/                     # Modelos de machine learning e notebooks de treino
│   ├── train_model.py          # Script para treinar e salvar o modelo
│   └── train_model.ipynb       # Notebook para treinar e salvar o modelo (opcional)
├── app.py                      # Arquivo principal para rodar o aplicativo Flask
├── requirements.txt            # Dependências do projeto (Flask, Scikit-Learn, Pandas, etc.)
└── README.md                   # Documentação do projeto
```

## Pré-requisitos

Antes de executar o projeto, você precisa ter o Python 3.x instalado em sua máquina. Além disso, instale as dependências necessárias com o seguinte comando:

```bash
pip install -r requirements.txt
```

## Como Usar

1. **Treine o Modelo**:
   Para treinar o modelo de previsão, execute o script `train_model.py`:

   ```bash
   python models/train_model.py
   ```

   Isso criará e salvará o modelo treinado em `app/models/model.pkl`.

2. **Inicie o Servidor Flask**:
   Execute o arquivo `app.py` para iniciar o servidor:

   ```bash
   python app.py
   ```

   O aplicativo estará disponível em `http://127.0.0.1:5000`.

3. **Faça Previsões**:
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

