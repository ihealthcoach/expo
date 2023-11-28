import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fleiivpyjkvahakriuta.supabase.co";
// const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsZWlpdnB5amt2YWhha3JpdXRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEwODAzNzUsImV4cCI6MjAxNjY1NjM3NX0.lUbyfDlEANGoONW3mmtO-1JDvCsa1uy7EKKTs9yLYwE";
// const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
