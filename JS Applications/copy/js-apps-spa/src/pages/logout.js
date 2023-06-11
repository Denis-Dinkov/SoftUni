import { logOut } from "../auth.js";

export function showLogOut() {
  logOut();
  alert("Successfull logout!");
}
