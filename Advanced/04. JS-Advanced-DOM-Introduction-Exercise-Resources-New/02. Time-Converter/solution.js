function attachEventsListeners() {
  //getting input values
  let days = document.getElementById("days");
  let hours = document.getElementById("hours");
  let minutes = document.getElementById("minutes");
  let seconds = document.getElementById("seconds");

  //button Elements
  document.getElementById("daysBtn").addEventListener("click", onClick);
  document.getElementById("hoursBtn").addEventListener("click", onClick);
  document.getElementById("minutesBtn").addEventListener("click", onClick);
  document.getElementById("secondsBtn").addEventListener("click", onClick);

  //rotations object
  let rotations = {
    days: 1,
    hours: 24,
    minutes: 1440,
    seconds: 86400,
  };

  function convert(value, unit) {
    let days = value / rotations[unit];
    console.log(days);

    return {
      days: days,
      hours: days * rotations.hours,
      minutes: days * rotations.minutes,
      seconds: days * rotations.seconds,
    };
  }
  //clickHandler
  function onClick(e) {
    let input = e.target.parentNode.querySelector('input[type="text"]');
    let time = convert(Number(input.value), input.id);

    days.value = time.days;
    hours.value = time.hours;
    minutes.value = time.minutes;
    seconds.value = time.seconds;
  }
}
