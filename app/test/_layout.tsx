import { Stack } from 'expo-router';

export default function TestLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Supabase Test',
        }}
      />
    </Stack>
  );
} 