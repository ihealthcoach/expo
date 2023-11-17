import React, { createContext, useState, useContext, ReactNode } from "react";

// Define the shape of the context data
interface ProgressBarContextData {
  progress: number;
  setProgress: (progress: number) => void;
}

// Create the context with a default value
const ProgressBarContext = createContext<ProgressBarContextData>({
  progress: 0,
  setProgress: (progress) => {}, // Implement this function to update the progress
});

export const useProgressBar = () => useContext(ProgressBarContext);

// Define the type for the props of ProgressBarProvider
interface ProgressBarProviderProps {
  children: ReactNode;
}

export const ProgressBarProvider: React.FC<ProgressBarProviderProps> = ({
  children,
}) => {
  const [progress, setProgress] = useState<number>(0.125);

  // Provide the context value with the state and updater function
  return (
    <ProgressBarContext.Provider value={{ progress, setProgress }}>
      {children}
    </ProgressBarContext.Provider>
  );
};
