import XMarkIcon from "@/assets/icons/x-mark-mini";
import { useGetExerciseByIdQuery } from "@/queries/exerciseQueries/exerciseQueries";
import { useGetGifByExerciseQuery } from "@/queries/gifQueries/gifQueries";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  InputAccessoryView,
  Keyboard,
} from "react-native";
import { Image } from "expo-image";

type ExerciseGuideProps = {
  handleClosePanel: () => void;
  exerciseId: string;
};

export const ExerciseGuide = ({
  handleClosePanel,
  exerciseId,
}: ExerciseGuideProps) => {
  const { data: exercise } = useGetExerciseByIdQuery(exerciseId);
  const { data: exerciseGif } = useGetGifByExerciseQuery(exerciseId);
  if (!exercise) return null;
  return (
    <View className="mx-4 mt-2 flex-1">
      <View className="mb-6 w-full flex-row items-center justify-between">
        <Text className="font-interBold text-2xl text-gray-900">
          Exercise guide
        </Text>
        <TouchableOpacity
          onPress={handleClosePanel}
          className="shrink rounded-full bg-gray-100 p-2"
        >
          <XMarkIcon fill="#111827" width={24} height={24} />
        </TouchableOpacity>
      </View>
      <View className="mb-6">
        <Text className="mb-1 font-interBold text-4xl leading-[54px] text-gray-900">
          {exercise.name}
        </Text>
      </View>
      <View className="mb-6 flex-1 flex-row">
        {exerciseGif ? (
          <Image source={{ uri: exerciseGif }} className="h-full w-1/2" />
        ) : null}
        <View className="w-1/2 py-6">
          <Image
            contentFit="contain"
            source={require("@/assets/test-data/chest.png")}
            className="h-full w-full"
          />
        </View>
      </View>
      <View className="mb-6">
        <Text className="mb-2 font-interSemiBold text-2xl leading-8 text-gray-900">
          How to
        </Text>
        {exercise.instructions.map((instruction, index) => (
          <View key={index} className="mb-2 flex-row">
            <Text className="w-4 font-interRegular text-gray-600">
              {index + 1}.
            </Text>
            <Text className="mr-4 font-interRegular text-gray-600">
              {instruction}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};
