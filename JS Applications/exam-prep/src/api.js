import {userHelper} from "./userHelper.js";

const baseUrl = "http://localhost:3030/";

async function requester(url, method, data) {
  const option = {
    method,
    headers: {},
  };

  const userData = userHelper.getUserData();

  if (userData) {
    option.headers["x-authorization"] = userData.accessToken;
  }

  if (data) {
    option.headers["Content-Type"] = "application/json";
    option.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(`${baseUrl}${url}`, option);

    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.message);
    }

    if (response.status === 204) {
      return response;
    }

    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }
}

async function get(url) {
  return await requester(url, "GET");
}

async function post(url, data) {
  return await requester(url, "POST", data);
}

async function put(url, data) {
  return await requester(url, "PUT", data);
}

async function del(url) {
  return await requester(url, "DELETE");
}

export const api = {
  get,
  post,
  put,
  del,
};