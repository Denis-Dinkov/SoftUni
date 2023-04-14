function radar(speed, area) {
  let speedLimit = 0;
  switch (area) {
    case "motorway":
      speedLimit = 130;
      break;

    case "interstate":
      speedLimit = 90;
      break;
    case "city":
      speedLimit = 50;
      break;

    case "residential":
      speedLimit = 20;
      break;

    default:
      break;
  }

  if (speed <= speedLimit) {
    console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
  } else {
    let diff = Math.abs(speed - speedLimit);
    if (diff <= 20) {
      console.log(
        `The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - speeding`
      );
    } else if (diff <= 40) {
      console.log(
        `The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`
      );
    } else {
      console.log(
        `The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - reckless driving`
      );
    }
  }
}
radar(120, "interstate");
