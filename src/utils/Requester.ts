import axios, { AxiosError } from 'axios';

const apiClient = axios.create({
  xsrfCookieName: 'csrftoken',
  xsrfHeaderName: 'X-CSRFTOKEN',
});

const urls = {
  'temp-temp': '/temp',
};

function handleError<T>(err: AxiosError): T | undefined {
  if (err.response) {
    return err.response.data as T;
  }
  return undefined;
}

async function get<T, B>(url: string, params: B): Promise<T> {
  const response = await apiClient
    .get<T>(url, { params })
    .then((val) => val.data)
    .catch((err) => {
      const errData = handleError<T>(err);
      if (errData) {
        return errData;
      }
      throw err;
    });
  return response;
}

async function post<T, B>(url: string, params: B): Promise<T> {
  const response = await apiClient
    .post<T>(url, params)
    .then((val) => val.data)
    .catch((err) => {
      const errData = handleError<T>(err);
      if (errData) {
        return errData;
      }
      throw err;
    });
  return response;
}

class Requester {
  // getInstallations = (
  //   params: temp,
  // ): Promise<temp> => get(urls['temp-temp'], params);
}

const requester = new Requester();
export { requester as Requester };
