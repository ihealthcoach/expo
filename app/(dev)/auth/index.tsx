// Index.js
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  useAuth,
  useLogin,
  useLogout,
  useSignUp, // Import useSignUp
} from "@/queries/useUserQueries/userUserQueries";
import { supabase } from "@/lib/supabase";

const queryClient = new QueryClient();

const Index = () => {
  const { data: user, isLoading: authLoading } = useAuth();
  const loginMutation = useLogin();
  const logoutMutation = useLogout();
  const signUpMutation = useSignUp();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  const handleLogin = async () => {
    try {
      await loginMutation.mutateAsync({ email, password });
    } catch (error) {
      console.error("Login error", error);
    }
  };

  const handleSignUp = async () => {
    try {
      await signUpMutation.mutateAsync({ email, password });
    } catch (error) {
      console.error("Sign up error", error);
    }
  };

  const handleLogout = async () => {
    try {
      await logoutMutation.mutateAsync();
    } catch (error) {
      console.error("Logout error", error);
    }
  };

  if (authLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <View style={styles.container}>
        {user ? (
          <View>
            <Text>Welcome, {user.email}</Text>
            <Button title="Logout" onPress={handleLogout} />
            <Text>Logged in</Text>
          </View>
        ) : (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            {isSignUp ? (
              <>
                <Button title="Sign Up" onPress={handleSignUp} />
                <Button
                  title="Switch to Login"
                  onPress={() => setIsSignUp(false)}
                />
              </>
            ) : (
              <>
                <Button title="Login" onPress={handleLogin} />
                <Button
                  title="Switch to Sign Up"
                  onPress={() => setIsSignUp(true)}
                />
              </>
            )}
            <Text>{isSignUp ? "Signing up" : "Logged out"}</Text>
          </View>
        )}
      </View>
    </QueryClientProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default Index;
