import defaults from 'superagent-defaults';
import { getLocale } from '../utils';

const request = defaults();
const locale = getLocale();

request.on('request', (req) => {
  if (req.url[0] === '/') {
    req.url = API_URLS[process.env.NODE_ENV] + req.url;
  }
});

const baseRequest = request.set('Accept', 'json')
  .set('Content-Type', 'application/json')
  .set('Authorization', localStorage.token)
  .set('Locale', locale)
  .timeout({ response: 5000, deadline: 30000 });

export const post = async function post(endpoint, body) {
  const postRequest = baseRequest.send(body);
  try {
    const response = await postRequest.post(endpoint);
    return response.body;
  } catch (error) {
    throw error;
  }
};

export const get = async function get(endpoint, params) {
  const getRequest = baseRequest.params(params);
  try {
    const response = await getRequest.get(endpoint);
    return response;
  } catch (error) {
    throw error;
  }
};
