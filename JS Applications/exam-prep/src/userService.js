import { api } from "./api.js";
import { userHelper } from "./userHelper.js";

const userEndpoints = {
  login: "/users/login",
  register: "/users/register",
  logout: "/users/logout",
};

async function register() {
  const data = await api.post(userEndpoints.register, this.params);
  userHelper.setUserData(data);
}

async function login() {
  const data = await api.post(userEndpoints.login, this.params);
  userHelper.setUserData(data);
}

async function logout() {
  await api.get(userEndpoints.logout);
  userHelper.removeUserData();
}

export const userService = {
  register,
  login,
  logout,
};
