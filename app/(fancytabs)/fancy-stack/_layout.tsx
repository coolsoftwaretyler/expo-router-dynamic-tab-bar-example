import { Stack } from "expo-router";

export default function FancySTackLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="fancy-nested-screen"
        options={{ headerShown: false }}
      />
    </Stack>
  );
}
