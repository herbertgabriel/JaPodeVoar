// static/js/grafico.js
document.addEventListener('DOMContentLoaded', () => {
    const graficoSelect = document.getElementById('grafico-select');

    graficoSelect.addEventListener('change', function() {
        const grafico = this.value;
        const graficoContainer = document.querySelector('.grafico-container');

        console.log(`Selecionado: ${grafico}`); // Log de depuração

        // Remove a seção de gráfico existente, se houver
        const existingSection = document.getElementById('grafico-section');
        if (existingSection) {
            existingSection.remove();
        }

        // Cria uma nova seção de gráfico
        const newSection = document.createElement('section');
        newSection.id = 'grafico-section';
        newSection.className = 'grafico-section';

        const graficoTitulo = document.createElement('h1');
        graficoTitulo.id = 'grafico-titulo';
        graficoTitulo.className = 'grafico-titulo';

        const graficoImg = document.createElement('img');
        graficoImg.id = 'grafico-img';
        graficoImg.className = 'grafico-img';
        graficoImg.src = `../static/image/graficos/${grafico}.png`;
        graficoImg.alt = grafico;

        console.log(`Caminho da imagem: ${graficoImg.src}`); // Log de depuração

        newSection.appendChild(graficoTitulo);
        newSection.appendChild(graficoImg);

        // Adiciona a nova seção de gráfico ao container
        graficoContainer.appendChild(newSection);
    });

    // Disparar o evento de mudança para carregar o gráfico inicial
    graficoSelect.dispatchEvent(new Event('change'));
});