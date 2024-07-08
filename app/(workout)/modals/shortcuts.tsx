import { View, Text } from "react-native";
import HeaderWithBackArrow from "@/components/HeaderWithBackArrow/HeaderWithBackArrow";
import WorkoutSettings from "@/components/Modals/WorkoutSettings/WorkoutSettings";
import Shortcuts from "@/components/Modals/Shortcuts/Shortcuts";

const ShortcutsDemo = () => {
  return (
    <View className="flex-1">
      <HeaderWithBackArrow path="/(dev)/workout/modals">
        <Text>Workout settings</Text>
      </HeaderWithBackArrow>
      <View className="flex-1">
        <Shortcuts />
      </View>
    </View>
  );
};

export default ShortcutsDemo;
