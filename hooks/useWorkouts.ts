import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { Workout, WorkoutExerciseDetails, WorkoutSet, Exercise } from '../types/database';
import { useAuth } from '../context/AuthContext';

export function useWorkouts() {
  const { user } = useAuth();
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (user) {
      fetchWorkouts();
    }
  }, [user]);

  const fetchWorkouts = async () => {
    try {
      const { data, error } = await supabase
        .from('workouts')
        .select('*')
        .eq('user_id', user?.id)
        .order('created', { ascending: false });

      if (error) throw error;
      setWorkouts(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const createWorkout = async (title: string) => {
    try {
      const { data, error } = await supabase
        .from('workouts')
        .insert([
          {
            user_id: user?.id,
            title,
            status: 'active',
          },
        ])
        .select()
        .single();

      if (error) throw error;
      setWorkouts((prev) => [data, ...prev]);
      return data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      throw err;
    }
  };

  const addExerciseToWorkout = async (workoutId: string, exerciseId: string) => {
    try {
      const { data, error } = await supabase
        .from('workout_exercise_details')
        .insert([
          {
            workout_id: workoutId,
            exercise_id: exerciseId,
          },
        ])
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      throw err;
    }
  };

  const addSetToExercise = async (
    workoutExerciseDetailsId: string,
    weight: number,
    reps: number,
    type: string = 'normal'
  ) => {
    try {
      const { data, error } = await supabase
        .from('workout_sets')
        .insert([
          {
            workout_exercise_details_id: workoutExerciseDetailsId,
            weight,
            reps,
            type,
            completed: false,
          },
        ])
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      throw err;
    }
  };

  const completeWorkout = async (workoutId: string) => {
    try {
      const { error } = await supabase
        .from('workouts')
        .update({ status: 'completed', modified: new Date().toISOString() })
        .eq('id', workoutId);

      if (error) throw error;
      setWorkouts((prev) =>
        prev.map((workout) =>
          workout.id === workoutId
            ? { ...workout, status: 'completed', modified: new Date().toISOString() }
            : workout
        )
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      throw err;
    }
  };

  return {
    workouts,
    loading,
    error,
    createWorkout,
    addExerciseToWorkout,
    addSetToExercise,
    completeWorkout,
    fetchWorkouts,
  };
} 