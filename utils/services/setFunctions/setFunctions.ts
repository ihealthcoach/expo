import { supabase } from "@/lib/supabase";
import { Set } from "@/types/exercise-tracking";

// Function to validate and convert raw data to Set type
const validateSet = (data: any): Set | null => {
  if (
    typeof data === "object" &&
    data !== null &&
    typeof data.id === "string" &&
    typeof data.exercise_details_id === "string" &&
    Array.isArray(data.weight) &&
    typeof data.type === "string" &&
    Array.isArray(data.reps) &&
    data.created_at instanceof Date &&
    data.updated_at instanceof Date
  ) {
    return {
      id: data.id,
      exercise_details_id: data.exercise_details_id,
      weight: data.weight,
      type: data.type,
      reps: data.reps,
      created_at: new Date(data.created_at),
      updated_at: new Date(data.updated_at),
    };
  }
  return null;
};

// Fetch all sets
export const fetchSets = async (): Promise<Set[]> => {
  const { data, error } = await supabase.from("sets").select("*");
  if (error) throw error;
  return (data as any[])
    .map(validateSet)
    .filter((set): set is Set => set !== null);
};

// Fetch sets by exercise
export const fetchSetByExercise = async (workoutId: string): Promise<Set[]> => {
  const { data, error } = await supabase
    .from("sets")
    .select("*")
    .eq("workout_exercise_details_id", workoutId);

  if (error) throw error;
  return (data as any[])
    .map(validateSet)
    .filter((set): set is Set => set !== null);
};

// Fetch a set by ID
export const fetchSetById = async (id: string): Promise<Set | null> => {
  const { data, error } = await supabase
    .from("sets")
    .select("*")
    .eq("id", id)
    .single();
  if (error) throw error;
  return validateSet(data);
};

// Create a new set
export const createSet = async (set: Set): Promise<Set | null> => {
  const { data, error } = await supabase.from("sets").insert([set]).single();
  if (error) throw error;
  return validateSet(data);
};

// Update an existing set
export const updateSet = async (
  id: string,
  updates: Partial<Set>,
): Promise<Set | null> => {
  const { data, error } = await supabase
    .from("sets")
    .update(updates)
    .eq("id", id);
  if (error) throw error;
  return validateSet(data);
};

// Delete a set by ID
export const deleteSet = async (id: string): Promise<Set | null> => {
  const { data, error } = await supabase
    .from("sets")
    .delete()
    .eq("id", id)
    .single();
  if (error) throw error;
  return validateSet(data);
};
