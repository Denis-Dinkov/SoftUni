function passwordValidator(password) {
  let passwordLength = password.length;
  let totalNumbers = 0;
  let isOnlyChar = false;
  let isTwoDigits = false;
  let isInLengthRange = false;
  for (let i = 0; i < passwordLength; i++) {
    //Calculating numbers in pass
    let currentChar = password[i].charCodeAt();
    if (currentChar >= 48 && currentChar <= 57) {
      totalNumbers++;
    }

    //checking if only digits and letters

    if (
      (currentChar >= 65 && 90 >= currentChar) ||
      (currentChar >= 97 && 122 >= currentChar) ||
      (currentChar >= 48 && currentChar <= 57)
    ) {
      isOnlyChar = true;
    } else {
      isOnlyChar = false;
      break;
    }
  }
  // check password length
  if (passwordLength >= 6 && 10 >= passwordLength) {
    isInLengthRange = true;
  } else {
    console.log("Password must be between 6 and 10 characters");
  }

  if (isOnlyChar === false) {
    console.log("Password must consist only of letters and digits");
  }

  // checkin if numbers > 2
  if (totalNumbers >= 2) {
    isTwoDigits = true;
  } else {
    console.log("Password must have at least 2 digits");
  }
  if (isOnlyChar && isInLengthRange && isTwoDigits) {
    console.log("Password is valid");
  }
}
passwordValidator("MyPass123");
