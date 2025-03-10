import { create } from "zustand";

interface Set {
  id: number;
  set_number: number;
  type: string;
  weight: number;
  weight_unit: string;
  reps: number;
  completed: boolean;
}

export interface Exercise {
  id: number;
  name: string;
  sets_completed: number;
  total_sets: number;
  status: string;
  gif_path: string;
}

interface ExerciseTrackingStore {
  // sets: Set[];
  exercises: Exercise[];
  // setSets: (sets: Set[]) => void;
  // addSet: (newSet: Set) => void;
  // deleteSet: (set_number: number) => void;
  // updateSetCompletion: (set_number: number, completed: boolean) => void;
  setExercises: (exercises: Exercise[]) => void;
  deleteExercise: (id: number) => void;
}

const useExerciseStore = create<ExerciseTrackingStore>((set) => ({
  exercises: [
    {
      id: 1,
      name: "Arnold press",
      sets_completed: 3,
      total_sets: 5,
      status: "Completed",
      gif_path:
        "https://olqyqpzmvfzjxnozlthv.supabase.co/storage/v1/object/public/gifs/dumbbell_arnold_press.gif",
    },
    {
      id: 2,
      name: "Assisted dips",
      sets_completed: 0,
      total_sets: 5,
      status: "Completed",
      gif_path:
        "https://olqyqpzmvfzjxnozlthv.supabase.co/storage/v1/object/public/gifs/assisted_triceps_dip_(kneeling)_no_bg.gif",
    },
    {
      id: 3,
      name: "Behind neck lat pulldowns",
      sets_completed: 0,
      total_sets: 5,
      status: "Pending",
      gif_path:
        "https://olqyqpzmvfzjxnozlthv.supabase.co/storage/v1/object/public/gifs/cable_wide_grip_rear_pulldown_behind_neck_no_bg.gif",
    },
    {
      id: 4,
      name: "Arnold press",
      sets_completed: 0,
      total_sets: 5,
      status: "Pending",
      gif_path:
        "https://olqyqpzmvfzjxnozlthv.supabase.co/storage/v1/object/public/gifs/dumbbell_arnold_press.gif",
    },
    {
      id: 5,
      name: "Calf raise",
      sets_completed: 0,
      total_sets: 5,
      status: "Pending",
      gif_path:
        "https://olqyqpzmvfzjxnozlthv.supabase.co/storage/v1/object/public/gifs/bodyweight_standing_calf_raise_no_bg.gif",
    },
  ] as any[],
  setExercises: (exercises: any[]) => set({ exercises }),
  deleteExercise: (id: number) =>
    set((state) => ({
      exercises: state.exercises.filter((exercise) => exercise.id !== id),
    })),
}));

export default useExerciseStore;
