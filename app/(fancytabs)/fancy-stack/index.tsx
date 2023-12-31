import { StyleSheet, TouchableOpacity } from "react-native";

import { Text, View } from "../../../components/Themed";
import { Link } from "expo-router";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Link href="/(fancytabs)/fancy-stack/fancy-nested-screen" asChild>
        <TouchableOpacity style={styles.button}>
          <Text>Go to a nested screen</Text>
        </TouchableOpacity>
      </Link>
      <Link href="/(standardtabs)" asChild>
        <TouchableOpacity style={styles.button}>
          <Text>Go to standard tabs</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#eee",
    marginBottom: 20,
    width: "80%",
    alignItems: "center",
  },
});
