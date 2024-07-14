import { View, Text, Switch } from "react-native";
import React, { useState } from "react";
import ChevronRightIcon from "@/assets/icons/chevron-right-mini";
import MoonOutlineIcon from "@/assets/icons/moon-outline";
import ArrowsRightLeftOutlineIcon from "@/assets/icons/arrows-right-left-outline";
import StarOutlineIcon from "@/assets/icons/star-outline";
import ArrowPathRoundedSquareOutlineIcon from "@/assets/icons/arrow-path-rounded-square-outline";
import QuestionMarkCircleOutlineIcon from "@/assets/icons/question-mark-circle-outline";

interface Option {
  id: number;
  title: string;
  icon: React.ReactNode;
  value?: string;
  iconInTheEnd?: string;
}

const optionsAccount = [
  {
    id: 1,
    title: "Dark mode",
    icon: <MoonOutlineIcon className="mr-2" />,
    iconInTheEnd: "switch",
  },
  {
    id: 2,
    title: "Integrations",
    icon: <ArrowsRightLeftOutlineIcon className="mr-2" />,
    iconInTheEnd: "chevronRight",
  },
  {
    id: 3,
    title: "Rate & review",
    icon: <StarOutlineIcon className="mr-2" />,
    iconInTheEnd: "chevronRight",
  },
  {
    id: 4,
    title: "Restore purchase",
    icon: <ArrowPathRoundedSquareOutlineIcon className="mr-2" />,
    iconInTheEnd: "chevronRight",
  },
  {
    id: 5,
    title: "Help & support",
    icon: <QuestionMarkCircleOutlineIcon className="mr-2" />,
    iconInTheEnd: "chevronRight",
  },
];

const Account = () => {
  const [isEnabled, setIsEnabled] = useState<boolean>(false);

  const toggleSwitch = () => {
    console.log("Switched");
    setIsEnabled((previousState) => !previousState);
    console.log(isEnabled);
  };

  return (
    <View>
      <Text className="mb-3 font-interSemiBold text-2xl leading-[30px] text-gray-900">
        More
      </Text>
      <View className="rounded-lg border border-gray-200 bg-gray-50">
        {optionsAccount.map((option: Option, index: number) => (
          <View
            key={option.id}
            className={`flex-row py-4 ${index !== optionsAccount.length - 1 ? "mx-4 border-b border-gray-100" : "mx-4"}`}
          >
            <View className="flex-row items-center">
              {option.icon}
              <Text className="font-interMedium text-base leading-[20px] text-gray-900">
                {option.title}
              </Text>
            </View>
            <View className="flex-1 flex-row items-center justify-end">
              {option?.value && (
                <Text className="font-interMedium text-base text-gray-400">
                  {option?.value}
                </Text>
              )}
              {option.iconInTheEnd === "chevronRight" && (
                <ChevronRightIcon fill={"#9CA3AF"} className="ml-3" />
              )}
              {option.iconInTheEnd === "switch" && (
                <Switch
                  value={isEnabled}
                  trackColor={{ false: "#E5E7EB", true: "#111827" }}
                  thumbColor={"#FCFEFE"}
                  ios_backgroundColor="#E5E7EB"
                  onValueChange={toggleSwitch}
                />
              )}
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Account;
