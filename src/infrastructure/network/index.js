import axios from 'axios';

const BASEURL = 'https://newsapi.org/v2/';
export const NEWS_API_KEY = '25ce86b8584040258c81a63fedadb10a';

export const axiosInstance = axios.create({baseURL: BASEURL, timeout: 5000});
