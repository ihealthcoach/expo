import { supabase } from "@/lib/supabase";
import { Set } from "@/types/exercise-tracking";

export const fetchSets = async () => {
  const { data, error } = await supabase.from("sets").select("*");
  if (error) throw error;
  return data as Set[];
};

export const fetchSetByExercise = async (workoutId: string) => {
  const { data, error } = await supabase
    .from("sets")
    .select("*")
    .eq("workout_exercise_details_id", workoutId);

  if (error) throw error;
  return data as Set[];
};

export const fetchSetById = async (id: string) => {
  const { data, error } = await supabase
    .from("sets")
    .select("*")
    .eq("id", id)
    .single();
  if (error) throw error;
  return data as Set;
};

export const createSet = async (set: Set) => {
  const { data, error } = await supabase.from("sets").insert([set]).single();
  if (error) throw error;
  return data as Set;
};

export const updateSet = async (id: string, updates: Partial<Set>) => {
  const { data, error } = await supabase
    .from("sets")
    .update(updates)
    .eq("id", id);
  if (error) throw error;
  return data as Set;
};

export const deleteSet = async (id: string) => {
  const { data, error } = await supabase
    .from("sets")
    .delete()
    .eq("id", id)
    .single();
  if (error) throw error;
  return data as Set;
};
