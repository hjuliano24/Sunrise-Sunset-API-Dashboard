/**
 * Can edit fetch request to be only one and store location lat and long in variables
 */
const locationSelect = document.getElementById('locationSelector');

locationSelect.addEventListener('change', (event) => {
    const selectedLocation = event.target.value;
    // Add your logic here to handle the location change
    if (selectedLocation === 'newYork') {
        //Grabs data from the API for New York City today
        fetch("https://api.sunrisesunset.io/json?lat=40.712776&lng=-74.005974&date=today")
        .then(response => response.json())
        .then(data => {
            document.querySelector('#sunriseToday').innerHTML = data.results.sunrise;
            document.querySelector('#sunsetToday').innerHTML = data.results.sunset;
            document.querySelector('#dawnToday').innerHTML = data.results.dawn;
            document.querySelector('#duskToday').innerHTML = data.results.dusk;
            document.querySelector('#solarNoonToday').innerHTML = data.results.solar_noon;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
        //Grabs data from the API for New York City tomorrow
        fetch("https://api.sunrisesunset.io/json?lat=40.712776&lng=-74.005974&date=tomorrow")
        .then(response => response.json())
        .then(data => {
            document.querySelector('#sunriseTomorrow').innerHTML = data.results.sunrise;
            document.querySelector('#sunsetTomorrow').innerHTML = data.results.sunset;
            document.querySelector('#dawnTomorrow').innerHTML = data.results.dawn;
            document.querySelector('#duskTomorrow').innerHTML = data.results.dusk;
            document.querySelector('#solarNoonTomorrow').innerHTML = data.results.solar_noon;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

    } else if (selectedLocation === 'losAngeles') {
        //Grabs data from the API for Los Angeles today
        fetch("https://api.sunrisesunset.io/json?lat=34.052235&lng=-118.243683&date=today")
        .then(response => response.json())
        .then(data => {
            document.querySelector('#sunriseToday').innerHTML = data.results.sunrise;
            document.querySelector('#sunsetToday').innerHTML = data.results.sunset;
            document.querySelector('#dawnToday').innerHTML = data.results.dawn;
            document.querySelector('#duskToday').innerHTML = data.results.dusk;
            document.querySelector('#solarNoonToday').innerHTML = data.results.solar_noon;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
        //Grabs data from the API for Los Angeles tomorrow
        fetch("https://api.sunrisesunset.io/json?lat=34.052235&lng=-118.243683&date=tomorrow")
        .then(response => response.json())
        .then(data => {
            document.querySelector('#sunriseTomorrow').innerHTML = data.results.sunrise;
            document.querySelector('#sunsetTomorrow').innerHTML = data.results.sunset;
            document.querySelector('#dawnTomorrow').innerHTML = data.results.dawn;
            document.querySelector('#duskTomorrow').innerHTML = data.results.dusk;
            document.querySelector('#solarNoonTomorrow').innerHTML = data.results.solar_noon;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

    } else if (selectedLocation === 'chicago') {
        //Grabs data from the API for Chicago today
        fetch("https://api.sunrisesunset.io/json?lat=41.881832&lng=-87.623177&date=today")
        .then(response => response.json())
        .then(data => {
            document.querySelector('#sunriseToday').innerHTML = data.results.sunrise;
            document.querySelector('#sunsetToday').innerHTML = data.results.sunset;
            document.querySelector('#dawnToday').innerHTML = data.results.dawn;
            document.querySelector('#duskToday').innerHTML = data.results.dusk;
            document.querySelector('#solarNoonToday').innerHTML = data.results.solar_noon;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
        //Grabs data from the API for Chicago tomorrow
        fetch("https://api.sunrisesunset.io/json?lat=41.881832&lng=-87.623177&date=tomorrow")
        .then(response => response.json())
        .then(data => {
            document.querySelector('#sunriseTomorrow').innerHTML = data.results.sunrise;
            document.querySelector('#sunsetTomorrow').innerHTML = data.results.sunset;
            document.querySelector('#dawnTomorrow').innerHTML = data.results.dawn;
            document.querySelector('#duskTomorrow').innerHTML = data.results.dusk;
            document.querySelector('#solarNoonTomorrow').innerHTML = data.results.solar_noon;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

    } else if (selectedLocation === 'houston') {
        //Grabs data from the API for Houston today
        fetch("https://api.sunrisesunset.io/json?lat=29.749907&lng=-95.358421&date=today")
        .then(response => response.json())
        .then(data => {
            document.querySelector('#sunriseToday').innerHTML = data.results.sunrise;
            document.querySelector('#sunsetToday').innerHTML = data.results.sunset;
            document.querySelector('#dawnToday').innerHTML = data.results.dawn;
            document.querySelector('#duskToday').innerHTML = data.results.dusk;
            document.querySelector('#solarNoonToday').innerHTML = data.results.solar_noon;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
        //Grabs data from the API for Houston tomorrow
        fetch("https://api.sunrisesunset.io/json?lat=29.749907&lng=-95.358421&date=tomorrow")
        .then(response => response.json())
        .then(data => {
            document.querySelector('#sunriseTomorrow').innerHTML = data.results.sunrise;
            document.querySelector('#sunsetTomorrow').innerHTML = data.results.sunset;
            document.querySelector('#dawnTomorrow').innerHTML = data.results.dawn;
            document.querySelector('#duskTomorrow').innerHTML = data.results.dusk;
            document.querySelector('#solarNoonTomorrow').innerHTML = data.results.solar_noon;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    } else if (selectedLocation === 'miami') {
        //Grabs data from the API for Miami today
        fetch("https://api.sunrisesunset.io/json?lat=25.761681&lng=-80.191788&date=today")
        .then(response => response.json())
        .then(data => {
            document.querySelector('#sunriseToday').innerHTML = data.results.sunrise;
            document.querySelector('#sunsetToday').innerHTML = data.results.sunset;
            document.querySelector('#dawnToday').innerHTML = data.results.dawn;
            document.querySelector('#duskToday').innerHTML = data.results.dusk;
            document.querySelector('#solarNoonToday').innerHTML = data.results.solar_noon;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
        //Grabs data from the API for Miami tomorrow
        fetch("https://api.sunrisesunset.io/json?lat=25.761681&lng=-80.191788&date=tomorrow")
        .then(response => response.json())
        .then(data => {
            document.querySelector('#sunriseTomorrow').innerHTML = data.results.sunrise;
            document.querySelector('#sunsetTomorrow').innerHTML = data.results.sunset;
            document.querySelector('#dawnTomorrow').innerHTML = data.results.dawn;
            document.querySelector('#duskTomorrow').innerHTML = data.results.dusk;
            document.querySelector('#solarNoonTomorrow').innerHTML = data.results.solar_noon;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    } else if (selectedLocation === 'seattle') {
        //Grabs data from the API for Seattle today
        fetch("https://api.sunrisesunset.io/json?lat=47.608013&lng=-122.335167&date=today")
        .then(response => response.json())
        .then(data => {
            document.querySelector('#sunriseToday').innerHTML = data.results.sunrise;
            document.querySelector('#sunsetToday').innerHTML = data.results.sunset;
            document.querySelector('#dawnToday').innerHTML = data.results.dawn;
            document.querySelector('#duskToday').innerHTML = data.results.dusk;
            document.querySelector('#solarNoonToday').innerHTML = data.results.solar_noon;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
        //Grabs data from the API for Seattle tomorrow
        fetch("https://api.sunrisesunset.io/json?lat=47.608013&lng=-122.335167&date=tomorrow")
        .then(response => response.json())
        .then(data => {
            document.querySelector('#sunriseTomorrow').innerHTML = data.results.sunrise;
            document.querySelector('#sunsetTomorrow').innerHTML = data.results.sunset;
            document.querySelector('#dawnTomorrow').innerHTML = data.results.dawn;
            document.querySelector('#duskTomorrow').innerHTML = data.results.dusk;
            document.querySelector('#solarNoonTomorrow').innerHTML = data.results.solar_noon;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

    } else if (selectedLocation === 'denver') {
        //Grabs data from the API for Denver today
        fetch("https://api.sunrisesunset.io/json?lat=39.742043&lng=-104.991531&date=today")
        .then(response => response.json())
        .then(data => {
            document.querySelector('#sunriseToday').innerHTML = data.results.sunrise;
            document.querySelector('#sunsetToday').innerHTML = data.results.sunset;
            document.querySelector('#dawnToday').innerHTML = data.results.dawn;
            document.querySelector('#duskToday').innerHTML = data.results.dusk;
            document.querySelector('#solarNoonToday').innerHTML = data.results.solar_noon;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
        //Grabs data from the API for Denver tomorrow
        fetch("https://api.sunrisesunset.io/json?lat=39.742043&lng=-104.991531&date=tomorrow")
        .then(response => response.json())
        .then(data => {
            document.querySelector('#sunriseTomorrow').innerHTML = data.results.sunrise;
            document.querySelector('#sunsetTomorrow').innerHTML = data.results.sunset;
            document.querySelector('#dawnTomorrow').innerHTML = data.results.dawn;
            document.querySelector('#duskTomorrow').innerHTML = data.results.dusk;
            document.querySelector('#solarNoonTomorrow').innerHTML = data.results.solar_noon;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    } else if (selectedLocation === 'boston') {
        //Grabs data from the API for Boston today
        fetch("https://api.sunrisesunset.io/json?lat=42.361145&lng=-71.057083&date=today")
        .then(response => response.json())
        .then(data => {
            document.querySelector('#sunriseToday').innerHTML = data.results.sunrise;
            document.querySelector('#sunsetToday').innerHTML = data.results.sunset;
            document.querySelector('#dawnToday').innerHTML = data.results.dawn;
            document.querySelector('#duskToday').innerHTML = data.results.dusk;
            document.querySelector('#solarNoonToday').innerHTML = data.results.solar_noon;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
        //Grabs data from the API for Boston tomorrow
        fetch("https://api.sunrisesunset.io/json?lat=42.361145&lng=-71.057083&date=tomorrow")
        .then(response => response.json())
        .then(data => {
            document.querySelector('#sunriseTomorrow').innerHTML = data.results.sunrise;
            document.querySelector('#sunsetTomorrow').innerHTML = data.results.sunset;
            document.querySelector('#dawnTomorrow').innerHTML = data.results.dawn;
            document.querySelector('#duskTomorrow').innerHTML = data.results.dusk;
            document.querySelector('#solarNoonTomorrow').innerHTML = data.results.solar_noon;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

    } else if (selectedLocation === 'sanfrancisco') {
        //Grabs data from the API for San Francisco today
        fetch("https://api.sunrisesunset.io/json?lat=37.774929&lng=-122.419416&date=today")
        .then(response => response.json())
        .then(data => {
            document.querySelector('#sunriseToday').innerHTML = data.results.sunrise;
            document.querySelector('#sunsetToday').innerHTML = data.results.sunset;
            document.querySelector('#dawnToday').innerHTML = data.results.dawn;
            document.querySelector('#duskToday').innerHTML = data.results.dusk;
            document.querySelector('#solarNoonToday').innerHTML = data.results.solar_noon;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
        //Grabs data from the API for San Francisco tomorrow
        fetch("https://api.sunrisesunset.io/json?lat=37.774929&lng=-122.419416&date=tomorrow")
        .then(response => response.json())
        .then(data => {
            document.querySelector('#sunriseTomorrow').innerHTML = data.results.sunrise;
            document.querySelector('#sunsetTomorrow').innerHTML = data.results.sunset;
            document.querySelector('#dawnTomorrow').innerHTML = data.results.dawn;
            document.querySelector('#duskTomorrow').innerHTML = data.results.dusk;
            document.querySelector('#solarNoonTomorrow').innerHTML = data.results.solar_noon;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
        
    } else if (selectedLocation === 'atlanta') {
        //Grabs data from the API for Atlanta today
        fetch("https://api.sunrisesunset.io/json?lat=33.7490&lng=-84.3880&date=today")
        .then(response => response.json())
        .then(data => {
            document.querySelector('#sunriseToday').innerHTML = data.results.sunrise;
            document.querySelector('#sunsetToday').innerHTML = data.results.sunset;
            document.querySelector('#dawnToday').innerHTML = data.results.dawn;
            document.querySelector('#duskToday').innerHTML = data.results.dusk;
            document.querySelector('#solarNoonToday').innerHTML = data.results.solar_noon;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
        //Grabs data from the API for Atlanta tomorrow
        fetch("https://api.sunrisesunset.io/json?lat=33.7490&lng=-84.3880&date=tomorrow")
        .then(response => response.json())
        .then(data => {
            document.querySelector('#sunriseTomorrow').innerHTML = data.results.sunrise;
            document.querySelector('#sunsetTomorrow').innerHTML = data.results.sunset;
            document.querySelector('#dawnTomorrow').innerHTML = data.results.dawn;
            document.querySelector('#duskTomorrow').innerHTML = data.results.dusk;
            document.querySelector('#solarNoonTomorrow').innerHTML = data.results.solar_noon;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    } else {
        
    }
});