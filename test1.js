function biscuitFactory(input) {
  let busciutsProducedPerWorker = input[0];
  let workersCount = input[1];
  let competingBiscuitsByOtherFactories = input[2];
  let producedPerDay = Number(busciutsProducedPerWorker * workersCount);
  let badDay = Math.floor(Number(producedPerDay * 0.75));
  let biscuitsForMonth = 0;

  for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0) {
      biscuitsForMonth += badDay;
    } else {
      biscuitsForMonth += producedPerDay;
    }
  }
  let diff = biscuitsForMonth - competingBiscuitsByOtherFactories;
  let diffInPercentege = Math.abs(
    (diff / competingBiscuitsByOtherFactories) * 100
  );

  console.log(
    `You have produced ${biscuitsForMonth} biscuits for the past month.`
  );
  if (biscuitsForMonth > competingBiscuitsByOtherFactories) {
    console.log(
      `You produce ${diffInPercentege.toFixed(2)} percent more biscuits.`
    );
  } else {
    console.log(
      `You produce ${diffInPercentege.toFixed(2)} percent less biscuits.`
    );
  }
}
biscuitFactory(["78", "8", "16000"]);
