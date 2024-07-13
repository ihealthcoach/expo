export type Workout = {
  id: string; // Unique identifier for the workout
  userId: string; // Foreign key to the User table
  createdAt: Date; // Time when the workout was created
  updatedAt: Date;
  status: string; //TODO: change to enum
};
export type ExerciseDetails = {
  id: string; // Unique identifier for the exercise details
  workoutId: string; // Foreign key to the Workout table
  exerciseId: string; // Foreign key to the Exercise table
  createdAt: Date;
  updatedAt: Date;
};
export type Set = {
  id: string; // Unique identifier for the set
  exerciseDetailsId: string; // Foreign key to the ExerciseDetails table
  weight: number[]; // Weight lifted in the set
  reps: number[]; // Number of repetitions in the set
  createdAt: Date;
  updatedAt: Date;
};
