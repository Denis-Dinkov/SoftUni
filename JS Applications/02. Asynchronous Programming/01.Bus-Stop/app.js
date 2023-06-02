function getInfo() {
    const busesList = document.getElementById('buses')
    const stopName = document.getElementById('stopName')
    stopName.textContent = 'Loading...'
    const inputValue = document.getElementById("stopId").value;
    let url = 'http://localhost:3030/jsonstore/bus/businfo/'

    fetch(`${url}/${inputValue}`)
        .then(res => res.json())
        .then(result => {
            busesList.innerHTML = ''
            stopName.textContent = result.name;
            Object.entries(result.buses).forEach(bus => {
                let liElement = document.createElement('li');
                liElement.textContent = `Bus ${bus[0]} arrives in ${bus[1]} minutes`;
                busesList.appendChild(liElement)
            })
        })
        .catch(error => stopName.textContent = 'Error')
}