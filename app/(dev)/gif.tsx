import { View, Text, Pressable, ScrollView } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import ArrowLeftIcon from "@/assets/icons/arrow-left-solid";

const Gif = () => {
  const router = useRouter();
  return (
    <View className="flex">
      <View className="mx-4 py-2">
        <Pressable onPress={() => router.back()}>
          <ArrowLeftIcon />
        </Pressable>
      </View>
      <ScrollView>
        <View className="mb-16 flex items-center justify-between">
          <Text className="mb-4 font-interMedium text-lg">
            All GIFs are displayed with (1) no background and (2) gray-100
          </Text>
          <Image
            className="mb-8 h-64 w-64"
            source={require("@/assets/test-data/output.gif")}
          />
          <Image
            className="h-64 w-64 bg-gray-100"
            source={require("@/assets/test-data/output.gif")}
          />
        </View>
        <View className="mb-16 flex items-center justify-between">
          <Text className="mb-4 font-interMedium text-lg">
            Assisted standing chin-up
          </Text>
          <Image
            className="mb-8 h-64 w-64"
            source={require("@/assets/test-data/assisted_standing_chin-up_no_bg.gif")}
          />
          <Image
            className="h-64 w-64 bg-gray-100"
            source={require("@/assets/test-data/assisted_standing_chin-up_no_bg.gif")}
          />
        </View>
        <View className="mb-16 flex items-center justify-between">
          <Text className="mb-4 font-interMedium text-lg">Arnold press</Text>
          <Image
            className="mb-8 h-64 w-64"
            source={require("@/assets/test-data/dumbbell_arnold_press.gif")}
          />
          <Image
            className="h-64 w-64 bg-gray-100"
            source={require("@/assets/test-data/dumbbell_arnold_press.gif")}
          />
        </View>
        <View className="mb-16 flex items-center justify-between">
          <Text className="mb-4 font-interMedium text-lg">Assisted dips</Text>
          <Image
            className="mb-8 h-64 w-64"
            source={require("@/assets/test-data/assisted_triceps_dip_(kneeling)_no_bg.gif")}
          />
          <Image
            className="h-64 w-64 bg-gray-100"
            source={require("@/assets/test-data/assisted_triceps_dip_(kneeling)_no_bg.gif")}
          />
        </View>
        <View className="mb-16 flex items-center justify-between">
          <Text className="mb-4 font-interMedium text-lg">
            Behind neck lat pulldowns
          </Text>
          <Image
            className="mb-8 h-64 w-64"
            source={require("@/assets/test-data/cable_wide_grip_rear_pulldown_behind_neck_no_bg.gif")}
          />
          <Image
            className="h-64 w-64 bg-gray-100"
            source={require("@/assets/test-data/cable_wide_grip_rear_pulldown_behind_neck_no_bg.gif")}
          />
        </View>
        <View className="mb-16 flex items-center justify-between">
          <Text className="mb-4 font-interMedium text-lg">Calf raise</Text>
          <Image
            className="mb-8 h-64 w-64"
            source={require("@/assets/test-data/bodyweight_standing_calf_raise_no_bg.gif")}
          />
          <Image
            className="h-64 w-64 bg-gray-100"
            source={require("@/assets/test-data/bodyweight_standing_calf_raise_no_bg.gif")}
          />
        </View>
        <View className="mb-24" />
      </ScrollView>
    </View>
  );
};

export default Gif;
