document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.buttons button');
    const resultDiv = document.querySelector('.result');

    // Mapeamento dos textos de cada botão
    const buttonTexts = {
        'num-linhas-colunas': 'Base está em formato CSV e possui 42MB, no total 539383 instâncias e 8 atributos, <p data-translate="resumo-text-pt6">Aqui está o link para o conjunto de dados no Kaggle: <a href="https://www.kaggle.com/datasets/jimschacko/airlines-dataset-to-predict-a-delay">Airlines Dataset to Predict a Delay</a></p>', 
        'estrutura-dataframe': `
            <h1>Informações do DataFrame</h1>
            <p>Índice: 539383 entradas, 1 a 539383</p>
            <p>Colunas de dados (total de 8 colunas):</p>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Coluna</th>
                        <th>Contagem de Não Nulos</th>
                        <th>Tipo de Dado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>0</td>
                        <td>Airline</td>
                        <td>539383 não nulos</td>
                        <td>object</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Flight</td>
                        <td>539383 não nulos</td>
                        <td>int64</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>AirportFrom</td>
                        <td>539383 não nulos</td>
                        <td>object</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>AirportTo</td>
                        <td>539383 não nulos</td>
                        <td>object</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>DayOfWeek</td>
                        <td>539383 não nulos</td>
                        <td>int64</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Time</td>
                        <td>539383 não nulos</td>
                        <td>int64</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Length</td>
                        <td>539383 não nulos</td>
                        <td>int64</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Delay</td>
                        <td>539383 não nulos</td>
                        <td>int64</td>
                    </tr>
                </tbody>
            </table>
        `,
        'estatisticas-colunas': `
            <h1>Estatísticas das Colunas</h1>
            <table>
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Quantidade de companhias aéreas distintas</td>
                        <td>18</td>
                    </tr>
                    <tr>
                        <td>Quantidade de modelos de aviões distintos</td>
                        <td>6585</td>
                    </tr>
                    <tr>
                        <td>Quantidade de aeroportos distintos (origem)</td>
                        <td>293</td>
                    </tr>
                    <tr>
                        <td>Quantidade de aeroportos distintos (destino)</td>
                        <td>293</td>
                    </tr>
                    <tr>
                        <td>Quantidade total de voos</td>
                        <td>539383</td>
                    </tr>
                </tbody>
            </table>
        `,
        'balanceamento-classes': 'Há um leve desbalanceamento (55% sem atraso e 45% com atraso). Balancear as classes ajudará a melhorar o desempenho do modelo, garantindo que ele não se incline para a classe majoritária.',
        'mostrar-tratamento-dados': 'Selecionamos Todos os Atributos\nNão foram encontrados dados faltantes\n\nAmbiguidade da Coluna Length: A coluna Length gera confusão, pois, inicialmente, não estava claro se se referia ao tempo de atraso ou à duração do voo.\n\nPredominância de Duração Válida: A maioria dos voos com delay igual a 0 (não houve atraso) possui valores na coluna Length diferente de zero, o que indica que a duração do voo é geralmente registrada, mesmo não se atrasando.\n\nOcorrências Atípicas: A presença de apenas 4 linhas com Length igual a zero sugere que esses casos são exceções e não a norma.'
    };

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Limpar o conteúdo anterior
            resultDiv.innerHTML = '';

            // Obter o texto correspondente ao botão clicado
            const buttonText = buttonTexts[button.getAttribute('data-translate')];

            // Adicionar o conteúdo ao resultDiv
            resultDiv.innerHTML = buttonText;
        });
    });
});