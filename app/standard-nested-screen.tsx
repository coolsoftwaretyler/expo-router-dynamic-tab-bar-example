import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";

export default function StandardNestedScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        This "nested" screen does not show the tab bar, but it technically lives
        at the same level as the (standardtabs) folder.
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
