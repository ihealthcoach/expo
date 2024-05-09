import Greeting from "@/components/Greeting";
import Header from "@/components/Header";
import TodayGoals from "@/components/TodayGoals";
import React, { useMemo, useState } from "react";
import { ScrollView, View, Text } from "react-native";
import Button from "@/components/Button";
import ArrowRightIcon from "@/assets/icons/arrow-right-mini";
import TodayActivities from "@/components/TodayActivities";
import AddWidget from "@/components/AddWidget";

import BottomSheet from "@gorhom/bottom-sheet";
import { Link } from "expo-router";
import PlusCircleIcon from "@/assets/icons/plus-circle-outline";
import PlusIcon from "@/assets/icons/plus-mini-20";

const landingpage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const snapPoints = useMemo(() => ["50%"], []);

  return (
    <View className="mx-4 flex-1">
      <ScrollView>
        <Header />
        <Greeting />
        <TodayGoals />
        <Button
          text="Start a workout"
          bgColor="bg-gray-900"
          onPress={() => setIsVisible(!isVisible)}
          icon={<ArrowRightIcon fill="#FCFEFE" width={24} height={24} />}
        >
        </Button>
        <TodayActivities />
        <AddWidget />
      </ScrollView>
      <Button
        text="Plus icon"
        bgColor="bg-gray-900"
        onPress={() => setIsVisible(!isVisible)}
        icon={<PlusIcon fill="#FCFEFE" width={24} height={24} />}
      >

      </Button>
      {isVisible && (
        <BottomSheet
          snapPoints={snapPoints}
          backgroundStyle={{ borderRadius: 50, backgroundColor: "#FCFEFE" }}
          handleIndicatorStyle={{ display: "none" }}
        >
          <View className="mx-4 mt-2 flex-1 items-center ">
            <View className="items-center ">
 
              <Text className="text-2xl mb-4 font-interBold text-gray-900">
                Workouts
              </Text>

              <Link
                href="/trackWorkout"
                asChild
              >
                <Button
                  text="Track workout"
                  bgColor="bg-gray-50 border border-gray-200"
                  // onPress={() => setIsVisible(!isVisible)}
              
                />
              </Link>

              <Link
                href="/workoutHistory"
                asChild
              >
                <Button
                  text="Workout history"
                  bgColor="bg-gray-50 border border-gray-200"
                  // onPress={() => setIsVisible(!isVisible)}
                />

              </Link>

              <Link
                href="/findWorkout"
                asChild
              >
                <Button
                  text="Find a workout"
                  bgColor="bg-gray-50 border border-gray-200"
                  // onPress={() => setIsVisible(!isVisible)}
                />

              </Link>
            </View>
          </View>
        </BottomSheet>
      )
      }

    </View>
  );
};

export default landingpage;
