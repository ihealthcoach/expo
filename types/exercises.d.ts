export interface Exercise {
  id: number;
  name: string;
  sets_completed: number;
  total_sets: number;
  status: string;
  gif_path: string;
}

export interface ExerciseStore {
  exercises: Exercise[];
  setExercises: (exercises: Exercise[]) => void;
  deleteExercise: (id: number) => void;
}
