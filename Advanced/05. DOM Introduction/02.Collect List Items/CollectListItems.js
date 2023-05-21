function extractText() {
    let res = ''
    let items = document.querySelectorAll('#items');
    let resultArea = document.getElementById('result')
    for (const item of items) {
        resultArea.value += item.textContent + '\n'
    }
}