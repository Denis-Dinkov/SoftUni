const guestNavigation = document.querySelector("#guest");
const userNavigation = document.querySelector("#user");

export function updateAuth() {
  let user = localStorage.getItem("user");

  if (user) {
    userNavigation.style.display = "inline";
    guestNavigation.style.display = "none";
  } else {
    userNavigation.style.display = "none";
    guestNavigation.style.display = "inline";
  }
}



export function logOut() {
  localStorage.removeItem('user');
  updateAuth();
}

export function getToken() {
  let serializedToken = localStorage.getItem('user');
  if(serializedToken){
    let user = JSON.parse(serializedToken);
    
    return user.accessToken;
  }
}
