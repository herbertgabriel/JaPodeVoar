document.addEventListener('DOMContentLoaded', () => {
    fetch('/get_airports_and_flights')
        .then(response => response.json())
        .then(data => {
            const aeroportoOrigemSelect = document.getElementById('aeroporto-origem');
            const aeroportoDestinoSelect = document.getElementById('aeroporto-destino');
            const linhaAereaSelect = document.getElementById('linha-aerea');
            const aeronaveSelect = document.getElementById('aeronave');

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

            data.flights.forEach(flight => {
                const option = document.createElement('option');
                option.value = flight;
                option.textContent = flight;
                aeronaveSelect.appendChild(option);
            });
        })
        .catch(error => console.error('Error:', error));
});