import { View, Text, Pressable, ScrollView } from "react-native";
import React from "react";
import HeaderWithBackArrow from "@/components/HeaderWithBackArrow/HeaderWithBackArrow";
import ChevronDownIcon from "@/assets/icons/chevron-down-mini";
import PlusIcon from "@/assets/icons/plus-mini-20";
import Badge from "@/components/Badge/Badge";
import CheckOutlineIcon from "@/assets/icons/check-outline";
import HeartIcon from "@/assets/icons/heart-outline";
import { Image } from "expo-image";
import CheckMiniIcon from "@/assets/icons/check-mini";
import CheckBox from "@/components/CheckBox/CheckBox";
import ChevronRightIcon from "@/assets/icons/chevron-right-mini";
import Button from "@/components/Button/Button";
import { useGetExerciseByIdQuery } from "@/queries/exerciseQueries/exerciseQueries";
import { useGetGifByExerciseQuery } from "@/queries/gifQueries/gifQueries";

type Props = {
  id: string;
};

const ExerciseDescription = ({
  id = "2f3af3df-9268-4965-aff5-b208bfcb58ee", // a random exercise id(bodyweight standing calf raise) for testing.
}: Props) => {
  const { data: exercise } = useGetExerciseByIdQuery(id);
  const { data: gif } = useGetGifByExerciseQuery(id);
  if (!exercise) return null;
  return (
    <View className="relative mx-4 flex-1">
      <HeaderWithBackArrow>
        <View className="flex-row items-center">
          <HeartIcon width={24} height={24} className="mr-3" />
          <Badge text="Add" isDark iconAfter={<PlusIcon fill="#FCFEFE" />} />
        </View>
      </HeaderWithBackArrow>
      <ScrollView>
        <View className="mb-6">
          <Text className="mb-1 font-interBold text-4xl leading-[54px] text-gray-900">
            {exercise.name}
          </Text>
          <Text className="font-interRegular text-sm leading-[17.5px] text-gray-600">
            {exercise.description}
            {/* TODO: Read more functionality */}
            <Text className="font-interSemiBold text-gray-900">Read more</Text>
          </Text>
        </View>
        <View className="mb-6 flex-row rounded-lg bg-white p-3">
          <View className="flex-1">
            <View>
              <View className="mb-3 items-center">
                <Text className="font-interRegular text-xs text-gray-500">
                  Exercise type
                </Text>
                <Text className="font-interMedium text-sm text-indigo-600">
                  {exercise.exercise_type}
                </Text>
              </View>
              <View className="items-center">
                <Text className="font-interRegular text-xs text-gray-500">
                  Primary muscle group
                </Text>
                <Text className="font-interMedium text-sm text-indigo-600">
                  {exercise.primary_muscles}
                </Text>
              </View>
            </View>
          </View>
          <View className="flex-1">
            <View className="">
              <View className="mb-3 items-center">
                <Text className="font-interRegular text-xs text-gray-500">
                  Equipment
                </Text>
                <Text className="font-interMedium text-sm text-indigo-600">
                  {exercise.equipment}
                </Text>
              </View>
              <View className="items-center">
                <Text className="font-interRegular text-xs text-gray-500">
                  Secondary muscle group
                </Text>
                <Text className="font-interMedium text-sm text-indigo-600">
                  {exercise.secondary_muscles}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View className="mb-6 h-48 flex-1 flex-row">
          {gif && (
            <Image
              source={{
                uri: gif,
              }}
              className="h-full w-1/2"
            />
          )}
          <View className="w-1/2 py-6">
            <Image
              contentFit="contain"
              source={require("@/assets/test-data/chest.png")}
              className="h-full w-full"
            />
          </View>
        </View>
        <View className=" mb-6">
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
        <View className=" mb-6">
          <Text className="mb-2 font-interSemiBold text-2xl leading-8 text-gray-900">
            Your stats
          </Text>
          <View className="flex-row justify-between border-b-2 border-gray-200 py-3">
            <Text className="font-interRegular text-sm text-gray-600">
              Times logged
            </Text>
            <Text className="font-interMedium text-sm text-gray-600">24</Text>
          </View>
          <View className="flex-row justify-between border-b-2 border-gray-200 py-3">
            <Text className="font-interRegular text-sm text-gray-600">
              Weight lifted
            </Text>
            <Text className="font-interMedium text-sm text-gray-600">
              999 kg
            </Text>
          </View>
          <View className="flex-row justify-between border-b-2 border-gray-200 py-3">
            <Text className="font-interRegular text-sm text-gray-600">
              Number of sets
            </Text>
            <Text className="font-interMedium text-sm text-gray-600">72</Text>
          </View>
          <View className="flex-row justify-between py-3">
            <Text className="font-interRegular text-sm text-gray-600">
              Number of reps
            </Text>
            <Text className="font-interMedium text-sm text-gray-600">720</Text>
          </View>
        </View>
        <View className=" mb-6">
          <Text className="mb-2 font-interSemiBold text-2xl leading-8 text-gray-900">
            Benefits
          </Text>
          {exercise.benefits.map((benifits, index) => (
            <View key={index} className="mb-2 flex-row">
              <Text className="w-4 font-interRegular text-gray-600">
                {index + 1}.
              </Text>
              <Text className="mr-4 font-interRegular text-gray-600">
                {benifits}
              </Text>
            </View>
          ))}
        </View>
        <View className=" mb-6">
          <Text className="mb-3 font-interSemiBold text-2xl leading-8 text-gray-900">
            Exercise variations
          </Text>
          {/* First exercise */}
          <View className="mb-2 flex-row items-center justify-between">
            <View className="flex-row items-center">
              <View className="mr-4">
                <CheckBox checked />
              </View>
              <Image
                source={require("@/assets/test-data/dumbbell_arnold_press.gif")}
                contentFit="contain"
                className="mr-4 h-16 w-16"
              />
              <View>
                <Text className="font-interSemiBold text-base text-gray-900">
                  Arnold press
                </Text>
                <Text className="font-interRegular text-xs text-gray-400">
                  Biceps, Dumbbell
                </Text>
              </View>
            </View>
            <Text className="font-interSemiBold text-xs text-indigo-600">
              Added
            </Text>
          </View>
          {/* Second exercise */}
          <View className="mb-2 flex-row items-center justify-between">
            <View className="flex-row items-center">
              <View className="mr-4">
                <CheckBox />
              </View>
              <Image
                source={require("@/assets/test-data/assisted_standing_chin-up_no_bg.gif")}
                contentFit="contain"
                className="mr-4 h-16 w-16"
              />
              <View>
                <Text className="font-interSemiBold text-base text-gray-900">
                  Assisted chin ups
                </Text>
                <Text className="font-interRegular text-xs text-gray-400">
                  Lats, Machine
                </Text>
              </View>
            </View>
            <ChevronRightIcon />
          </View>
        </View>
        <View className="">
          <Button
            text="Add exercise to workout"
            bgColor="bg-indigo-600"
            iconBefore={<PlusIcon fill="#FCFEFE" />}
          />
          <Button
            text="Add to favorites"
            bgColor="bg-gray-50"
            textColor="text-gray-700"
            border="border-[1px] border-gray-200"
            iconBefore={<HeartIcon stroke="#374151" />}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ExerciseDescription;
