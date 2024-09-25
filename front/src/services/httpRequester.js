// FEEL FREE TO MODIFY THIS FILE IF NEEDED

export default {
  get,
  post,
  patch,
  put,
  del
};


async function get(url) {
  return request({
    method: "GET",
    url
  });
}

async function post(url, { body }) {
  return request({
    method: "POST",
    url,
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" }
  });
}

async function patch(url, { body }) {
  return request({
    method: "PATCH",
    url,
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" }
  });
}

async function put(url, { body }) {
  return request({
    method: "PUT",
    url,
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" }
  });
}

async function del(url) {
  return request({
    method: "DELETE",
    url
  });
}


async function request({ method, url, body, headers }) {
  try {
    const httpResponse = await fetch(url, {
      method,
      ...(headers && { headers }),
      ...(body && { body }),
    });

    const json = await getJSON(httpResponse);
    if (! httpResponse.ok) { throw { httpResponse, json }; }
    
    return { httpResponse, json };

  } catch (error) {
    const request = { method, url, body, headers };
    console.error({ request, response: error });
    return { error: new Error(JSON.stringify(error, null, 2)) };
  }


  async function getJSON(httpResponse) {
    try {
      return await httpResponse.json();
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
