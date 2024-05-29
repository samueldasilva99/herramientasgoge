const equiposData = {
    "Afeitadora": { potencia: 5, sector: 'Artefactos/Equipos' },
    "Aire acondicionado de 2200 frigorías F/C": { potencia: 1350, sector: 'Climatización' },
    "Aire acondicionado de 3500 frigorías F/C": { potencia: 2150, sector: 'Climatización' },
    "Aire acondicionado de 4500 frigorías F/C": { potencia: 2800, sector: 'Climatización' },
    "Aire acondicionado de 2200 frigorías F/C - Inverter": { potencia: 877.5, sector: 'Climatización' },
    "Aire acondicionado de 3500 frigorías F/C - Inverter": { potencia: 1397.5, sector: 'Climatización' },
    "Aire acondicionado de 4500 frigorías F/C - Inverter": { potencia: 1820, sector: 'Climatización' },
    "Anafe vitrocerámica con hornalla de 120 mm de diámetro": { potencia: 750, sector: 'Artefactos/Equipos' },
    "Anafe vitrocerámica con hornalla de 140 mm de diámetro": { potencia: 1250, sector: 'Artefactos/Equipos' },
    "Anafe vitrocerámica con hornalla de 175 mm de diámetro": { potencia: 1500, sector: 'Artefactos/Equipos' },
    "Anafe vitrocerámica con hornalla de 200 mm de diámetro": { potencia: 1800, sector: 'Artefactos/Equipos' },
    "Anafe vitrocerámica con hornalla de 215 mm de diámetro": { potencia: 2110, sector: 'Artefactos/Equipos' },
    "Anafe vitrocerámica con hornalla de 220 mm de diámetro": { potencia: 2350, sector: 'Artefactos/Equipos' },
    "Anafe resistivo con hornalla de 150 mm de diámetro": { potencia: 1000, sector: 'Artefactos/Equipos' },
    "Anafe resistivo con hornalla de 190 mm de diámetro": { potencia: 2000, sector: 'Artefactos/Equipos' },
    "Aspiradora": { potencia: 1200, sector: 'Artefactos/Equipos' },
    "Batidora de mano": { potencia: 300, sector: 'Artefactos/Equipos' },
    "Bomba de agua de 1/2 HP": { potencia: 380, sector: 'Artefactos/Equipos' },
    "Bomba de agua de 3/4 HP": { potencia: 570, sector: 'Artefactos/Equipos' },
    "Cafetera de filtro eléctrica": { potencia: 900, sector: 'Artefactos/Equipos' },
    "Caloventilador chico c/termostato": { potencia: 1500, sector: 'Climatización' },
    "Cargador de celular genérico": { potencia: 5, sector: 'Artefactos/Equipos' },
    "Computadora (sólo la CPU)": { potencia: 200, sector: 'Artefactos/Equipos' },
    "Extractor de aire para cocina o baño - 80 m3/hora": { potencia: 12, sector: 'Artefactos/Equipos' },
    "Extractor de aire para cocina o baño - 200 m3/hora": { potencia: 20, sector: 'Artefactos/Equipos' },
    "Extractor de aire para cocina o baño - 1200 m3/hora": { potencia: 50, sector: 'Artefactos/Equipos' },
    "Estufa halógena de 3 velas c/termostato": { potencia: 1500, sector: 'Climatización' },
    "Estufa de cuarzo c/termostato": { potencia: 1500, sector: 'Climatización' },
    "Freezer": { potencia: 250, sector: 'Artefactos/Equipos' },
    "Heladera": { potencia: 150, sector: 'Artefactos/Equipos' },
    "Heladera con freezer": { potencia: 200, sector: 'Artefactos/Equipos' },
    "Heladera con freezer - Inverter": { potencia: 200, sector: 'Artefactos/Equipos' },
    "Horno eléctrico de 25 a 30 litros c/termostato": { potencia: 1500, sector: 'Artefactos/Equipos' },
    "Horno eléctrico de 73 litros c/termostato, para empotrar": { potencia: 2450, sector: 'Artefactos/Equipos' },
    "Lámpara de bajo consumo de 11W": { potencia: 11, sector: 'Iluminación' },
    "Lámpara de bajo consumo de 15W": { potencia: 15, sector: 'Iluminación' },
    "Lámpara de bajo consumo de 20W": { potencia: 20, sector: 'Iluminación' },
    "Lámpara halógena de 100 W": { potencia: 100, sector: 'Iluminación' },
    "Lámpara halógena de 40 W": { potencia: 40, sector: 'Iluminación' },
    "Lámpara halógena de 60 W": { potencia: 60, sector: 'Iluminación' },
    "Lámpara LED de 5 W": { potencia: 5, sector: 'Iluminación' },
    "Lámpara LED de 9 W": { potencia: 9, sector: 'Iluminación' },
    "Lámpara LED de 11 W": { potencia: 11, sector: 'Iluminación' },
    "Lavarropas automático de 5 kg con calentamiento de agua": { potencia: 2500, sector: 'Artefactos/Equipos' },
    "Lavarropas automático de 5 kg": { potencia: 500, sector: 'Artefactos/Equipos' },
    "Lavarropas semi-automático de 5 kg": { potencia: 200, sector: 'Artefactos/Equipos' },
    "Lavavajilla para 12 cubiertos": { potencia: 1500, sector: 'Artefactos/Equipos' },
    "Licuadora de mano o de pie": { potencia: 600, sector: 'Artefactos/Equipos' },
    "Lustraspiradora": { potencia: 800, sector: 'Artefactos/Equipos' },
    "Microondas": { potencia: 800, sector: 'Artefactos/Equipos' },
    "Minicomponentes": { potencia: 60, sector: 'Artefactos/Equipos' },
    "Monitor LED de 19\"": { potencia: 22, sector: 'Artefactos/Equipos' },
    "Notebook": { potencia: 22, sector: 'Artefactos/Equipos' },
    "Pava eléctrica de 1,7 litros": { potencia: 2000, sector: 'Artefactos/Equipos' },
    "Plancha": { potencia: 1500, sector: 'Artefactos/Equipos' },
    "Planchita de pelo o buclera": { potencia: 40, sector: 'Artefactos/Equipos' },
    "Radiador eléctrico mediano c/termostato": { potencia: 1500, sector: 'Climatización' },
    "Reproductor de DVD": { potencia: 15, sector: 'Artefactos/Equipos' },
    "Secador de cabellos": { potencia: 2000, sector: 'Artefactos/Equipos' },
    "Secarropas a calor": { potencia: 950, sector: 'Artefactos/Equipos' },
    "Secarropas centrífugo": { potencia: 380, sector: 'Artefactos/Equipos' },
    "Televisor color de tubo fluorescente de 21\"": { potencia: 75, sector: 'Artefactos/Equipos' },
    "Televisor color de tubo fluorescente de 25\"": { potencia: 155, sector: 'Artefactos/Equipos' },
    "Televisor color de tubo fluorescente de 29\" a 34\"": { potencia: 175, sector: 'Artefactos/Equipos' },
    "Televisor LCD de 40\"": { potencia: 180, sector: 'Artefactos/Equipos' },
    "Televisor LED 24\"": { potencia: 40, sector: 'Artefactos/Equipos' },
    "Televisor LED 32\" a 50''": { potencia: 90, sector: 'Artefactos/Equipos' },
    "Termotanque eléctrico c/termostato": { potencia: 1500, sector: 'ACS' },
    "Tostadora": { potencia: 950, sector: 'Artefactos/Equipos' },
    "Tubo fluorescente de 18 W": { potencia: 18, sector: 'Iluminación' },
    "Tubo fluorescente de 36 W": { potencia: 36, sector: 'Iluminación' },
    "Tubo fluorescente de 58 W": { potencia: 58, sector: 'Iluminación' },
    "Ventilador de techo": { potencia: 60, sector: 'Artefactos/Equipos' },
    "Ventilador de pie": { potencia: 90, sector: 'Artefactos/Equipos' },
    "Vitroconvector 54 x 57 cm c/termostato": { potencia: 1000, sector: 'Artefactos/Equipos' },
    "Vitroconvector 86 x 58 cm c/termostato": { potencia: 2000, sector: 'Artefactos/Equipos' }
};

