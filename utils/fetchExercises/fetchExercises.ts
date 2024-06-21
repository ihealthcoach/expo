import { supabase } from "@/lib/supabase";
import { Exercise, RawExerciseFromSupabase } from "@/types/exercises";

const fetchExercises = async () => {
  const { data, error } = await supabase.from("exercises").select();
  console.log("🚀 ~ fetchExercises: ~ data:", data);
  if (error) {
    console.error("Error fetching exercises:", error);
    return null;
  }
  return processRawExercises(data); //formatted and type-checked data
};
export { fetchExercises };

/**
 *
 * @param exercises - The Raw Exercises from Supabase
 * @returns An updated array of exercises adhering to the Exercise type by changing types from string to array where needed,
 *          and adding the gif_url.
 */
const processRawExercises = (
  exercises: RawExerciseFromSupabase[],
): Exercise[] => {
  const updatedExercises: Exercise[] = exercises.map((exercise) => {
    const primaryMuscles = exercise.primary_muscles
      ? exercise.primary_muscles.split(",")
      : [];
    const secondaryMuscles = exercise.secondary_muscles
      ? exercise.secondary_muscles.split(",")
      : [];
    const equipment = exercise.equipment ? exercise.equipment.split(",") : [];

    const benefits = exercise.benefits ? exercise.benefits.split(",") : [];
    const instructions = exercise.instructions
      ? exercise.instructions.split(",")
      : [];

    // Construct gif_url property
    const gifName = exercise.name.replace(/[\s-]/g, "_");
    const gif_url = `exercises/gifs/${gifName}.gif`;

    return {
      ...exercise,
      primary_muscles: primaryMuscles,
      secondary_muscles: secondaryMuscles,
      benefits: benefits,
      instructions: instructions,
      gif_url: gif_url,
      equipment: equipment,
    };
  });

  return updatedExercises;
};
