import { supabase } from "@/lib/supabase";
import { ExerciseDetails } from "@/types/exercise-tracking";

// Function to validate and convert raw data to ExerciseDetails type
const validateExerciseDetails = (data: any): ExerciseDetails | null => {
  if (
    typeof data === "object" &&
    data !== null &&
    typeof data.id === "string" &&
    typeof data.workout_id === "string" &&
    typeof data.exercise_id === "string"
  ) {
    return {
      id: data.id,
      workout_id: data.workout_id,
      exercise_id: data.exercise_id,
      created_at: new Date(data.created_at),
      updated_at: new Date(data.updated_at),
    };
  }
  return null;
};

// Fetch all exercise details
export const fetchExerciseDetails = async (): Promise<ExerciseDetails[]> => {
  const { data, error } = await supabase
    .from("workout_exercise_details")
    .select("*");
  if (error) throw error;
  return (data as any[])
    .map(validateExerciseDetails)
    .filter((detail): detail is ExerciseDetails => detail !== null);
};

// Fetch exercise details by workout ID
export const fetchExercisesByWorkout = async (
  workoutId: string,
): Promise<ExerciseDetails[]> => {
  const { data, error } = await supabase
    .from("workout_exercise_details")
    .select("*")
    .eq("workout_id", workoutId);

  if (error) throw error;
  return (data as any[])
    .map(validateExerciseDetails)
    .filter((detail): detail is ExerciseDetails => detail !== null);
};

// Fetch exercise detail by ID
export const fetchExerciseDetailById = async (
  id: string,
): Promise<ExerciseDetails | null> => {
  const { data, error } = await supabase
    .from("workout_exercise_details")
    .select("*")
    .eq("id", id)
    .single();
  if (error) throw error;
  console.log(validateExerciseDetails(data));
  return validateExerciseDetails(data);
};

// Create a new exercise detail
export const createExerciseDetail = async (
  exerciseDetail: ExerciseDetails,
): Promise<ExerciseDetails | null> => {
  const { data, error } = await supabase
    .from("workout_exercise_details")
    .insert([exerciseDetail])
    .single();
  if (error) throw error;
  return validateExerciseDetails(data);
};

// Update an existing exercise detail
export const updateExerciseDetail = async (
  id: string,
  updates: Partial<ExerciseDetails>,
): Promise<ExerciseDetails | null> => {
  const { data, error } = await supabase
    .from("workout_exercise_details")
    .update(updates)
    .eq("id", id)
    .single();
  if (error) throw error;
  return validateExerciseDetails(data);
};

// Delete an exercise detail by ID
export const deleteExerciseDetail = async (
  id: string,
): Promise<ExerciseDetails | null> => {
  const { data, error } = await supabase
    .from("workout_exercise_details")
    .delete()
    .eq("id", id)
    .single();
  if (error) throw error;
  return validateExerciseDetails(data);
};
