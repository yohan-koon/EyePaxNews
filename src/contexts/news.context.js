import React, {createContext, useState} from 'react';

export const NewsContext = createContext();

export const NewsContextProvider = ({children}) => {
  //Status of the bell icon of news alerts
  const [isNotificationReceived, setIsNotificationReceived] = useState(false);
  return (
    <NewsContext.Provider value={{isNotificationReceived}}>
      {children}
    </NewsContext.Provider>
  );
};
