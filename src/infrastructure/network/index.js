import axios from 'axios';

const BASEURL = 'https://newsapi.org/v2/';
export const NEWS_API_KEY = 'f38950c22e02420ba217b58281f0197b';

export const axiosInstance = axios.create({baseURL: BASEURL, timeout: 5000});