document.addEventListener('DOMContentLoaded', () => {
    const equipoSelect = document.getElementById('equipo');
    const cantidadInput = document.getElementById('cantidad');
    const horasDiaInput = document.getElementById('horas_dia');
    const diasSemanaInput = document.getElementById('dias_semana');
    const cargarButton = document.getElementById('cargar');
    const consumoMensualSpan = document.getElementById('consumo-mensual');
    const tablaEquipos = document.getElementById('tabla-equipos').querySelector('tbody');
    const progress = document.getElementById('progress');

    const ctx = document.getElementById('grafico-torta').getContext('2d');
    let chart;

    // Populate select options
    for (const equipo in equiposData) {
        const option = document.createElement('option');
        option.value = equipo;
        option.textContent = equipo;
        equipoSelect.appendChild(option);
    }

    let totalConsumo = 0;
    let consumosPorCategoria = {
        "Artefactos/Equipos": 0,
        "Climatización": 0,
        "Iluminación": 0,
        "ACS": 0
    };

    cargarButton.addEventListener('click', () => {
        const equipo = equipoSelect.value;
        const cantidad = parseInt(cantidadInput.value);
        const horasDia = parseInt(horasDiaInput.value);
        const diasSemana = parseInt(diasSemanaInput.value);

        if (!equipo || isNaN(cantidad) || isNaN(horasDia) || isNaN(diasSemana)) {
            alert('Por favor, complete todos los campos.');
            return;
        }

        const potencia = equiposData[equipo].potencia;
        const sector = equiposData[equipo].sector;
        const consumoMensual = (potencia * cantidad * horasDia * diasSemana * 4) / 1000;

        totalConsumo += consumoMensual;
        consumosPorCategoria[sector] += consumoMensual;

        consumoMensualSpan.textContent = totalConsumo.toFixed(2);

        // Update progress bar
        const progressPercent = Math.min((totalConsumo / 1900) * 100, 100);
        progress.style.width = `${progressPercent}%`;

        // Update progress bar color
        progress.className = 'progress';
        if (totalConsumo <= 500) {
            progress.classList.add('green');
        } else if (totalConsumo <= 1000) {
            progress.classList.add('yellow');
        } else if (totalConsumo <= 1500) {
            progress.classList.add('orange');
        } else {
            progress.classList.add('red');
        }

        // Add row to table
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${equipo}</td>
            <td>${cantidad}</td>
            <td>${horasDia}</td>
            <td>${diasSemana}</td>
            <td>${consumoMensual.toFixed(2)}</td>
        `;
        tablaEquipos.appendChild(row);

        // Clear input fields and deselect the equipo
        equipoSelect.value = '';
        cantidadInput.value = '';
        horasDiaInput.value = '';
        diasSemanaInput.value = '';

        // Update pie chart
        updateChart();
    });

    function updateChart() {
        if (chart) {
            chart.destroy();
        }
        chart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: Object.keys(consumosPorCategoria),
                datasets: [{
                    data: Object.values(consumosPorCategoria),
                    backgroundColor: ['red', 'blue', 'green', 'orange']
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    tooltip: {
                        callbacks: {
                            label: function(tooltipItem) {
                                const total = tooltipItem.dataset.data.reduce((a, b) => a + b, 0);
                                const value = tooltipItem.raw.toFixed(2);
                                const percentage = ((tooltipItem.raw / total) * 100).toFixed(2);
                                return `${tooltipItem.label}: ${value} kWh (${percentage}%)`;
                            }
                        }
                    }
                }
            }
        });
    }
});
