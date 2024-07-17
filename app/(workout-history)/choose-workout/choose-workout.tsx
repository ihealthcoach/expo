import { View } from "react-native";
import Card from "./components/card/Card";
import Cancel from "./components/cancel/Cancel";

const ChooseWorkout = () => {
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

export default ChooseWorkout;
