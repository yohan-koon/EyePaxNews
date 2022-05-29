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

export const fetchAllNews = async ({
  page,
  pageSize = 10,
  sortBy,
  searchKeyword = 'usa',
}) => {
  try {
    let query = `${ALL_NEWS}?q=usa&sortBy=${sortBy}&pageSize=${pageSize}&page=${page}&language=en&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`;
    if (searchKeyword != null && searchKeyword !== '') {
      query = `${ALL_NEWS}?q=${searchKeyword}&sortBy=${sortBy}&pageSize=${pageSize}&page=${page}&language=en&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`;
    }
    const response = await axiosInstance.get(query);
    if (response.data != null && response.status === 200) {
      return response.data.articles;
    }
    throw Error('Something went wrong. Plese try again');
  } catch (err) {
    throw err;
  }
};
