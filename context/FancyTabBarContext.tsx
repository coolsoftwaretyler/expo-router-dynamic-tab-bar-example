import React, { createContext, useContext, useState } from "react";

const FancyTabBarContext = createContext({
  isTabBarVisible: true,
  hideTabBar: () => {},
  showTabBar: () => {},
});

export const useFancyTabBar = () => {
  return useContext(FancyTabBarContext);
};

export const FancyTabBarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isTabBarVisible, setIsTabBarVisible] = useState(true);

  const toggleTabBarVisibility = () => {
    setIsTabBarVisible((prevState) => !prevState);
  };

  const value = {
    isTabBarVisible,
    hideTabBar: () => setIsTabBarVisible(false),
    showTabBar: () => setIsTabBarVisible(true),
  };

  return (
    <FancyTabBarContext.Provider value={value}>
      {children}
    </FancyTabBarContext.Provider>
  );
};
