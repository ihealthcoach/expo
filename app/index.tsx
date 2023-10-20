import { Text, View } from "react-native";

export default function Page() {
  return (
    <View className="flex-1 items-center bg-[#66eed1]">
      <View className="mx-auto flex-1 justify-center">
        <Text className="font-interBold text-4xl">
          This is the first page of your app.
        </Text>
      </View>
    </View>
  );
}
