import { Exercise } from "@/types/exercises";

const organizeExercisesAlphabetically = (exercises: Exercise[]) => {
  const organized = {}; //alphabetically under every present alphabet

  exercises.forEach((exercise) => {
    const firstLetter = exercise.name.match(/[A-Za-z]/)?.[0].toUpperCase(); //to ignore leading numbers

    if (!organized[firstLetter]) {
      organized[firstLetter] = [];
    }

    // Push the exercise into the corresponding letter array
    organized[firstLetter].push(exercise);
  });

  const sortedKeys = Object.keys(organized).sort();

  // Sort exercises within each category by name
  sortedKeys.forEach((key) => {
    organized[key].sort((a, b) => a.name.localeCompare(b.name));
  });

  // Return organized object with sorted keys and exercises
  return sortedKeys.reduce((acc, key) => {
    acc[key] = organized[key];
    return acc;
  }, {});
};

export { organizeExercisesAlphabetically };
