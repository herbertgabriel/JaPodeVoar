document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.buttons button');
    const resultDiv = document.querySelector('.result');

    // Mapeamento dos textos de cada botão em inglês
    const buttonTextsEN = {
        'num-rows-columns': 'The dataset is in CSV format, with a size of 42MB, totaling 539,383 instances and 8 attributes. <p data-translate="summary-text-en6">Here is the link to the dataset on Kaggle: <a href="https://www.kaggle.com/datasets/jimschacko/airlines-dataset-to-predict-a-delay">Airlines Dataset to Predict a Delay</a></p>', 
        'dataframe-structure': `
            <h1>DataFrame Information</h1>
            <p>Index: 539,383 entries, 1 to 539,383</p>
            <p>Data columns (total of 8 columns):</p>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Column</th>
                        <th>Non-Null Count</th>
                        <th>Data Type</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>0</td>
                        <td>Airline</td>
                        <td>539,383 non-null</td>
                        <td>object</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Flight</td>
                        <td>539,383 non-null</td>
                        <td>int64</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>AirportFrom</td>
                        <td>539,383 non-null</td>
                        <td>object</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>AirportTo</td>
                        <td>539,383 non-null</td>
                        <td>object</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>DayOfWeek</td>
                        <td>539,383 non-null</td>
                        <td>int64</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Time</td>
                        <td>539,383 non-null</td>
                        <td>int64</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Length</td>
                        <td>539,383 non-null</td>
                        <td>int64</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Delay</td>
                        <td>539,383 non-null</td>
                        <td>int64</td>
                    </tr>
                </tbody>
            </table>
        `,
        'column-data-types': 'Data Types of Each Column: \nAirline: string\nFlight: int\nAirportFrom: string\nAirportTo: string\nDayOfWeek: int\nTime: int\nLength: int\nDelay: int',
        'check-duplicate-rows': 'Check Duplicate Rows: No duplicate rows found',
        'column-statistics': 'Column Statistics: \nAirline: 10 unique values\nFlight: 100 unique values\nAirportFrom: 20 unique values\nAirportTo: 20 unique values\nDayOfWeek: 7 unique values\nTime: 24 unique values\nLength: 100 unique values\nDelay: 2 unique values',
        'class-balancing': 'There is a slight imbalance (55% without delay and 45% with delay). Balancing the classes will help improve the model’s performance by ensuring it does not favor the majority class.',
        'data-treatment-summary': 'Selected All Attributes\nNo missing data found\n\nAmbiguity of the Length Column: The Length column causes confusion as it was initially unclear whether it referred to delay time or flight duration.\n\nPrevalence of Valid Duration: Most flights with delay equal to 0 (no delay) have values in the Length column different from zero, indicating that the flight duration is generally recorded, even when no delay occurs.\n\nOutliers: The presence of only 4 rows with Length equal to zero suggests these cases are exceptions and not the norm.'
    };

    // Mapeamento dos textos de cada botão em português
    const buttonTextsPtBr = {
        'num-rows-columns': 'O conjunto de dados está em formato CSV, com um tamanho de 42MB, totalizando 539.383 instâncias e 8 atributos. <p data-translate="summary-text-en6">Aqui está o link para o conjunto de dados no Kaggle: <a href="https://www.kaggle.com/datasets/jimschacko/airlines-dataset-to-predict-a-delay">Airlines Dataset to Predict a Delay</a></p>', 
        'dataframe-structure': `
            <h1>Informações do DataFrame</h1>
            <p>Índice: 539.383 entradas, de 1 a 539.383</p>
            <p>Colunas de dados (total de 8 colunas):</p>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Coluna</th>
                        <th>Contagem Não Nula</th>
                        <th>Tipo de Dado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>0</td>
                        <td>Airline</td>
                        <td>539.383 não nulos</td>
                        <td>object</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Flight</td>
                        <td>539.383 não nulos</td>
                        <td>int64</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>AirportFrom</td>
                        <td>539.383 não nulos</td>
                        <td>object</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>AirportTo</td>
                        <td>539.383 não nulos</td>
                        <td>object</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>DayOfWeek</td>
                        <td>539.383 não nulos</td>
                        <td>int64</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Time</td>
                        <td>539.383 não nulos</td>
                        <td>int64</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Length</td>
                        <td>539.383 não nulos</td>
                        <td>int64</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Delay</td>
                        <td>539.383 não nulos</td>
                        <td>int64</td>
                    </tr>
                </tbody>
            </table>
        `,
        'column-data-types': 'Tipos de dados de cada coluna: \nAirline: string\nFlight: int\nAirportFrom: string\nAirportTo: string\nDayOfWeek: int\nTime: int\nLength: int\nDelay: int',
        'check-duplicate-rows': 'Verificar linhas duplicadas: Nenhuma linha duplicada encontrada',
        'column-statistics': 'Estatísticas das colunas: \nAirline: 10 valores únicos\nFlight: 100 valores únicos\nAirportFrom: 20 valores únicos\nAirportTo: 20 valores únicos\nDayOfWeek: 7 valores únicos\nTime: 24 valores únicos\nLength: 100 valores únicos\nDelay: 2 valores únicos',
        'class-balancing': 'Há um leve desequilíbrio (55% sem atraso e 45% com atraso). Balancear as classes ajudará a melhorar o desempenho do modelo, garantindo que ele não favoreça a classe majoritária.',
        'data-treatment-summary': 'Selecionados todos os atributos\nNenhum dado ausente encontrado\n\nAmbiguidade da coluna Length: A coluna Length causa confusão, pois inicialmente não estava claro se se referia ao tempo de atraso ou à duração do voo.\n\nPrevalência da duração válida: A maioria dos voos com atraso igual a 0 (sem atraso) possui valores na coluna Length diferentes de zero, indicando que a duração do voo geralmente é registrada, mesmo quando não há atraso.\n\nOutliers: A presença de apenas 4 linhas com Length igual a zero sugere que esses casos são exceções e não a norma.'
    };

    function updateButtonTexts(lang) {
        buttons.forEach(button => {
            const buttonText = lang === 'en' ? button.getAttribute('data-translate') : button.getAttribute('data-translate');
            button.innerHTML = translations[lang][buttonText];
        });
    }

    document.getElementById('toggle-language').addEventListener('click', function() {
        const currentLang = document.documentElement.lang;
        if (currentLang === 'en') {
            document.documentElement.lang = 'pt-br';
            this.textContent = '🇺🇸';
            updateButtonTexts('pt-br');
        } else {
            document.documentElement.lang = 'en';
            this.textContent = '🇧🇷';
            updateButtonTexts('en');
        }
    });

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Limpar o conteúdo anterior
            resultDiv.innerHTML = '';

            // Obter o texto correspondente ao botão clicado
            let buttonText = document.documentElement.lang === 'en' ? buttonTextsEN[button.getAttribute('data-translate')] : buttonTextsPtBr[button.getAttribute('data-translate')];

            // Adicionar o conteúdo ao resultDiv
            resultDiv.innerHTML = buttonText;
        });
    });

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
});