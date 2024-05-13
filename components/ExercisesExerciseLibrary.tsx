import ChevronRightIcon from "@/assets/icons/chevron-right-mini";
import exercises from "@/assets/test-data/exercises.json";
import { Image } from "expo-image";

import { SectionList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ExercisesScreen = () => {
  const sections = Object.keys(exercises).map((key) => ({
    title: key,
    data: exercises[key],
  }));

  // BUG: SectionList is disappearing below the screen.
  return (
    // <SafeAreaView className="flex-1" edges={["top", "bottom"]}>
    <SectionList
      // className="h-2/4"
      sections={sections}
      stickySectionHeadersEnabled
      keyExtractor={(item, index) => item.id + index}
      renderItem={({ item }) => (
        <View className="flex-row items-center justify-between">
          <View className="ml-4 flex-row items-center">
            <Image
              source={{ uri: item.imageUrl }}
              style={{ width: 68, height: 68 }}
            />
            <View>
              <Text className="font-interSemiBold text-base leading-5 text-gray-900">
                {item.name}
              </Text>
              <Text className="font-interRegular text-xs leading-[13.75px] text-gray-400">
                {item.description}
              </Text>
            </View>
          </View>
          {item.status === "Added" ? (
            <Text className="font-interSemiBold text-xs leading-[13.75px] text-indigo-600">
              Added
            </Text>
          ) : (
            <ChevronRightIcon />
          )}
        </View>
      )}
      renderSectionHeader={({ section: { title } }) => (
        <Text className="bg-gray-100  text-right font-interSemiBold text-4xl leading-[45px] text-gray-900">
          {title}
        </Text>
      )}
    />
    // </SafeAreaView>
  );
};

export default ExercisesScreen;
