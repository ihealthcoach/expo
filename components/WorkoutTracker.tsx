import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  Modal,
} from 'react-native';
import { useWorkouts } from '../hooks/useWorkouts';
import { Workout, Exercise } from '../types/database';
import { supabase } from '../lib/supabase';
import { SetInput } from './SetInput';

type WorkoutTrackerProps = {
  workout: Workout;
  onComplete: () => void;
};

export function WorkoutTracker({ workout, onComplete }: WorkoutTrackerProps) {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const [restTimer, setRestTimer] = useState<number | null>(null);
  const [showSetInput, setShowSetInput] = useState(false);
  const { addSetToExercise } = useWorkouts();

  useEffect(() => {
    fetchExercises();
  }, [workout.id]);

  const fetchExercises = async () => {
    try {
      const { data: exerciseDetails, error } = await supabase
        .from('workout_exercise_details')
        .select('exercise_id')
        .eq('workout_id', workout.id);

      if (error) throw error;

      const exerciseIds = exerciseDetails.map((detail) => detail.exercise_id);
      const { data: exercises, error: exercisesError } = await supabase
        .from('exercises')
        .select('*')
        .in('id', exerciseIds);

      if (exercisesError) throw exercisesError;
      setExercises(exercises || []);
    } catch (error) {
      Alert.alert('Error', 'Failed to fetch exercises');
    }
  };

  const handleSetComplete = async (weight: number, reps: number) => {
    try {
      const currentExercise = exercises[currentExerciseIndex];
      if (!currentExercise) return;

      const { data: exerciseDetail } = await supabase
        .from('workout_exercise_details')
        .select('id')
        .eq('workout_id', workout.id)
        .eq('exercise_id', currentExercise.id)
        .single();

      if (!exerciseDetail) return;

      await addSetToExercise(exerciseDetail.id, weight, reps);
      setCurrentSetIndex((prev) => prev + 1);
      setShowSetInput(false);

      // Start rest timer
      setRestTimer(60); // 60 seconds rest
      const timer = setInterval(() => {
        setRestTimer((prev) => {
          if (prev === null || prev <= 1) {
            clearInterval(timer);
            return null;
          }
          return prev - 1;
        });
      }, 1000);
    } catch (error) {
      Alert.alert('Error', 'Failed to save set');
    }
  };

  const handleNextExercise = () => {
    if (currentExerciseIndex < exercises.length - 1) {
      setCurrentExerciseIndex((prev) => prev + 1);
      setCurrentSetIndex(0);
    } else {
      onComplete();
    }
  };

  const currentExercise = exercises[currentExerciseIndex];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{workout.title}</Text>
      
      {currentExercise ? (
        <View style={styles.exerciseContainer}>
          <Text style={styles.exerciseName}>{currentExercise.name}</Text>
          <Text style={styles.exerciseDetails}>
            {currentExercise.muscle_group} • {currentExercise.equipment}
          </Text>

          <View style={styles.setContainer}>
            <Text style={styles.setTitle}>Set {currentSetIndex + 1}</Text>
            <TouchableOpacity
              style={styles.completeButton}
              onPress={() => setShowSetInput(true)}
            >
              <Text style={styles.completeButtonText}>Complete Set</Text>
            </TouchableOpacity>
          </View>

          {restTimer !== null && (
            <View style={styles.restTimer}>
              <Text style={styles.restTimerText}>Rest: {restTimer}s</Text>
            </View>
          )}
        </View>
      ) : (
        <Text style={styles.noExercises}>No exercises in this workout</Text>
      )}

      <TouchableOpacity
        style={styles.nextButton}
        onPress={handleNextExercise}
        disabled={restTimer !== null}
      >
        <Text style={styles.nextButtonText}>
          {currentExerciseIndex < exercises.length - 1 ? 'Next Exercise' : 'Complete Workout'}
        </Text>
      </TouchableOpacity>

      <Modal
        visible={showSetInput}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowSetInput(false)}
      >
        <View style={styles.modalOverlay}>
          <SetInput
            onComplete={handleSetComplete}
            onCancel={() => setShowSetInput(false)}
          />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  exerciseContainer: {
    marginBottom: 20,
  },
  exerciseName: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 5,
  },
  exerciseDetails: {
    fontSize: 16,
    color: '#666',
    marginBottom: 15,
  },
  setContainer: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  setTitle: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 10,
  },
  completeButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  completeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  restTimer: {
    backgroundColor: '#e3f2fd',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  restTimerText: {
    fontSize: 16,
    color: '#1976d2',
  },
  nextButton: {
    backgroundColor: '#34C759',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 'auto',
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  noExercises: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 20,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
}); 