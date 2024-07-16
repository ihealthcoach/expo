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
    icon: <LockClosedOutlineIcon className="mr-2" />,
    iconInTheEnd: "chevronRight",
  },
  {
    id: 4,
    title: "Language",
    icon: <GlobeAltOutlineIcon className="mr-2" />,
    value: "English",
    iconInTheEnd: "chevronRight",
  },
  {
    id: 5,
    title: "Notifications",
    icon: <BellOutlineIcon className="mr-2" />,
    iconInTheEnd: "chevronRight",
  },
  {
    id: 6,
    title: "Subscription",
    icon: <CheckBadgeOutlineIcon className="mr-2" />,
    value: "Free",
    iconInTheEnd: "chevronRight",
  },
  {
    id: 7,
    title: "Payment method",
    icon: <CreditCardOutlineIcon className="mr-2" />,
    value: "Credit card",
    iconInTheEnd: "chevronRight",
  },
  {
    id: 8,
    title: "Face ID",
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
      <Card
        title="Using a saved template"
        description="Follow a workout template from your saved workout templates"
      />
      <Card title="Without a template" description="Add exercises as you go" />
      <Card
        title="Using a previous workout"
        description="Use a workout from a previous completed workout"
      />
      <Cancel />
      {/* TODO: Add bottom navigation bar */}
    </View>
  );
};

export default Account;
