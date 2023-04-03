function party(guests) {
  let vipList = [];
  let normalList = [];
  let currentGuest = guests.shift();
  while (currentGuest !== "PARTY") {
    const isVip = !isNaN(currentGuest[0]);
    if (isVip) {
      vipList.push(currentGuest);
    } else {
      normalList.push(currentGuest);
    }
    currentGuest = guests.shift();
  }
  let allGuests = vipList.concat(normalList);
  for (const guest of guests) {
    allGuests.splice(allGuests.indexOf(guest), 1);
  }

  console.log(allGuests.length);
  allGuests.forEach((guest) => console.log(guest));
}
party([
  "7IK9Yo0h",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
]);
