import { errors } from '../constants';

const baseUrl = 'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/';

const get = async (url) => {
  const fullUrl = `${baseUrl}${url}`;

  try {
    const response = await fetch(fullUrl);
    const data = await response.json();

    return data;
  }
  catch (e) {
    throw new Error(errors.FETCH_ERROR);
  }
}

export default {
  get
}