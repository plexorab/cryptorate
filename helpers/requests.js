const axios = require('axios');

const getExchanges = async () => {
  const url = `${process.env.BASE_URL}/v1/exchanges`;

  return await axios.get(url, {
    headers: {
      Accept: 'application/json',
      'Accept-Encoding': 'deflate, gzip',
      'X-CoinAPI-Key': process.env.API_KEY,
    },
  });
};

const getAssets = async () => {
  const url = `${process.env.BASE_URL}/v1/assets`;

  return await axios.get(url, {
    headers: {
      Accept: 'application/json',
      'Accept-Encoding': 'deflate, gzip',
      'X-CoinAPI-Key': process.env.API_KEY,
    },
  });
};

module.exports = {
  getExchanges,
  getAssets,
};
