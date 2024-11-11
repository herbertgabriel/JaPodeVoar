// static/js/buttons-index.js
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.buttons button');
    const resultContainer = document.querySelector('.result');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const action = button.getAttribute('data-translate');

            switch (action) {
                case 'num-linhas-colunas':
                    text = '/num_linhas_colunas';
                    break;
                case 'estrutura-dataframe':
                    t = '/estrutura_dataframe';
                    break;
                case 'tipos-dados-coluna':
                    url = '/tipos_dados_coluna';
                    break;
                case 'verificar-linhas-duplicadas':
                    url = '/verificar_linhas_duplicadas';
                    break;
                case 'estatisticas-colunas':
                    url = '/estatisticas_colunas';
                    break;
                case 'balanceamento-classes':
                    url = '/balanceamento_classes';
                    break;
                case 'mostrar-tratamento-dados':
                    url = '/mostrar_tratamento_dados';
                    break;
                default:
                    break;
            }
        });
    });
});