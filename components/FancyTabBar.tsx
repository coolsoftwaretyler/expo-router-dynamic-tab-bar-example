import React from "react";
import { BottomTabBar, BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useFancyTabBar } from "../context/FancyTabBarContext";

const FancyTabBar: React.FC<BottomTabBarProps> = (props: BottomTabBarProps) => {
  const { isTabBarVisible } = useFancyTabBar();

  if (!isTabBarVisible) {
    return null;
  }

  return <BottomTabBar {...props} />;
};

export default FancyTabBar;
