import React, {createContext, useState, useContext} from 'react';

import {newsCategoriesMock} from '../features/home/components/news-category-section/news-category-section.mock';
import {fetchLatestNews, fetchAllNews} from '../services/news.service';

export const NewsContext = createContext();

export const NewsContextProvider = ({children}) => {
  // HANDLE SEARCH BAR NOTIFICATION
  const [isNotificationReceived, setIsNotificationReceived] = useState(false);

  // HANDLE GET LATEST NEWS API
  const [isLoadingGetLatestNews, setIsLoadingGetLatestNews] = useState(false);
  const [latestNewsLoadingError, setLatestNewsLoadingError] = useState(null);
  const [latestNews, setLatestNews] = useState([]);

  // HANDLE NEWS CATEGORY SELECTION
  const [selectedNewsCategory, setSelectedNewsCategory] = useState(
    newsCategoriesMock[0],
  );

  // HANDLE GET ALL NEWS API
  const [isLoadingGetAllNews, setIsLoadingGetAllNews] = useState(false);
  const [allNewsLoadingError, setAllNewsLoadingError] = useState(null);
  const [allNews, setAllNews] = useState([]);
  const [page, setPage] = useState(0);

  const getLatestNews = async () => {
    try {
      const response = await fetchLatestNews({
        category: selectedNewsCategory.key,
      });
      if (response) {
        console.log('1', response[0]);
        setLatestNews(response);
      } else {
        setLatestNews([]);
      }
    } catch (err) {
      console.log(err);
      setLatestNews([]);
    }
  };

  const onChangeNewsCategory = newsCategory => {
    setSelectedNewsCategory(newsCategory);
    getLatestNews();
  };

  const getAllNews = async () => {
    try {
      console.log('getAllNews');
      const nextPage = page + 1;
      setPage(nextPage);
      const response = await fetchAllNews({page: nextPage});
      console.log(response);
      if (response) {
        if (page === 1) {
          setAllNews(response);
        } else {
          setAllNews([...allNews, ...response]);
        }
      } else {
        setAllNews([]);
      }
    } catch (err) {
      console.log(err);
      setAllNews([]);
    }
  };

  return (
    <NewsContext.Provider
      value={{
        isNotificationReceived,
        getLatestNews,
        isLoadingGetLatestNews,
        latestNewsLoadingError,
        latestNews,
        selectedNewsCategory,
        onChangeNewsCategory,
        isLoadingGetAllNews,
        allNewsLoadingError,
        allNews,
        getAllNews,
      }}>
      {children}
    </NewsContext.Provider>
  );
};
