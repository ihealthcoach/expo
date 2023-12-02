import { useEffect } from "react";
import Animated, {
  useAnimatedStyle,
  withTiming,
  useSharedValue,
} from "react-native-reanimated";
import { useProgressBar } from "@/context/useProgressBar";
import { View } from "react-native";

const ProgressBar = () => {
  const { isVisible, progress } = useProgressBar();
  const progressValue = useSharedValue(0);

  useEffect(() => {
    // Directly set the progressValue to the new progress
    progressValue.value = withTiming(progress, { duration: 200 });
  }, [progress]); // Dependency on progress

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: `${progressValue.value}%`,
    };
  });

  const containerStyle = useAnimatedStyle(() => {
    return {
      opacity: isVisible ? 1 : 0,
    };
  });

  return (
    <Animated.View
      className="w-full flex-row rounded-full bg-[#74dfce]"
      style={containerStyle}
    >
      <Animated.View
        className="h-[6px] rounded-full bg-primary-800"
        style={animatedStyle}
      />
    </Animated.View>
  );
};

export default ProgressBar;
