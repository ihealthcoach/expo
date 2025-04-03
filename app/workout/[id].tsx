import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator, Text } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { WorkoutTracker } from '../../components/WorkoutTracker';
import { Workout } from '../../types/database';
import { supabase } from '../../lib/supabase';
import { useWorkouts } from '../../hooks/useWorkouts';

export default function WorkoutScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [workout, setWorkout] = useState<Workout | null>(null);
  const [loading, setLoading] = useState(true);
  const { completeWorkout } = useWorkouts();

  useEffect(() => {
    fetchWorkout();
  }, [id]);

  const fetchWorkout = async () => {
    try {
      const { data, error } = await supabase
        .from('workouts')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      setWorkout(data);
    } catch (error) {
      console.error('Error fetching workout:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleWorkoutComplete = async () => {
    try {
      if (workout) {
        await completeWorkout(workout.id);
        router.back();
      }
    } catch (error) {
      console.error('Error completing workout:', error);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  if (!workout) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Workout not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <WorkoutTracker workout={workout} onComplete={handleWorkoutComplete} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  errorText: {
    fontSize: 18,
    color: '#666',
  },
}); 