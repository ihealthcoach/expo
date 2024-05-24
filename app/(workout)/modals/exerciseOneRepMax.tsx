import { View, Text } from "react-native";
import HeaderWithBackArrow from "@/components/HeaderWithBackArrow/HeaderWithBackArrow";
import ExerciseOneRepMax from "@/components/Modals/ExerciseOneRepMax/ExerciseOneRepMax";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

const ExerciseOneRepMaxDemo = () => {
  return (
    <View className="flex-1">
      {/* <BottomSheetModalProvider> */}
      <HeaderWithBackArrow path="/(dev)/workout/modals">
        <Text>Exercise one rep max</Text>
      </HeaderWithBackArrow>
      <View className="flex-1">
        <ExerciseOneRepMax />
      </View>
      {/* </BottomSheetModalProvider> */}
    </View>
  );
};

export default ExerciseOneRepMaxDemo;
