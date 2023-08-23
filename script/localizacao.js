var map = L.map('map').setView([-28.78280428539202, -51.2122135752856], 8);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([-29.0231128,-51.1844215]).addTo(map)
      .bindPopup('Estamos aqui!')
      .openPopup();