import { View, Text, Pressable, ScrollView } from "react-native";
import React from "react";
import HeaderWithBackArrow from "@/components/HeaderWithBackArrow/HeaderWithBackArrow";
import ChevronDownIcon from "@/assets/icons/chevron-down-mini";
import PlusIcon from "@/assets/icons/plus-mini-20";
import Badge from "@/components/Badge";
import CheckOutlineIcon from "@/assets/icons/check-outline";
import HeartIcon from "@/assets/icons/heart-outline";
import { Image } from "expo-image";

const ExerciseDescription = () => {
  return (
    <View className="relative flex-1">
      <HeaderWithBackArrow>
        <View className="flex-row items-center">
          <HeartIcon width={24} height={24} className="mr-3" />
          <Badge text="Add" isDark iconAfter={<PlusIcon fill="#FCFEFE" />} />
        </View>
      </HeaderWithBackArrow>

      <ScrollView>
        <View className="mx-4 mb-6">
          <Text className="mb-1 font-interBold text-4xl leading-[54px] text-gray-900">
            Arnold Press
          </Text>
          <Text className="font-interRegular text-sm leading-[17.5px] text-gray-600">
            Arnold press is a variation of the shoulder press made popular by
            Arnold Schwarzenegger. The difference from regular shoulder press is
            that they hit the front deltas more. The reason for it is a twist of
            the forearms that comes from the starting position. Due to this
            twist, it's only done with dumbbells.{" "}
            <Text className="font-interSemiBold text-gray-900">Read more</Text>
          </Text>
        </View>
        <View className="mx-4 mb-6 flex-row rounded-lg bg-white p-3">
          <View className="flex-1">
            <View>
              <View className="mb-3 items-center">
                <Text className="font-interRegular text-xs text-gray-500">
                  Exercise type
                </Text>
                <Text className="font-interMedium text-sm text-indigo-600">
                  Strength
                </Text>
              </View>
              <View className="items-center">
                <Text className="font-interRegular text-xs text-gray-500">
                  Primary muscle group
                </Text>
                <Text className="font-interMedium text-sm text-indigo-600">
                  Shoulders
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
                  Dumbbell
                </Text>
              </View>
              <View className="items-center">
                <Text className="font-interRegular text-xs text-gray-500">
                  Secondary muscle group
                </Text>
                <Text className="font-interMedium text-sm text-indigo-600">
                  Traps, Triceps
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View className="mb-6 h-48 flex-1 flex-row">
          <Image
            source={require("@/assets/test-data/dumbbell_arnold_press.gif")}
            className="h-full w-1/2"
          />
          <View className="w-1/2 py-6">
            <Image
              contentFit="contain"
              source={require("@/assets/test-data/chest.png")}
              className="h-full w-full"
            />
          </View>
        </View>
        <View className="mx-4">
          <Text className="mb-2 font-interSemiBold text-2xl leading-8 text-gray-900">
            How to
          </Text>
          <View className="mb-2 flex-row">
            <Text className="w-4 font-interRegular text-gray-600">1.</Text>
            <Text className="mr-4 font-interRegular text-gray-600">
              Start from the chest with your palms facing towards you.
            </Text>
          </View>
          <View className="mb-2 flex-row">
            <Text className="w-4 font-interRegular text-gray-600">2.</Text>
            <Text className="mr-4 font-interRegular text-gray-600">
              Twist your forearms outwards as you move the weight upwards. The
              end position should be the same as with a normal shoulder press.
            </Text>
          </View>
          <View className="mb-2 flex-row">
            <Text className="w-4 font-interRegular text-gray-600">3.</Text>
            <Text className="mr-4 font-interRegular text-gray-600">
              ﻿Slowly lower the weights back to the starting position, twisting
              your forearms back to facing you.
            </Text>
          </View>
          <View className="mb-2 flex-row">
            <Text className="w-4 font-interRegular text-gray-600">4.</Text>
            <Text className="mr-4 font-interRegular text-gray-600">
              Arnold presses have been accused of being harsh on shoulders and
              rotator cuffs, so we would advise to start with low weights for
              practicing the technique.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ExerciseDescription;
