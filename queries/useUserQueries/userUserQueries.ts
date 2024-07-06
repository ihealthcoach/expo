import { supabase } from "@/lib/supabase";
import { User } from "@supabase/supabase-js";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const getSupabaseSession = async () => {
  console.log("getting session");
  const response = await supabase.auth.getUser();
  console.log(response.error);
  console.log(response.data.user);
  return response.data.user;
};

// Check if user is authenticated
export const useAuth = () => {
  return useQuery<User>({
    queryKey: ["auth"],
    queryFn: getSupabaseSession,
    refetchOnMount: false,
  });
};

const loginUser = async (email: string, password: string) => {
  console.log("truing to login");
  const response = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  console.log(response);
  const user = response.data.user;
  return user;
};

// Login user
export const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) => {
      return loginUser(email, password);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["auth"] });
    },
  });
};

const logoutUser = async () => {
  const response = await supabase.auth.signOut();
  return response;
};

// Logout user
export const useLogout = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => {
      return logoutUser();
    },
    onSuccess: () => {
      console.log("should invalidate auth");
      queryClient.invalidateQueries({ queryKey: ["auth"] });
    },
  });
};

const signUpUser = async (email: string, password: string) => {
  console.log("trying to sign up");
  const response = await supabase.auth.signUp({
    email: email,
    password: password,
  });
  console.log(response);
  const user = response.data.user;
  return user;
};

// Sign up user
export const useSignUp = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) => {
      return signUpUser(email, password);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["auth"] });
    },
  });
};
