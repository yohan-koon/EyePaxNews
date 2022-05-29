import axios from 'axios';

const BASEURL = 'https://newsapi.org/v2/';
export const NEWS_API_KEY = 'd489093b263c4b829b1eac2275a32a1d';

export const axiosInstance = axios.create({baseURL: BASEURL, timeout: 5000});
