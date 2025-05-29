function handleSearch() {
    const countryName = document.getElementById('searching').value.trim();
    const result = document.getElementById('result');
    const doneBtn = document.getElementById('doneBtn');
    const lottieContainer = document.createElement('div');

    if (!countryName) {
        result.innerHTML = `<p style="color:red;">Please enter a country name.</p>`;
        result.style.display = "block";
        doneBtn.style.display = "none";
        return;
    }

    lottieContainer.innerHTML = `
        <dotlottie-player
            src="https://lottie.host/16da1935-1b60-4ffa-bc12-a33504a85604/3bHzp3tCoK.lottie"
            background="transparent"
            speed="1.25"
            style="width: 200px; height: 200px; margin: 0 auto; display: block;"
            loop
            autoplay
        ></dotlottie-player>
    `;

    result.innerHTML = '';
    result.appendChild(lottieContainer);
    result.style.display = "block";
    doneBtn.style.display = "none";

    setTimeout(() => {
        const API_URL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

        fetch(API_URL)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Country not found");
                }
                return response.json();
            })
            .then((data) => {
                const country = data[0];
                const currencyCode = Object.keys(country.currencies)[0];
                const currencyName = country.currencies[currencyCode].name;

                const exchangeAPI_URL = `https://v6.exchangerate-api.com/v6/62c1d6996e3212d751e87c56/latest/USD`;

                fetch(exchangeAPI_URL)
                    .then(res => {
                        if (!res.ok) {
                            throw new Error("Currency conversion failed");
                        }
                        return res.json();
                    })
                    .then(exchangeData => {
                        const rate = exchangeData.conversion_rates[currencyCode];

                        if (!rate) {
                            throw new Error("Currency conversion rate not available for this country.");
                        }

                        result.innerHTML = `
                            <img src="${country.flags.png}" alt="Flag" />
                            <h2>Name: ${country.name.common}</h2>
                            <h2>Capital: ${country.capital}</h2>
                            <h2>Continent: ${country.continents[0]}</h2>
                            <h2>Currencies: ${currencyCode} (${currencyName})</h2>
                            <h2>Currency Exchange: 1 USD = ${rate.toFixed(2)} ${currencyCode}</h2>
                            <h2>Languages: ${Object.values(country.languages).join(", ")}</h2>
                            <h2>Population: ${country.population.toLocaleString()}</h2>
                        `;

                        doneBtn.style.display = "inline-block";
                    })
                    .catch(() => {
                        result.innerHTML = `
                            <p style="color:red;">Currency conversion failed. Please try again later.</p>
                        `;
                        doneBtn.style.display = "inline-block";
                    });
            })
            .catch(error => {
                result.innerHTML = `<p style="color:red;">${error.message}</p>`;
                doneBtn.style.display = "none";
            });
    }, 1200);
}

function resetPage() {
    document.getElementById('searching').value = '';
    document.getElementById('result').innerHTML = '';
    document.getElementById('result').style.display = 'none';
    document.getElementById('doneBtn').style.display = 'none';
}
