// static/js/form.js
document.addEventListener('DOMContentLoaded', () => {
    fetch('/get_airports_and_flights')
        .then(response => response.json())
        .then(data => {
            const aeroportoOrigemSelect = document.getElementById('aeroporto-origem');
            const aeroportoDestinoSelect = document.getElementById('aeroporto-destino');
            const flightModeloSelect = document.getElementById('flight-modelo');

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

            data.flights.forEach(flight => {
                const optionFlight = document.createElement('option');
                optionFlight.value = flight;
                optionFlight.innerText = flight;
                flightModeloSelect.appendChild(optionFlight);
            });
        })
        .catch(error => console.error('Error:', error));
});