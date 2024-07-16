import { useState } from "react";
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
import Button from "../Button/Button";
import ChevronDownIcon from "@/assets/icons/chevron-down-mini";

type CustomKeyboardViewProps = {
  isInputVisible: boolean;
  handleSubmit: () => void;
  weightInputRef: React.MutableRefObject<TextInput>;
  repsInputRef: React.MutableRefObject<TextInput>;
  setInputVisible: (value: boolean) => void;
  weightInputValue: string;
  repsInputValue: string;
  setWeightInputValue: React.Dispatch<React.SetStateAction<string>>;
  setRepsInputValue: React.Dispatch<React.SetStateAction<string>>;
};

export const CustomKeyboardView = ({
  isInputVisible,
  handleSubmit,
  weightInputRef,
  repsInputRef,
  setInputVisible,
  weightInputValue,
  repsInputValue,
  setWeightInputValue,
  setRepsInputValue,
}: CustomKeyboardViewProps) => {
  const [keyboardHeight, setKeyboardHeight] = useState<number>(0);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      {isInputVisible && Platform.OS === "ios" && (
        <InputAccessoryView>
          <View className=" bg-gray-50 p-4 pb-9">
            <View className="w-full flex-row items-center justify-between pb-10">
              <View className="flex-row items-center">
                <Text className="font-interMedium text-sm text-gray-900">
                  Standard set
                </Text>
                <ChevronDownIcon />
              </View>
              <View className="flex-row items-center gap-2">
                <View className="relative">
                  <TextInput
                    className="flex items-center justify-center rounded-md border border-gray-300 px-4 py-3 font-interSemiBold text-xl text-black-ih"
                    ref={weightInputRef}
                    value={weightInputValue}
                    onChangeText={setWeightInputValue}
                    placeholder="Kg"
                    onSubmitEditing={() => setInputVisible(false)}
                    keyboardType="decimal-pad"
                  />
                  <View className="pointer-events-none absolute -bottom-6 flex w-full items-center">
                    <Text className="font-interRegular text-sm text-gray-900">
                      kg
                    </Text>
                  </View>
                </View>
                <Text className="font-interSemiBold text-sm text-gray-900">
                  x
                </Text>
                <View className="relative">
                  <TextInput
                    className="flex items-center justify-center rounded-md border border-gray-300 px-4 py-3 font-interSemiBold text-xl text-black-ih"
                    ref={repsInputRef}
                    value={repsInputValue}
                    onChangeText={setRepsInputValue}
                    placeholder="Reps"
                    onSubmitEditing={() => setInputVisible(false)}
                    keyboardType="number-pad"
                  />
                  <View className="pointer-events-none absolute -bottom-6 flex w-full items-center">
                    <Text className="font-interRegular text-sm text-gray-900">
                      reps
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <Button
              text="Save set"
              bgColor="bg-indigo-600"
              onPress={handleSubmit}
            />
          </View>
        </InputAccessoryView>
      )}
      {isInputVisible && Platform.OS === "android" && (
        <View
          style={{
            // position: "absolute",
            // bottom: -400,
            // // bottom: keyboardHeight,
            // left: 0,
            // right: 0,
            backgroundColor: "#f8f8f8",
            padding: 16,
          }}
        >
          <View className="w-full flex-row items-center justify-between pb-10">
            <View className="flex-row items-center">
              <Text className="font-interMedium text-sm text-gray-900">
                Standard set
              </Text>
              <ChevronDownIcon />
            </View>
            <View className="flex-row items-center gap-2">
              <View className="relative">
                <TextInput
                  className="flex items-center justify-center rounded-md border border-gray-300 px-4 py-3 font-interSemiBold text-xl text-black-ih"
                  ref={weightInputRef}
                  value={weightInputValue}
                  onChangeText={setWeightInputValue}
                  placeholder="Kg"
                  onSubmitEditing={() => setInputVisible(false)}
                  keyboardType="decimal-pad"
                />
                <View className="pointer-events-none absolute -bottom-6 flex w-full items-center">
                  <Text className="font-interRegular text-sm text-gray-900">
                    kg
                  </Text>
                </View>
              </View>
              <Text className="font-interSemiBold text-sm text-gray-900">
                x
              </Text>
              <View className="relative">
                <TextInput
                  className="flex items-center justify-center rounded-md border border-gray-300 px-4 py-3 font-interSemiBold text-xl text-black-ih"
                  ref={repsInputRef}
                  value={repsInputValue}
                  onChangeText={setRepsInputValue}
                  placeholder="Reps"
                  onSubmitEditing={() => setInputVisible(false)}
                  keyboardType="number-pad"
                />
                <View className="pointer-events-none absolute -bottom-6 flex w-full items-center">
                  <Text className="font-interRegular text-sm text-gray-900">
                    reps
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <Button
            text="Save set"
            bgColor="bg-indigo-600"
            onPress={handleSubmit}
          />
        </View>
      )}
    </KeyboardAvoidingView>
  );
};
