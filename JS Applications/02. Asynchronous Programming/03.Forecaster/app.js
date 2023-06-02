function attachEvents() {
    const getWeatherBtn = document.getElementById('submit')
    const inputValue = document.getElementById('location')
    const foreCast = document.getElementById('forecast')

    let symbols = {
        Sunny: "&#x2600", // ☀
        "Partly sunny": "&#x26C5", // ⛅
        Overcast: "&#x2601", // ☁
        Rain: "&#x2614", 
        Degrees: "&#176", // °
    }

    getWeatherBtn.addEventListener('click', solve);
    function solve() {
        let obj = {}
        let url = `http://localhost:3030/jsonstore/forecaster/locations`;
        //geting locations
        fetch(url)
            .then(res => res.json())
            .then(data => {
                let cityIndex = data.findIndex(el => el.name === inputValue.value);
                if(cityIndex == -1){
                    throw new Error('Invalid city')
                }
                let cityCode = data[cityIndex].code;
                foreCast.style.display = 'block'
                //current conditions
                fetch(`http://localhost:3030/jsonstore/forecaster/today/${cityCode}`)
                .then(res => res.json())
                .then(data =>{
                    console.log(data);
                    const currentForecast = document.querySelector('#current')

                    const conditonalSymbol = document.createElement('span');
                    conditonalSymbol.className = 'condition symbol';
                    conditonalSymbol.innerHTML = `${symbols[data.forecast.condition]}`
                    currentForecast.appendChild(conditonalSymbol)

                    const conditionList = document.createElement('span');
                    conditionList.className = 'condition';
                    conditionList.innerHTML = `
                    <span class="forecast-data">${data.name}</span>
                    <span class="forecast-data">${data.forecast.low}/${data.forecast.high}</span>
                    <span class="forecast-data">${data.forecast.condition}</span>
                    `
                    currentForecast.appendChild(conditionList)
                    

                    
                    

                })

                //3-day forecast
                fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${cityCode}`)
                .then(res => res.json())
                .then(res => console.log(res))

                

            })

}
}

attachEvents();