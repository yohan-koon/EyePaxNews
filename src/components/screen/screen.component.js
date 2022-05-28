import React from 'react';
import {RefreshControl} from 'react-native';
import {Loader} from '../loader/loader.component';
import {
  ScreenContainer,
  SafeAreaScreenContainer,
  ScreenScrollView,
} from './screen.styles';

export const Screen = ({
  isSafeArea = true,
  bgColor,
  horizontalMargin = 16,
  isScrollable = false,
  isRefreshing = false,
  onRefresh,
  children,
  isLoading = false,
}) => {
  const renderChildren = () => {
    if (isScrollable) {
      return (
        <ScreenScrollView
          refreshControl={
            <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
          }>
          {children}
          <Loader isLoading={isLoading} />
        </ScreenScrollView>
      );
    } else {
      return children;
    }
  };
  if (isSafeArea) {
    return (
      <SafeAreaScreenContainer
        bgColor={bgColor}
        horizontalMargin={horizontalMargin}>
        {renderChildren()}
        <Loader isLoading={isLoading} />
      </SafeAreaScreenContainer>
    );
  }
  return (
    <ScreenContainer bgColor={bgColor} horizontalMargin={horizontalMargin}>
      {renderChildren()}
      <Loader isLoading={isLoading} />
    </ScreenContainer>
  );
};
