import {axiosInstance, NEWS_API_KEY} from '../infrastructure/network';
import {LATEST_NEWS, ALL_NEWS} from '../infrastructure/network/end-points';

export const fetchLatestNews = async ({category}) => {
  try {
    const response = await axiosInstance.get(
      `${LATEST_NEWS}&category=${category}&apiKey=${NEWS_API_KEY}`,
    );
    if (response.data != null && response.status === 200) {
      return response.data.articles;
    }
    throw Error('Something went wrong. Plese try again');
  } catch (err) {
    throw err;
  }
};

export const fetchAllNews = async ({page, pageSize = 10}) => {
  try {
    const response = await axiosInstance.get(
      `${ALL_NEWS}?pageSize=${pageSize}&page=${page}&language=en&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`,
    );
    if (response.data != null && response.status === 200) {
      return response.data.articles;
    }
    throw Error('Something went wrong. Plese try again');
  } catch (err) {
    throw err;
  }
};
