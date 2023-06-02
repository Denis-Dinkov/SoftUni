function solve() {
    const label = document.querySelector("#info span");
    const departBtn = document.getElementById("depart");
    const arriveBtn = document.getElementById("arrive");
  
    let stop = {
      next: "depot",
    };
  
     function depart() {
      const url = `http://localhost:3030/jsonstore/bus/schedule/${stop.next}`;
        fetch(url)
        .then(res => res.json())
        .then(res => {
            stop = res
            departBtn.disabled = true;
            arriveBtn.disabled = false;
            
            label.textContent = `Next stop ${stop.name}`
        })
        .catch(err => {
            label.textContent = 'Error!'
            departBtn.disabled = true;
            arriveBtn.disabled = true;})
    }
  
    function arrive() {
        departBtn.disabled = false;
        arriveBtn.disabled = true;

     label.textContent = `Arriving at ${stop.name}`
    }
  
    return {
      depart,
      arrive,
    };
  }
  
  let result = solve();