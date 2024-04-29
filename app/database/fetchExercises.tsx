import { supabase } from "@/lib/supabase";


async function fetchExercises() {
    // const { data, error } = await supabase.rpc('get_all_tables');
    const { data, error } = await supabase
    .from('exercises')
    .select('*')
    .limit(2);

      //Russian Twist
    if (error) {
      console.error('Error fetching exercises:', error);
      return;
    }
    console.log('data:', data);
    return data;
  }

export default fetchExercises;

// expample of how to use data from fetchExercises in another file

// const [exercises, setExercises] = useState([]);
// useEffect(() => {
//     setExercises(fetchExercises());
//   }, []);

// {exercises.map((exercise, index) => (
//     <Text key={index}>{exercise.name}</Text> 
//   ))}