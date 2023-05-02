function attachGradientEvents() {
    let gradientElement = document.getElementById('gradient');
    let resultElement = document.getElementById('result');

    const gradientMouseOverHandler = (e) =>{
        console.log(e);
        let percentage = Math.floor((e.offsetX / e.target.clientWidth) * 100);
        resultElement.textContent = `${percentage}%`;
        
    }
    gradientElement.addEventListener('mousemove',gradientMouseOverHandler)
}