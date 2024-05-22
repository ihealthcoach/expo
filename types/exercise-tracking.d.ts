export interface Set {
  id: number;
  set_number: number;
  type: string;
  weight: number;
  weight_unit: string;
  reps: number;
  completed: boolean;
}

export interface ExerciseTrackingStore {
  sets: Set[];
  setSets: (sets: Set[]) => void;
  addSet: (newSet: Set) => void;
  deleteSet: (set_number: number) => void;
  updateSetCompletion: (set_number: number, completed: boolean) => void;
}
