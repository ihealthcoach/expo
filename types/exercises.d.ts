export interface Exercise {
  exercise_type: string;
  experience: string;
  force_type: string;
  mechanics: string;
  name: string;
  primary_muscles: string[];
  secondary_muscles: string[];
  instructions: string[];
  experience_level: string;
  muscle_group: string;
  description: string;
  benefits: string[];
  equipment: string[];
  gif_url: string;
  id: string;
}

export interface ExerciseSummary {
  id: string;
  name: string;
  gif_url: string;
  primary_muscles: string[];
}

export interface RawExerciseFromSupabase {
  exercise_type: string;
  experience: string;
  force_type: string;
  mechanics: string;
  name: string;
  primary_muscles: string;
  secondary_muscles: string;
  instructions: string;
  experience_level: string;
  muscle_group: string;
  description: string;
  benefits: string;
  equipment: string;
  gif_url: string;
  id: string;
}
