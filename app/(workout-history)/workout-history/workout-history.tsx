import { View, Text, Switch, Pressable } from "react-native";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import UserIcon from "@/assets/icons/user-outline";
import ChevronRightIcon from "@/assets/icons/chevron-right-mini";
import ClipboardDocumentListOutline from "@/assets/icons/clipboard-document-list-outline";
import LockClosedOutlineIcon from "@/assets/icons/lock-closed-outline";
import GlobeAltOutlineIcon from "@/assets/icons/globe-alt-outline";
import BellOutlineIcon from "@/assets/icons/bell-outline";
import CheckBadgeOutlineIcon from "@/assets/icons/check-badge-outline";
import CreditCardOutlineIcon from "@/assets/icons/credit-card-outline";
import FaceIdIcon from "@/assets/icons/faceid";
import Card from "./components/card/Card";
import Cancel from "./components/cancel/Cancel";
import BadgesWithHorizontalScroll from "@/components/BadgesWithHorizontalScroll/BadgesWithHorizontalScroll";
import Badge from "@/components/Badge/Badge";
import Bars3BottomLeftIcon from "@/assets/icons/bars-3-bottom-left";
import BarsArrowDownIcon from "@/assets/icons/bars-arrow-down-outline";
import HeartIcon from "@/assets/icons/heart-outline";
import CalendarDaysOutlineIcon from "@/assets/icons/calendar-days-outline/calendar-days-outline";
import StarOutlineIcon from "@/assets/icons/star-outline";

interface Workout {
  id: number;
  workout_name: string;
  date: string;
  time: string;
  duration: string;
  weight_lifted: number;
  cardio: string;
  rating: string;
}

const workouts1: Workout[] = [
  {
    id: 1,
    workout_name: "Custom workout name #1",
    date: "May 28, 2023",
    time: "08.20 - 09.30",
    duration: "1h 10m",
    weight_lifted: 7.9,
    cardio: "24m",
    rating: "7/10",
  },
  {
    id: 2,
    workout_name: "Custom workout name #1",
    date: "May 28, 2023",
    time: "08.20 - 09.30",
    duration: "1h 10m",
    weight_lifted: 7.9,
    cardio: "24m",
    rating: "7/10",
  },
  {
    id: 3,
    workout_name: "Custom workout name #2",
    date: "May 27, 2023",
    time: "07.53 - 08.49",
    duration: "56m",
    weight_lifted: 12.818,
    cardio: "24m",
    rating: "5/10",
  },
  {
    id: 4,
    workout_name: "May 26, 2023",
    date: "May 26, 2023",
    time: "05.33 - 06.56",
    duration: "1h 23m",
    weight_lifted: 6.347,
    cardio: "24m",
    rating: "10/10",
  },
  {
    id: 5,
    workout_name: "May 25, 2023",
    date: "May 25, 2023",
    time: "05.42 - 06.47",
    duration: "1h 05m",
    weight_lifted: 10.165,
    cardio: "24m",
    rating: "7/10",
  },
];

const WorkoutHistory = () => {
  // const [isEnabled, setIsEnabled] = useState<boolean>(false);

  // const router = useRouter();

  // const toggleSwitch = () => {
  //   console.log("Switched");
  //   setIsEnabled((previousState) => !previousState);
  //   console.log(isEnabled);
  // };

  const handleOpenPanel = () => {
    console.log("Open panel");
  };

  return (
    <View className="relative">
      <View className="mb-6">
        <BadgesWithHorizontalScroll>
          {/* <Badge isDark iconBefore={<BarsArrowDownIcon />} text="A-Z" /> */}
          <Badge isDark text="Show all" />
          <Badge
            isWhite
            // iconBefore={<HeartIcon stroke={"#4B5563"} />}
            iconBefore={<BarsArrowDownIcon stroke={"#4B5563"} />}
            text="A-Z"
          />
          <Badge
            isWhite
            iconBefore={<HeartIcon stroke={"#4B5563"} />}
            text="Favorite"
          />
          <Badge
            isWhite
            iconBefore={<CalendarDaysOutlineIcon stroke={"#4B5563"} />}
            text="Date"
          />
          <Badge
            isWhite
            iconBefore={<StarOutlineIcon stroke={"#4B5563"} />}
            text="Rating"
          />
        </BadgesWithHorizontalScroll>
      </View>
      <View className="mb-6">
        <View>
          {/* TODO: Render dynamically */}
          <Text className="mb-2 font-interSemiBold text-2xl leading-[30px] text-gray-900">
            Week 22
          </Text>
        </View>
        {workouts1.map((workout) => (
          <Pressable key={workout.id}>
            <Card
              title={workout.workout_name}
              date={workout.date}
              time={workout.time}
              duration={workout.duration}
              weight_lifted={workout.weight_lifted}
              cardio={workout.cardio}
              rating={workout.rating}
            />
          </Pressable>
        ))}
      </View>
      {/* TODO: Render dynamically */}
      <View className="mb-24">
        <Text className="mb-2 font-interSemiBold text-2xl leading-[30px] text-gray-900">
          Week 21
        </Text>
        {workouts1.map((workout) => (
          <Pressable key={workout.id}>
            <Card
              title={workout.workout_name}
              date={workout.date}
              time={workout.time}
              duration={workout.duration}
              weight_lifted={workout.weight_lifted}
              cardio={workout.cardio}
              rating={workout.rating}
            />
          </Pressable>
        ))}
      </View>
      {/* TODO: Add bottom navigation bar */}
    </View>
  );
};

export default WorkoutHistory;
