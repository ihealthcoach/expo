import { supabase } from "@/lib/supabase";
import { User } from "@supabase/supabase-js";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const getSupabaseSession = async () => {
  const data = (await supabase.auth.getSession()).data;
  return data.session.user;
};

// Check if user is authenticated
export const useAuth = () => {
  return useQuery<User>({
    queryKey: ["gif"],
    queryFn: getSupabaseSession,
    refetchOnMount: false,
  });
};

const loginUser = async (email: string, password: string) => {
  const response = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  const user = response.data.user;
  return user;
};

// Login user
export const useLogin = (email: string, password: string) => {
  return useMutation({
    mutationFn: () => {
      return loginUser(email, password);
    },
  });
};

const logoutUser = async () => {
  const response = await supabase.auth.signOut();
};

// Logout user
export const useLogout = () => {
  return useMutation({
    mutationFn: () => {
      return logoutUser();
    },
  });
};
