const translations = {
    'pt-br': {
        'inicio': 'Inicio',
        'database': 'Base de dados',
        'graficos': 'Graficos',
        'previsao': 'Previsão de atraso',
        'about': 'Sobre',
        'resumo': 'Resumo',
        'resumo-text': 'O conjunto de dados "Airlines Dataset to Predict a Delay" oferece informações sobre voos, permitindo a análise e previsão de atrasos. A base contém nove colunas, incluindo identificadores de voos, companhias aéreas, aeroportos de origem e destino, dia da semana, horário do voo, duração e um indicador de atraso (0 para sem atraso e 1 para com atraso).',
        'resumo-text-pt1': 'O conjunto de dados "Airlines Dataset to Predict a Delay" oferece informações sobre voos, permitindo a análise e previsão de atrasos. A base contém nove colunas, incluindo identificadores de voos, companhias aéreas, aeroportos de origem e destino, dia da semana, horário do voo, duração e um indicador de atraso (0 para sem atraso e 1 para com atraso).',
        'resumo-text-pt2': 'Durante a análise exploratória, foram identificadas algumas limitações e desafios. A ausência de informações sobre a duração do atraso impede a identificação de padrões mais detalhados. A categorização binária da coluna Delay pode restringir as técnicas estatísticas aplicáveis, levando a interpretações equivocadas ao tratar pequenos e grandes atrasos como iguais. A coluna Length gerou confusão inicial sobre se se referia ao tempo de atraso ou à duração do voo; no entanto, a maioria dos voos com delay igual a 0 apresenta valores diferentes de zero, sugerindo que a coluna realmente representa a duração do voo.',
        'resumo-text-pt3': 'Foram observadas ocorrências atípicas, com apenas quatro registros mostrando Length igual a zero, indicando que esses casos são exceções. A alta diversidade nas colunas AirportFrom, AirportTo e Flight dificultou a análise e interpretação dos resultados, tornando os padrões menos evidentes. A subamostragem de companhias aéreas com mais de 10.000 registros foi necessária para garantir a integridade dos dados e evitar distorções nos resultados.',
        'resumo-text-pt4': 'Além disso, notou-se um desbalanceamento nas ocorrências das companhias aéreas, onde algumas têm muitos mais registros do que outras. Isso pode distorcer as análises e previsões, justificando a necessidade de balanceamento. O desbalanceamento também foi encontrado na coluna Delay, com 55% dos voos sem atraso e 45% com atraso. Para melhorar o desempenho do modelo preditivo, é importante balancear as classes.',
        'resumo-text-pt5': 'Em resumo, a análise exploratória destacou a complexidade da previsão de atrasos de voos, revelando desafios como a ambiguidade de algumas colunas, a presença de outliers e a necessidade de balanceamento nas classes de dados. O próximo passo envolve a aplicação de técnicas de modelagem que considerem essas questões para melhorar a precisão das previsões de atraso nos voos.',
        'resumo-text-pt6': 'Aqui está o link para o conjunto de dados no Kaggle: <a href="https://www.kaggle.com/datasets/jimschacko/airlines-dataset-to-predict-a-delay">Airlines Dataset to Predict a Delay</a>',
        'database-title': 'Conhecendo a base de dados',
        'coluna': 'Coluna',
        'descricao': 'Descrição',
        'flight': 'Identificador do voo',
        'airline': 'Companhia aérea',
        'airportFrom': 'Aeroporto de origem',
        'airportTo': 'Aeroporto de destino',
        'dayOfWeek': 'Dia da semana',
        'time': 'Horário do voo',
        'length': 'Duração do voo',
        'delay': 'Indicador de atraso (0 para sem atraso e 1 para com atraso)',
        'num-linhas-colunas': 'Número de linhas e colunas',
        'estrutura-dataframe': 'Estrutura do dataframe',
        'tipos-dados-coluna': 'Tipos de dados de cada coluna',
        'verificar-linhas-duplicadas': 'Verificar linhas duplicadas',
        'estatisticas-colunas': 'Estatísticas das colunas',
        'balanceamento-classes': 'Balanceamento de classes',
        'mostrar-tratamento-dados': 'Mostrar tratamento de dados',
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
        'horario-voo': 'Horário do Voo (em minutos):',
        'duracao-voo': 'Tempo de Duração do Voo (em minutos):',
        'verificar-atraso': 'Verificar Atraso'
    },
    'en': {
        'inicio': 'Home',
        'database': 'Database',
        'graficos': 'Dashboards',
        'previsao': 'Delay Prediction',
        'about': 'About',
        'resumo': 'Summary',
        'resumo-text': 'The "Airlines Dataset to Predict a Delay" dataset provides information about flights, allowing for the analysis and prediction of delays. The dataset contains nine columns, including flight identifiers, airlines, origin and destination airports, day of the week, flight time, duration, and a delay indicator (0 for no delay and 1 for delay).',
        'resumo-text-pt1': 'The "Airlines Dataset to Predict a Delay" dataset provides information about flights, allowing for the analysis and prediction of delays. The dataset contains nine columns, including flight identifiers, airlines, origin and destination airports, day of the week, flight time, duration, and a delay indicator (0 for no delay and 1 for delay).',
        'resumo-text-pt2': 'During the exploratory analysis, some limitations and challenges were identified. The absence of information about the duration of the delay prevents the identification of more detailed patterns. The binary categorization of the Delay column may restrict applicable statistical techniques, leading to misinterpretations by treating small and large delays as equal. The Length column initially caused confusion about whether it referred to delay time or flight duration; however, most flights with a delay equal to 0 have non-zero values, suggesting that the column actually represents flight duration.',
        'resumo-text-pt3': 'Outliers were observed, with only four records showing Length equal to zero, indicating that these cases are exceptions. The high diversity in the AirportFrom, AirportTo, and Flight columns made analysis and interpretation of results difficult, making patterns less evident. Subsampling of airlines with more than 10,000 records was necessary to ensure data integrity and avoid distortions in the results.',
        'resumo-text-pt4': 'Additionally, an imbalance was noted in the occurrences of airlines, where some have many more records than others. This can distort analyses and predictions, justifying the need for balancing. The imbalance was also found in the Delay column, with 55% of flights without delay and 45% with delay. To improve the performance of the predictive model, it is important to balance the classes.',
        'resumo-text-pt5': 'In summary, the exploratory analysis highlighted the complexity of predicting flight delays, revealing challenges such as the ambiguity of some columns, the presence of outliers, and the need for class balancing. The next step involves applying modeling techniques that consider these issues to improve the accuracy of flight delay predictions.',
        'resumo-text-pt6': 'Here is the link to the dataset on Kaggle: <a href="https://www.kaggle.com/datasets/jimschacko/airlines-dataset-to-predict-a-delay">Airlines Dataset to Predict a Delay</a>',
        'database-title': 'Understanding the Database',
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