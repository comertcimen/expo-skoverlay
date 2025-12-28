import { Pressable, Text, View, type ViewStyle } from "react-native";
import { showSKOverlay } from "expo-skoverlay";

const expoGoAppId = "982107779";

export default function App() {
  return (
    <View style={$container}>
      <Pressable onPress={() => showSKOverlay(expoGoAppId)}>
        <Text>Show SKOverlay</Text>
      </Pressable>
    </View>
  );
}

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: "#eee",
  justifyContent: "center",
  alignItems: "center",
};
