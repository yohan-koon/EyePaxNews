import React, {createContext, useState, useContext} from 'react';
import {signIn} from '../services/auth.service';
import {
  storeObjectData,
  getObjectData,
} from '../utils/async-storage/async-storage.utils';
import {USER_DETAILS} from '../utils/async-storage/async-storage.keys';
import {NavigationContext} from './navigation.context';
import {NavigationStatus} from '../enums/navigation-status.enum';

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  const {onNavigationStausChange} = useContext(NavigationContext);

  const signInWithGoogle = async () => {
    try {
      setIsLoading(true);
      const response = await signIn();
      const authenticatedUser = response.user;
      if (authenticatedUser != null) {
        setUser(authenticatedUser);
        const isUserCreated = await storeObjectData(
          USER_DETAILS,
          authenticatedUser,
        );
        if (isUserCreated) {
          onNavigationStausChange(NavigationStatus.Authenticated);
        }
      } else {
        setUser(null);
        storeObjectData(USER_DETAILS, null);
      }
    } catch (err) {
      console.log(err);
      setError(err.toString());
    } finally {
      setIsLoading(false);
    }
  };

  const requestToValidateUser = async () => {
    try {
      if (user != null) {
        onNavigationStausChange(NavigationStatus.Authenticated);
      } else {
        const persistedUser = await getObjectData(USER_DETAILS);
        if (persistedUser != null) {
          setUser(persistedUser);
          onNavigationStausChange(NavigationStatus.Authenticated);
        } else {
          onNavigationStausChange(NavigationStatus.NotAuthenticatd);
        }
      }
    } catch (err) {
      console.log(err);
      onNavigationStausChange(NavigationStatus.NotAuthenticatd);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        isLoading,
        error,
        user,
        signInWithGoogle,
        requestToValidateUser,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
