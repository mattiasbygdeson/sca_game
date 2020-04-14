import axios from 'axios';
import https from 'https';
import qs from 'qs';

const url = "https://sca-score-api.herokuapp.com/api/score";
// const url = "http://localhost:8080/api/score";

const instance = axios.create({
  baseURL: url,
  headers: {
    'Content-Type': 'application/json'
  },
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
  paramsSerializer: params => qs.stringify(params),
});

// Exports
async function getScoreList(type) {
  const extension = "/type/" + type;

  try {
    const response = await instance.get(url + extension);
    return response.data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
}

async function setScore(name, company, phone, score, type) {
  try {
    const response = await instance.post(url, {
      name: name,
      company: company,
      phone: phone,
      score: score,
      type: type
    });
    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
}

async function removeScore(id) {
  try {
    const response = await instance.delete(url + "/" + id);
    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
}

export {
  getScoreList, setScore, removeScore
};