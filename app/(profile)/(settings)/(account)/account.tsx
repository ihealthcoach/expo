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

interface Option {
  id: number;
  title: string;
  path?: string;
  icon: React.ReactNode;
  value?: string;
  iconInTheEnd?: string;
}

const optionsAccount = [
  {
    id: 1,
    title: "Profile",
    path: "/(profile)/account",
    icon: <UserIcon className="mr-2" />,
    iconInTheEnd: "chevronRight",
  },
  {
    id: 2,
    title: "Questionnaire",
    path: "/(profile)/questionnaire",
    icon: <ClipboardDocumentListOutline className="mr-2" />,
    iconInTheEnd: "chevronRight",
  },
  {
    id: 3,
    title: "Password",
    path: "/(profile)/account",
    icon: <LockClosedOutlineIcon className="mr-2" />,
    iconInTheEnd: "chevronRight",
  },
  {
    id: 4,
    title: "Language",
    path: "/(profile)/account",
    icon: <GlobeAltOutlineIcon className="mr-2" />,
    value: "English",
    iconInTheEnd: "chevronRight",
  },
  {
    id: 5,
    title: "Notifications",
    path: "/(profile)/account",
    icon: <BellOutlineIcon className="mr-2" />,
    iconInTheEnd: "chevronRight",
  },
  {
    id: 6,
    title: "Subscription",
    path: "/(profile)/account",
    icon: <CheckBadgeOutlineIcon className="mr-2" />,
    value: "Free",
    iconInTheEnd: "chevronRight",
  },
  {
    id: 7,
    title: "Payment method",
    path: "/(profile)/account",
    icon: <CreditCardOutlineIcon className="mr-2" />,
    value: "Credit card",
    iconInTheEnd: "chevronRight",
  },
  {
    id: 8,
    title: "Face ID",
    path: "/(profile)/account",
    icon: <FaceIdIcon className="mr-2" />,
    iconInTheEnd: "switch",
  },
];

const Account = () => {
  const [isEnabled, setIsEnabled] = useState<boolean>(false);

  const router = useRouter();

  const toggleSwitch = () => {
    console.log("Switched");
    setIsEnabled((previousState) => !previousState);
    console.log(isEnabled);
  };

  return (
    <View>
      <Text className="mb-3 font-interSemiBold text-2xl leading-[30px] text-gray-900">
        Account
      </Text>
      <View className="rounded-lg border border-gray-200 bg-gray-50">
        {optionsAccount.map((option: Option, index: number) => (
          <View
            key={option.id}
            className={`flex-row py-4 ${index !== optionsAccount.length - 1 ? "mx-4 border-b border-gray-100" : "mx-4"}`}
          >
            <Pressable
              onPress={() => router.push(option.path)}
              className="w-3/4 flex-row items-center"
            >
              {option.icon}
              <Text className="font-interMedium text-base leading-[20px] text-gray-900">
                {option.title}
              </Text>
            </Pressable>
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
      {/* TODO: Add bottom navigation bar */}
    </View>
  );
};

export default Account;
