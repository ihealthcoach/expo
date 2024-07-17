import { useGetGifByExerciseQuery } from "@/queries/gifQueries/gifQueries";
import { Image } from "expo-image";

type ExerciseGifProps = {
  exerciseId: string;
};
const ExerciseGif = ({ exerciseId }: ExerciseGifProps) => {
  const { data: gif } = useGetGifByExerciseQuery(exerciseId);
  if (!gif) return null;
  return <Image className="mr-2 h-[68px] w-[68px]" source={{ uri: gif }} />;
};

export default ExerciseGif;
