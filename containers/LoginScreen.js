import { useIsFocused } from "@react-navigation/native";
import { StatusBar, Text, View } from "react-native";
//
function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar {...props} /> : null;
}
//
const LoginScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#533382" />
      <Text>This is the LoginScreen component</Text>
    </View>
  );
};

export default LoginScreen;
