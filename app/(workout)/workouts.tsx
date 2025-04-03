// TODO: Temporary solution for navigation type issues
// The type assertions in Link components are used as a workaround for Expo Router's strict type system
// This should be updated when a proper solution is available
// See: https://github.com/expo/router/issues/XXX (to be created)

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import { Link } from 'expo-router';
import { useWorkouts } from '../../hooks/useWorkouts';
import { Workout } from '../../types/database';

export default function WorkoutsScreen() {
  const { workouts, loading, error, createWorkout } = useWorkouts();
  const [isCreating, setIsCreating] = useState(false);

  const handleCreateWorkout = async () => {
    try {
      setIsCreating(true);
      const { data: workout } = await createWorkout('New Workout');
      if (workout) {
        // Navigation will be handled by the Link component
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to create workout');
    } finally {
      setIsCreating(false);
    }
  };

  const renderWorkoutItem = ({ item }: { item: Workout }) => (
    <Link
      href={`/(workout)/exercise-tracking/${item.id}` as any}
      asChild
    >
      <TouchableOpacity style={styles.workoutItem}>
        <View style={styles.workoutHeader}>
          <Text style={styles.workoutTitle}>{item.title}</Text>
          <View
            style={[
              styles.statusBadge,
              { backgroundColor: item.status === 'active' ? '#34C759' : '#8E8E93' },
            ]}
          >
            <Text style={styles.statusText}>
              {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
            </Text>
          </View>
        </View>
        <Text style={styles.workoutDate}>
          {new Date(item.created).toLocaleDateString()}
        </Text>
      </TouchableOpacity>
    </Link>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading workouts...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={workouts}
        renderItem={renderWorkoutItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No workouts yet</Text>
          </View>
        }
      />

      <Link
        href={`/(workout)/exercise-tracking/new` as any}
        asChild
      >
        <TouchableOpacity
          style={styles.createButton}
          onPress={handleCreateWorkout}
          disabled={isCreating}
        >
          <Text style={styles.createButtonText}>
            {isCreating ? 'Creating...' : 'Create New Workout'}
          </Text>
        </TouchableOpacity>
      </Link>
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
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    color: '#FF3B30',
    textAlign: 'center',
  },
  listContent: {
    padding: 16,
  },
  workoutItem: {
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  workoutHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  workoutTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  workoutDate: {
    color: '#666',
    fontSize: 14,
  },
  emptyContainer: {
    padding: 20,
    alignItems: 'center',
  },
  emptyText: {
    color: '#666',
    fontSize: 16,
  },
  createButton: {
    backgroundColor: '#007AFF',
    margin: 16,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  createButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
}); 