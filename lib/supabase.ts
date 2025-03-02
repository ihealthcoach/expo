import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

// Use default development values if env variables are not set
const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL || "https://fleiivpyjkvahakriuta.supabase.co";
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsZWlpdnB5amt2YWhha3JpdXRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEwODAzNzUsImV4cCI6MjAxNjY1NjM3NX0.lUbyfDlEANGoONW3mmtO-1JDvCsa1uy7EKKTs9yLYwE";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});