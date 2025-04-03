export type Profile = {
  id: string;
  user_id: string;
  first_name: string;
  last_name: string;
  avatar_url: string | null;
  gender: string;
  main_goal: string;
  workout_days: number[];
  level: string;
  weight: number;
  height: number;
  age: number;
  body_type: string;
  created_at: string;
  updated_at: string;
};

export type Exercise = {
  id: string;
  name: string;
  exercise_type: string;
  primary_muscles: string;
  secondary_muscles: string;
  instructions: string;
  experience_level: string;
  muscle_group: string;
  description: string;
  benefits: string;
  equipment: string;
  force_type: string;
  mechanics: string;
  body_part: string;
  target: string;
  experience: string;
  gif_url: string;
};

export type Workout = {
  id: string;
  user_id: string;
  title: string;
  status: 'active' | 'completed';
  created: string;
  modified: string;
};

export type WorkoutExerciseDetails = {
  id: string;
  workout_id: string;
  exercise_id: string;
  created_at: string;
  updated_at: string;
};

export type WorkoutSet = {
  id: string;
  workout_exercise_details_id: string;
  weight: number;
  type: string;
  reps: number;
  completed: boolean;
  created_at: string;
  updated_at: string;
};

export type WorkoutTemplate = {
  id: string;
  name: string;
  exercise_count: number;
  intensity: string;
  user_id: string;
  created_at: string;
}; 