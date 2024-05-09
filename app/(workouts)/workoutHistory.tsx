import React from 'react';
import { View, Text, FlatList } from 'react-native';


const WorkoutHistoryScreen = () => {
  const exercises = [
    { id: '1', name: 'Push-ups' },
    { id: '2', name: 'Squats' },
    { id: '3', name: 'Lunges' },
    { id: '4', name: 'Sit-ups' },
    // Add more exercises as needed
  ];
  

  const renderItem = ({ item }) => (
    <View className='p-2'>
      <Text className='text-lg'>{item.name}</Text>
    </View>
  );

  return (
    <View className='p-5'>
      <Text className='text-2xl font-bold text-center mb-4'>Workout Library</Text>
      <FlatList
        data={exercises}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default WorkoutHistoryScreen;