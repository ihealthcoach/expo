import { Workout } from "@/types/exercise-tracking";
import { supabase } from "../../../lib/supabase";

// Function to validate and convert raw data to Workout type
const validateWorkout = (data: any): Workout | null => {
  if (
    typeof data === "object" &&
    data !== null &&
    typeof data.id === "string" &&
    typeof data.user_id === "string" &&
    typeof data.status === "string"
  ) {
    return {
      id: data.id,
      user_id: data.user_id,
      created_at: new Date(data.created_at),
      updated_at: new Date(data.updated_at),
      status: data.status,
    };
  }
  return null;
};

// Fetch all workouts
export const fetchWorkouts = async (): Promise<Workout[]> => {
  const { data, error } = await supabase.from("workouts").select("*");
  if (error) throw error;
  return (data as any[])
    .map(validateWorkout)
    .filter((workout): workout is Workout => workout !== null);
};

// Fetch a workout by ID
export const fetchWorkoutById = async (id: string): Promise<Workout | null> => {
  const { data, error } = await supabase
    .from("workouts")
    .select("*")
    .eq("id", id)
    .single();
  if (error) throw error;
  return validateWorkout(data);
};

// Create a new workout
export const createWorkout = async (
  workout: Workout,
): Promise<Workout | null> => {
  const { data, error } = await supabase
    .from("workouts")
    .insert([workout])
    .single();
  if (error) throw error;
  return validateWorkout(data);
};

// Update an existing workout
export const updateWorkout = async (
  id: string,
  updates: Partial<Workout>,
): Promise<Workout | null> => {
  const { data, error } = await supabase
    .from("workouts")
    .update(updates)
    .eq("id", id)
    .single();
  if (error) throw error;
  return validateWorkout(data);
};

// Delete a workout by ID
export const deleteWorkout = async (id: string): Promise<Workout | null> => {
  const { data, error } = await supabase
    .from("workouts")
    .delete()
    .eq("id", id)
    .single();
  if (error) throw error;
  return validateWorkout(data);
};
