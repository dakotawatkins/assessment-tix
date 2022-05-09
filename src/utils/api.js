/////////////////////

/**
 * Defines the default headers for these functions to work with `json-server`
 */
const headers = new Headers();
headers.append("Content-Type", "application/json");

async function fetchJson(url, options, onCancel) {
  try {
    const response = await fetch(url, options);

    if (response.status < 200 || response.status > 399) {
      throw new Error(`${response.status} - ${response.statusText}`);
    }

    if (response.status === 204) {
      return null;
    }

    return await response.json();
  } catch (error) {
    if (error.name !== "AbortError") {
      console.error(error.stack);
      throw error;
    }
    return Promise.resolve(onCancel);
  }
}

/////////////////////
// Makes GET request for list of users.
export async function listUsers(params, signal) {
  const url = "https://6180472f8bfae60017adfa54.mockapi.io/users";

  if (params) {
    Object.entries(params).forEach(([key, value]) =>
      url.searchParams.append(key, value.toString())
    );
  }

  return await fetchJson(url, { headers, signal, method: "GET" }, []);
}

// Makes POST request for specific user.
export async function addUser(user, signal) {
  const url = "https://6180472f8bfae60017adfa54.mockapi.io/users";
  const body = JSON.stringify({ data: user });
  return await fetchJson(url, { headers, signal, method: "POST", body }, []);
}

// Makes a PUT request to update user.
export async function updateUser(user, signal) {
  const url = `https://6180472f8bfae60017adfa54.mockapi.io/users/${user.id}`;
  const body = JSON.stringify({ data: user });
  const options = {
    method: "PUT",
    headers,
    body,
  };
  return await fetchJson(url, options, []);
}

export async function readUsers(userId, signal) {
  const url = `https://6180472f8bfae60017adfa54.mockapi.io/users/${userId}`;
  return await fetchJson(url, { signal }, {});
}
