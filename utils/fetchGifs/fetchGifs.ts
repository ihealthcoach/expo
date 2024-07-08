import { Exercise } from "@/types/exercises";
import * as FileSystem from "expo-file-system";

const fetchGifs = async (
  exercises: Exercise[],
): Promise<Record<string, string>> => {
  const gifsToCache: Record<string, string> = {};

  await Promise.all(
    exercises.map(async (exercise) => {
      console.log("fetching " + exercise.id);
      const fileUri = FileSystem.documentDirectory + `${exercise.id}.gif`;
      await FileSystem.downloadAsync(exercise.gif_url, fileUri);
      gifsToCache[exercise.id] = fileUri;
    }),
  );

  return gifsToCache;
};

const fetchGifByExercise = async (exercise: Exercise): Promise<string> => {
  console.log("fetching" + exercise.id);
  const fileUri = FileSystem.documentDirectory + `${exercise.id}.gif`;
  await FileSystem.downloadAsync(exercise.gif_url, fileUri);
  return fileUri;
};

export { fetchGifs, fetchGifByExercise };
