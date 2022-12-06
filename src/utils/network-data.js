// const BASE_URL = "https://orange-slippers.cyclic.app";
const BASE_URL = "http://localhost:8000";

function getAccessToken() {
  return localStorage.getItem("accessToken");
}

function putAccessToken(accessToken) {
  return localStorage.setItem("accessToken", accessToken);
}

async function fetchWithToken(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      "auth-token": `${getAccessToken()}`,
    },
  });
}

async function login({ email, password }) {
  const response = await fetch(`${BASE_URL}/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const responseJson = await response.json();

  if (responseJson.status !== "success") {
    alert(responseJson.message);
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

async function register({ name, username, email, password }) {
  const response = await fetch(`${BASE_URL}/user/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, username, email, password }),
  });

  const responseJson = await response.json();

  if (responseJson.message !== "Success") {
    alert(responseJson.message);
    return { error: true };
  }

  return { error: false };
}

async function getUserLogged() {
  const response = await fetchWithToken(`${BASE_URL}/user/me`);
  const responseJson = await response.json();

  if (responseJson.message !== "Success") {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.result };
}

async function uploadProject({ title, description, tags, code }) {
  const response = await fetchWithToken(`${BASE_URL}/post/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, description, tags, code }),
  });

  const responseJson = await response.json();

  if (responseJson.message !== "Success") {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.result };
}

async function getUser(uid) {
  const response = await fetchWithToken(`${BASE_URL}/user/${uid}`);
  const responseJson = await response.json();

  if (responseJson.status !== "Success") {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.result };
}

async function getAllProjects() {
  const response = await fetchWithToken(`${BASE_URL}/post`);
  const responseJson = await response.json();

  if (responseJson.status !== "Success") {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.result };
}

async function getProject(id) {
  const response = await fetchWithToken(`${BASE_URL}/post/${id}`);
  const responseJson = await response.json();

  if (responseJson.message !== "Success") {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.result };
}

async function updateUser({ username, name, email, password, social }) {
  const response = await fetchWithToken(`${BASE_URL}/user/update`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, name, email, password, social }),
  });

  const responseJson = await response.json();


  if (responseJson.message !== "account was updated") {
    alert(responseJson.message);
    return { error: true };
  }

  return { error: false, data: responseJson.result };
}

async function updateGeneral({email}) {
  const response = await fetchWithToken(`${BASE_URL}/user/update/general`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  const responseJson = await response.json();


  if (responseJson.message !== "account was updated") {
    alert(responseJson.message);
    return { error: true };
  }

  return { error: false, data: responseJson.result };
}

async function updateProfile({name, location, bio}) {
  const response = await fetchWithToken(`${BASE_URL}/user/update/edit`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, location, bio }),
  });

  const responseJson = await response.json();


  if (responseJson.message !== "account was updated") {
    alert(responseJson.message);
    return { error: true };
  }

  return { error: false, data: responseJson.result };
}

async function verify({password}) {
  const response = await fetchWithToken(`${BASE_URL}/user/verify`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password }),
  });

  const responseJson = await response.json();


  if (responseJson.message !== "Password Anda Benar!") {
    alert(responseJson.message);
    return { error: true };
  }

  return { error: false, data: responseJson.result };
}

async function updatePassword({password}) {
  const response = await fetchWithToken(`${BASE_URL}/user/update/password`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password }),
  });

  const responseJson = await response.json();


  if (responseJson.message !== "account was updated") {
    alert(responseJson.message);
    return { error: true };
  }

  return { error: false, data: responseJson.result };
}

async function updateSocial({social}) {
  const response = await fetchWithToken(`${BASE_URL}/user/update/social`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ social }),
  });

  const responseJson = await response.json();


  if (responseJson.message !== "account was updated") {
    alert(responseJson.message);
    return { error: true };
  }

  return { error: false, data: responseJson.result };
}

export {
  getAccessToken,
  putAccessToken,
  login,
  register,
  getUserLogged,
  uploadProject,
  getUser,
  getAllProjects,
  getProject,
  updateGeneral,
  updateProfile,
  verify,
  updatePassword,
  updateSocial,
};
