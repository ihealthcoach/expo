import { Workout } from "@/types/exercise-tracking";
import { supabase } from "../../../lib/supabase";

export const fetchWorkouts = async () => {
  const { data, error } = await supabase.from("workouts").select("*");
  if (error) throw error;
  return data as Workout[];
};

export const fetchWorkoutById = async (id: string) => {
  const { data, error } = await supabase
    .from("workouts")
    .select("*")
    .eq("id", id)
    .single();
  if (error) throw error;
  return data as Workout;
};

export const createWorkout = async (workout: Workout) => {
  const { data, error } = await supabase
    .from("workouts")
    .insert([workout])
    .single();
  if (error) throw error;
  return data as Workout;
};

export const updateWorkout = async (id: string, updates: Partial<Workout>) => {
  const { data, error } = await supabase
    .from("workouts")
    .update(updates)
    .eq("id", id)
    .single();
  if (error) throw error;
  return data as Workout;
};

export const deleteWorkout = async (id: string) => {
  const { data, error } = await supabase
    .from("workouts")
    .delete()
    .eq("id", id)
    .single();
  if (error) throw error;
  return data as Workout;
};
