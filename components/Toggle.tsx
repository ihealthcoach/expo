import { useState } from "react";
// import { Switch } from "@headlessui/react";
import { Pressable, Text, View } from "react-native";

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

export default function Toggle({ valueLeft, valueRight }) {
  const [kilograms, setKilograms] = useState(true);

  // console.log("valueLeft", valueLeft);
  // console.log("valueRight", valueRight);

  return kilograms ? (
    // Checked
    <Pressable
      onPress={() => setKilograms(!kilograms)}
      className="h-[42] w-[180] flex-row items-center justify-start rounded-full border-4 border-[#4fd8be] bg-[#4fd8be]"
    >
      <View className="my-[3] flex h-9 w-[87] items-center justify-center rounded-full bg-white-ih">
        <Text className="font-interSemiBold text-xs text-primary-800">
          Kilograms
        </Text>
      </View>
      <View className="my-[3] flex h-9 w-[87] items-center justify-center rounded-full">
        <Text className="mr-1 font-interSemiBold text-xs text-primary-800">
          Pounds
        </Text>
      </View>
    </Pressable>
  ) : (
    // Unchecked
    <Pressable
      onPress={() => setKilograms(!kilograms)}
      className="h-[42] w-[180] flex-row items-center justify-end rounded-full border-4 border-[#4fd8be] bg-[#4fd8be]"
    >
      <View className="my-[3] flex h-9 w-[87] items-center justify-center rounded-full">
        <Text className="ml-1 font-interSemiBold text-xs text-primary-800">
          Kilograms
        </Text>
      </View>
      <View className="my-[3] flex h-9 w-[87] items-center justify-center rounded-full bg-white-ih">
        <Text className="font-interSemiBold text-xs text-primary-800">
          Pounds
        </Text>
      </View>
    </Pressable>
  );
}
