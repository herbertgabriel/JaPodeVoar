// static/js/forms.js
document.addEventListener('DOMContentLoaded', () => {
    fetch('/get_airports_and_flights')
        .then(response => response.json())
        .then(data => {
            const aeroportoOrigemSelect = document.getElementById('aeroporto-origem');
            const aeroportoDestinoSelect = document.getElementById('aeroporto-destino');
            const linhaAereaSelect = document.getElementById('linha-aerea');

            data.aeroportos.forEach(aeroporto => {
                const optionOrigem = document.createElement('option');
                optionOrigem.value = aeroporto;
                optionOrigem.innerText = aeroporto;
                aeroportoOrigemSelect.appendChild(optionOrigem);

                const optionDestino = document.createElement('option');
                optionDestino.value = aeroporto;
                optionDestino.innerText = aeroporto;
                aeroportoDestinoSelect.appendChild(optionDestino);
            });

            data.airlines.forEach(airline => {
                const optionAirline = document.createElement('option');
                optionAirline.value = airline;
                optionAirline.innerText = airline;
                linhaAereaSelect.appendChild(optionAirline);
            });
        })
        .catch(error => console.error('Error:', error));
});