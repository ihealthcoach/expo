import { supabase } from "@/lib/supabase";
import { Exercise, RawExerciseFromSupabase } from "@/types/exercises";

const fetchExercises = async () => {
  console.log("in the fetchExercies function");
  const { data, error } = await supabase.from("exercises").select().limit(5);
  if (error) {
    console.error("Error fetching exercises:", error);
    return null;
  }
  const processedExercises = data.map((exercise) =>
    processRawExercise(exercise),
  ); //formatted and type-checked data
  return processedExercises;
};

const fetchExerciseById = async (exerciseId: string) => {
  console.log("Fetching exercise with ID:", exerciseId);
  const { data, error } = await supabase
    .from("exercises")
    .select("*")
    .eq("id", exerciseId)
    .single(); // Ensure only one result is returned

  if (error) {
    console.error("Error fetching exercise by ID:", error);
    return null;
  }

  return processRawExercise(data); // Process and return the formatted data
};
export { fetchExercises, fetchExerciseById };

/**
 *
 * @param exercises - The Raw Exercises from Supabase
 * @returns An updated array of exercises adhering to the Exercise type by changing types from string to array where needed,
 *          and adding the gif_url.
 */
const processRawExercise = (exercise: RawExerciseFromSupabase): Exercise => {
  const primaryMuscles = exercise.primary_muscles
    ? exercise.primary_muscles.split(",")
    : [];
  const secondaryMuscles = exercise.secondary_muscles
    ? exercise.secondary_muscles.split(",")
    : [];
  const equipment = exercise.equipment ? exercise.equipment.split(",") : [];

  const benefits = exercise.benefits ? splitWithDot(exercise.benefits) : [];
  const instructions = exercise.instructions
    ? splitWithDot(exercise.instructions)
    : [];

  // Construct gif_url property
  const gifName = exercise.name.replace(/[\s-]/g, "_");
  const gif_url = `https://fleiivpyjkvahakriuta.supabase.co/storage/v1/object/public/exercises/gifs/${gifName}.gif`;

  return {
    ...exercise,
    primary_muscles: primaryMuscles,
    secondary_muscles: secondaryMuscles,
    benefits: benefits,
    instructions: instructions,
    gif_url: gif_url,
    equipment: equipment,
  };
};

export default processRawExercise;

const splitWithDot = (text: string) => {
  // Match any character except dot, followed by a dot.
  const regex = /[^.]+\.|.+$/g;
  return text.match(regex) || [];
};
