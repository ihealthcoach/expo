import { Exercise } from "@/types/exercises";
import * as FileSystem from "expo-file-system";

const fetchGifs = async (
  exercises: Exercise[],
): Promise<Record<string, string>> => {
  const gifsToCache: Record<string, string> = {};

  await Promise.all(
    exercises.map(async (exercise) => {
      const fileUri = FileSystem.documentDirectory + `${exercise.id}.gif`;
      const response = await FileSystem.downloadAsync(
        exercise.gif_url,
        fileUri,
      );
      if (response.status === 200) gifsToCache[exercise.id] = fileUri;
    }),
  );

  return gifsToCache;
};

const fetchGifByExercise = async (exercise: Exercise): Promise<string> => {
  const fileUri = FileSystem.documentDirectory + `${exercise.id}.gif`;
  await FileSystem.downloadAsync(exercise.gif_url, fileUri);
  return fileUri;
};

export { fetchGifs, fetchGifByExercise };
