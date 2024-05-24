import { useRef } from "react";
import ChevronRightIcon from "@/assets/icons/chevron-right-mini";
import exercises from "@/assets/test-data/exercises.json";
import { Image } from "expo-image";

import { SectionList, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Badge from "../Badge/Badge";

interface Exercise {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  status: string;
}

interface AlphabetNavigationProps {
  onSelectLetter: (letter: string) => void;
  availableLetters: string[];
}

const ALPHABET = "#ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const AlphabetNavigation: React.FC<AlphabetNavigationProps> = ({
  onSelectLetter,
  availableLetters,
}) => {
  return (
    <View className="ml-4 p-2">
      {ALPHABET.map((letter) => (
        <TouchableOpacity key={letter} onPress={() => onSelectLetter(letter)}>
          <Text
            className={`py-1 font-interMedium text-xs ${availableLetters.includes(letter) ? "text-gray-400" : "text-gray-200"}`}
          >
            {letter}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
const ExercisesScreen = () => {
  const sectionListRef = useRef<SectionList<Exercise>>(null);

  const sections = Object.keys(exercises).map((key) => ({
    title: key,
    data: exercises[key],
  }));

  const availableLetters = sections.map((section) => section.title[0]);

  const handleSelectLetter = (letter: string) => {
    const sectionIndex = sections.findIndex((section) =>
      section.title.startsWith(letter),
    );
    if (sectionIndex !== -1 && sectionListRef.current) {
      sectionListRef.current.scrollToLocation({ sectionIndex, itemIndex: 0 });
    }
  };

  // BUG: SectionList is disappearing below the screen.
  return (
    // <SafeAreaView className="flex-1" edges={["top", "bottom"]}>
    <View className="">
      <View className="flex-row">
        <SectionList
          ref={sectionListRef}
          sections={sections}
          stickySectionHeadersEnabled
          showsVerticalScrollIndicator={false}
          ListFooterComponent={<View style={{ marginBottom: 100 }} />}
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
        <AlphabetNavigation
          availableLetters={availableLetters}
          onSelectLetter={handleSelectLetter}
        />
      </View>
    </View>
    // </SafeAreaView>
  );
};

export default ExercisesScreen;
