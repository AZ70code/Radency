import { BASE_URL } from '../constans/api';

const fetcher = async ({
    url,
    body = {},
    headers = {},
    method = ''
  }) => {
    const defaultHeaders = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "no-cors",
      ...headers,
    }
    try {
      const path = BASE_URL + url;
      const response = await fetch(path, {
      body: JSON.stringify(body),
      headers: defaultHeaders,
      method
      })
      return await response.json();
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
const fetcherGet = async ({
  url,
  headers = {},
  method = 'GET'
}) => {
  const defaultHeaders = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "no-cors",
    ...headers,
  }
  try {
    const path = BASE_URL + url;
    const response = await fetch(path, {
    headers: defaultHeaders,
    method
    })
    return await response.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
}


  class Http {
    static get({ url }) {
      return fetcherGet({ url })
    }
  
    static post({ url, body }) {
      return fetcher({ url, method: 'POST', body })
    }
  
    static put({ url, body }) {
      return fetcher({ url, method: 'PUT', body })
    }
  
    static delete({ url }) {
      return fetcher({ url, method: 'DELETE' })
    }
  }
  
  export default Http;