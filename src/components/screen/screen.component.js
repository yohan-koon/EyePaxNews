import React from 'react';
import {RefreshControl} from 'react-native';
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
}) => {
  const renderChildren = () => {
    if (isScrollable) {
      return (
        <ScreenScrollView
          refreshControl={
            <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
          }>
          {children}
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
      </SafeAreaScreenContainer>
    );
  }
  return (
    <ScreenContainer bgColor={bgColor} horizontalMargin={horizontalMargin}>
      {renderChildren()}
    </ScreenContainer>
  );
};
