import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { supabase } from '../../lib/supabase';

export default function TestScreen() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    async function testConnection() {
      try {
        // Test authentication
        const { data: { session }, error: authError } = await supabase.auth.getSession();
        console.log('Auth session:', session);

        // Test database query - let's try to fetch some exercises
        const { data: exercises, error: dbError } = await supabase
          .from('exercises')
          .select('*')
          .limit(5);

        if (dbError) throw dbError;
        
        setData(exercises || []);
        setLoading(false);
      } catch (err) {
        console.error('Error testing Supabase:', err);
        setError(err instanceof Error ? err.message : 'Unknown error occurred');
        setLoading(false);
      }
    }

    testConnection();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={styles.text}>Testing Supabase connection...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={[styles.text, styles.error]}>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Supabase connection successful!</Text>
      <Text style={styles.text}>Found {data.length} exercises:</Text>
      {data.map((exercise, index) => (
        <Text key={index} style={styles.exercise}>
          {exercise.name}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  error: {
    color: 'red',
  },
  exercise: {
    fontSize: 14,
    marginBottom: 5,
  },
}); 