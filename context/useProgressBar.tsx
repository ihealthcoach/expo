import React, { createContext, useState, useContext, ReactNode } from "react";

// Interfaces
interface ProgressBarContextData {
  progress: number;
  setProgress: (progress: number) => void;
  showProgressBar: () => void;
  hideProgressBar: () => void;
  isVisible: boolean;
}

interface ProgressBarProviderProps {
  children: ReactNode;
}

const ProgressBarContext = createContext<ProgressBarContextData>({
  progress: 0,
  setProgress: (progress) => {},
  showProgressBar: () => {},
  hideProgressBar: () => {},
  isVisible: true,
});

export const useProgressBar = () => useContext(ProgressBarContext);

export const useProgressBarVisibility = () => {
  const { showProgressBar, hideProgressBar } = useProgressBar();
  return { showProgressBar, hideProgressBar };
};

export const ProgressBarProvider: React.FC<ProgressBarProviderProps> = ({
  children,
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0.125);

  const showProgressBar = () => setIsVisible(true);
  const hideProgressBar = () => setIsVisible(false);

  return (
    <ProgressBarContext.Provider
      value={{
        progress,
        setProgress,
        isVisible,
        showProgressBar,
        hideProgressBar,
      }}
    >
      {children}
    </ProgressBarContext.Provider>
  );
};
