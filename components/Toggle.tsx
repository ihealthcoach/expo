import { useState } from "react";
// import { Switch } from "@headlessui/react";
import { Pressable, Text, View } from "react-native";

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

export default function Toggle({ valueLeft, valueRight }) {
  const [kilograms, setKilograms] = useState(true);

  return kilograms ? (
    // Checked
    <Pressable
      onPress={() => setKilograms(!kilograms)}
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
      onPress={() => setKilograms(!kilograms)}
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
  // <View
  //   // checked={enabled}
  //   // onChange={setEnabled}
  //   className={classNames(
  //     enabled ? "bg-indigo-600" : "bg-gray-200",
  //     "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2",
  //   )}
  // >
  //   <View className="sr-only">
  //     <Text>Use setting</Text>
  //   </View>
  //   {/*  <span
  //     aria-hidden="true"
  //     className={classNames(
  //       enabled ? "translate-x-5" : "translate-x-0",
  //       "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
  //     )}
  //   /> */}
  // </View>
}
