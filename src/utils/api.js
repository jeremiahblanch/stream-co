import { errors } from '../constants';

const baseUrl = 'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json';

const get = async () => {
  const url = `${baseUrl}`;

  try {
    const response = await fetch(url);
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