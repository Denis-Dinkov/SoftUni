const baseUrl = "https://api.github.com";

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
    throw new error;
  }
}
