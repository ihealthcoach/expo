import { Pressable, Text, View } from "react-native";

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

export default function Toggle({ valueLeft, valueRight, unit, setUnit }) {
  return unit ? (
    // Checked
    <Pressable
      onPress={() => setUnit(!unit)}
      className="h-[42] w-[180] flex-row items-center justify-start rounded-full border-4 border-[#4fd8be] bg-[#4fd8be]"
    >
      <View className="my-[3] flex h-9 w-[87] items-center justify-center rounded-full bg-white-ih">
        <Text className="font-interSemiBold text-xs text-primary-800">
          {valueLeft}
        </Text>
      </View>
      <View className="my-[3] flex h-9 w-[87] items-center justify-center rounded-full">
        <Text className="mr-1 font-interSemiBold text-xs text-primary-800">
          {valueRight}
        </Text>
      </View>
    </Pressable>
  ) : (
    // Unchecked
    <Pressable
      onPress={() => setUnit(!unit)}
      className="h-[42] w-[180] flex-row items-center justify-end rounded-full border-4 border-[#4fd8be] bg-[#4fd8be]"
    >
      <View className="my-[3] flex h-9 w-[87] items-center justify-center rounded-full">
        <Text className="ml-1 font-interSemiBold text-xs text-primary-800">
          {valueLeft}
        </Text>
      </View>
      <View className="my-[3] flex h-9 w-[87] items-center justify-center rounded-full bg-white-ih">
        <Text className="font-interSemiBold text-xs text-primary-800">
          {valueRight}
        </Text>
      </View>
    </Pressable>
  );
}
