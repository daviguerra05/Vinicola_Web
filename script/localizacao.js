var map = L.map('map').setView([-29.0231128,-51.1844215], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([-29.0231128,-51.1844215]).addTo(map)
      .bindPopup('Estamos aqui!')
      .openPopup();