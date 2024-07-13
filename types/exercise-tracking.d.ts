export type Workout = {
  id: string; // Unique identifier for the workout
  user_id: string; // Foreign key to the User table
  created_at: Date;
  updated_at: Date;
  status: string; // TODO: change to enum
};

export type ExerciseDetails = {
  id: string; // Unique identifier for the exercise details
  workout_id: string; // Foreign key to the Workout table
  exercise_id: string; // Foreign key to the Exercise table
  created_at: Date;
  updated_at: Date;
};

export type Set = {
  id: string; // Unique identifier for the set
  exercise_details_id: string; // Foreign key to the ExerciseDetails table
  weight: number[]; // Weight lifted in the set
  type: string; // TODO: change to enum
  reps: number[]; // Number of repetitions in the set
  created_at: Date;
  updated_at: Date;
};
