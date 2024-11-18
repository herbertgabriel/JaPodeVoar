document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.buttons button');
    const resultDiv = document.querySelector('.result');

    // Mapeamento dos textos de cada botão
    const buttonTexts = {
        'num-linhas-colunas': 'Number of Rows and Columns: 100 rows, 10 columns',
        'estrutura-dataframe': 'Dataframe Structure: \nColumn 1: Airline\nColumn 2: Flight\nColumn 3: AirportFrom\nColumn 4: AirportTo\nColumn 5: DayOfWeek\nColumn 6: Time\nColumn 7: Length\nColumn 8: Delay',
        'tipos-dados-coluna': 'Data Types of Each Column: \nAirline: string\nFlight: int\nAirportFrom: string\nAirportTo: string\nDayOfWeek: int\nTime: int\nLength: int\nDelay: int',
        'verificar-linhas-duplicadas': 'Check for Duplicate Rows: No duplicate rows found',
        'estatisticas-colunas': 'Column Statistics: \nAirline: 10 unique values\nFlight: 100 unique values\nAirportFrom: 20 unique values\nAirportTo: 20 unique values\nDayOfWeek: 7 unique values\nTime: 24 unique values\nLength: 100 unique values\nDelay: 2 unique values',
        'balanceamento-classes': 'Class Balance: \nDelay 0: 55%\nDelay 1: 45%',
        'mostrar-tratamento-dados': 'Show Data Treatment: \nMissing values handled\nOutliers removed\nData normalized'
    };

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Limpar o conteúdo anterior
            resultDiv.innerHTML = '';

            // Obter o texto correspondente ao botão clicado
            const buttonText = buttonTexts[button.getAttribute('data-translate')];

            // Criar um novo parágrafo com o texto do botão clicado
            const paragraph = document.createElement('p');
            paragraph.textContent = buttonText;

            // Adicionar o parágrafo ao div de resultado
            resultDiv.appendChild(paragraph);
        });
    });
});