const translations = {
    'pt-br': {
        'home': 'Início',
        'dashboards': 'Dashboards',
        'prediction': 'Previsão de Atraso',
        'database-title': 'Conhecendo a Base de Dados',
        'column': 'Coluna',
        'description': 'Descrição',
        'airline': 'Companhia Aérea',
        'airline-description': 'Nome abreviado de diferentes companhias aéreas comerciais',
        'flight': 'Voo',
        'flight-description': 'Número que representa a aeronave que realizou o voo',
        'airportFrom': 'Aeroporto de Origem',
        'airportFrom-description': 'Código do aeroporto de origem do voo',
        'airportTo': 'Aeroporto de Destino',
        'airportTo-description': 'Código do aeroporto de destino do voo',
        'dayOfWeek': 'Dia da Semana',
        'dayOfWeek-description': 'Representa o dia da semana em que o voo foi realizado (1 a 7)',
        'time': 'Horário',
        'time-description': 'Indica em minutos o horário programado para decolagem ou pouso',
        'length': 'Duração',
        'length-description': 'Refere-se ao tempo total que o voo levou, em minutos',
        'delay': 'Atraso',
        'delay-description': 'Se houve ou não atraso (0 = sem atraso, 1 = com atraso)',
        'num-rows-columns': 'Número de Linhas e Colunas',
        'dataframe-structure': 'Estrutura do DataFrame',
        'column-statistics': 'Estatísticas das Colunas',
        'class-balancing': 'Balanceamento de Classes',
        'data-treatment-summary': 'Resumo do Tratamento de Dados',
        'linha-aerea': 'Linha Aérea:',
        'aeronave': 'Aeronave',
        'aeroporto-origem': 'Aeroporto de Origem:',
        'aeroporto-destino': 'Aeroporto de Destino:',
        'dia-semana': 'Dia da Semana:',
        'domingo': 'Domingo',
        'segunda-feira': 'Segunda-feira',
        'terca-feira': 'Terça-feira',
        'quarta-feira': 'Quarta-feira',
        'quinta-feira': 'Quinta-feira',
        'sexta-feira': 'Sexta-feira',
        'sabado': 'Sábado',
        'horario-voo': 'Horário do Voo (Horas:Minutos):',
        'duracao-voo': 'Tempo de Duração do Voo (Horas:Minutos):',
        'verificar-atraso': 'Verificar Atraso',
        'result-text-delay': 'O voo está previsto para atrasar!',
        'result-text-no-delay': 'O voo está previsto para ser pontual!',
        'result-title': 'Resultado da Previsão'
    },
    'en': {
        'home': 'Home',
        'dashboards': 'Dashboards',
        'prediction': 'Delay Prediction',
        'database-title': 'Understanding the Database',
        'column': 'Column',
        'description': 'Description',
        'airline': 'Airline',
        'airline-description': 'Abbreviated name of different commercial airlines',
        'flight': 'Flight',
        'flight-description': 'Number representing the aircraft that performed the flight',
        'airportFrom': 'Origin Airport',
        'airportFrom-description': 'Code of the airport of origin of the flight',
        'airportTo': 'Destination Airport',
        'airportTo-description': 'Code of the destination airport of the flight',
        'dayOfWeek': 'DayOfWeek',
        'dayOfWeek-description': 'Represents the day of the week the flight was performed (1 to 7)',
        'time': 'Time',
        'time-description': 'Indicates in minutes the scheduled time for takeoff or landing',
        'length': 'Length',
        'length-description': 'Refers to the total time the flight took, in minutes',
        'delay': 'Delay',
        'delay-description': 'Whether there was a delay or not (0 = no delay, 1 = delayed)',
        'num-rows-columns': 'Number of Rows and Columns',
        'dataframe-structure': 'Dataframe Structure',
        'column-statistics': 'Column Statistics',
        'class-balancing': 'Class Balancing',
        'data-treatment-summary': 'Data Treatment Summary',
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
        'horario-voo': 'Flight Time (Hours:Minutes):',
        'duracao-voo': 'Flight Duration (Hours:Minutes):',
        'verificar-atraso': 'Check Delay',
        'result-text-delay': 'The flight is predicted to be delayed.',
        'result-text-no-delay': 'The flight is predicted not to be delayed.',
        'result-title': 'Prediction Result'
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