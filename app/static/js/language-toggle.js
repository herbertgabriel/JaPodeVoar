const translations = {
    'pt-br': {
       
    },
    'en': {
        'inicio': 'Home',
        'graficos': 'Dashboards',
        'previsao': 'Delay Prediction',
        'coluna': 'Column',
        'descricao': 'Description',
        'flight': 'Flight Identifier',
        'airline': 'Airline',
        'airportFrom': 'Origin Airport',
        'airportTo': 'Destination Airport',
        'dayOfWeek': 'Day of the Week',
        'time': 'Flight Time',
        'length': 'Flight Duration',
        'delay': 'Delay Indicator (0 for no delay and 1 for delay)',
        'num-linhas-colunas': 'Number of Rows and Columns',
        'estrutura-dataframe': 'Dataframe Structure',
        'tipos-dados-coluna': 'Data Types of Each Column',
        'verificar-linhas-duplicadas': 'Check for Duplicate Rows',
        'estatisticas-colunas': 'Column Statistics',
        'balanceamento-classes': 'Class Balance',
        'mostrar-tratamento-dados': 'Show Data Treatment',
        'linha-aerea': 'Airline:',
        'aeronave': 'Aircraft',
        'aeroporto-origem': 'Origin Airport:',
        'aeroporto-destino': 'Destination Airport:',
        'dia-semana': 'Day of the Week:',
        'domingo': 'Sunday',
        'segunda-feira': 'Monday',
        'terca-feira': 'Tuesday',
        'quarta-feira': 'Wednesday',
        'quinta-feira': 'Thursday',
        'sexta-feira': 'Friday',
        'sabado': 'Saturday',
        'horario-voo': 'Flight Time (in minutes):',
        'duracao-voo': 'Flight Duration (in minutes):',
        'verificar-atraso': 'Check Delay'
    }
};

function translateContent(lang) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        element.innerHTML = translations[lang][key];
    });
}

document.getElementById('toggle-language').addEventListener('click', function() {
    const currentLang = document.documentElement.lang;
    if (currentLang === 'en') {
        document.documentElement.lang = 'pt-br';
        this.textContent = '🇺🇸';
        translateContent('pt-br');
    } else {
        document.documentElement.lang = 'en';
        this.textContent = '🇧🇷';
        translateContent('en');
    }
});