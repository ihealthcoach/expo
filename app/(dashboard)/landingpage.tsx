import Greeting from "@/components/Greeting";
import Header from "@/components/Header";
import TodayGoals from "@/components/TodayGoals";
import React from "react";
import { ScrollView, View } from "react-native";
import Button from "@/components/Button";
import ArrowRightIcon from "@/assets/icons/arrow-right-mini";
import TodayActivities from "@/components/TodayActivities";
import AddWidget from "@/components/AddWidget";

const landingpage = () => {
  return (
    <View className="mx-4 flex-1">
      <ScrollView>
        <Header />
        <Greeting />
        <TodayGoals />
        <Button
          text="Start a workout"
          bgColor="bg-gray-900"
          onPress={() => console.log("Let's start a workout!")}
          icon={<ArrowRightIcon fill="#FCFEFE" width={24} height={24} />}
        />
        <TodayActivities />
        <AddWidget />
      </ScrollView>
    </View>
  );
};

export default landingpage;
