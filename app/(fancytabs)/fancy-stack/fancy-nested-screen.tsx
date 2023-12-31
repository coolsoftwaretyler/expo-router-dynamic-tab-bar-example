import { StyleSheet } from "react-native";
import { Text, View } from "../../../components/Themed";
import { useFancyTabBar } from "../../../context/FancyTabBarContext";
import { useEffect } from "react";

export default function StandardNestedScreen() {
  const { hideTabBar, showTabBar } = useFancyTabBar();

  useEffect(() => {
    hideTabBar();

    return () => {
      showTabBar();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        This nested screen does not show the tab bar, but it technically lives
        nested in the (fancytabs)/fancy-stack folder.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
