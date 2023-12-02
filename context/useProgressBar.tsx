import React, { createContext, useState, useContext, ReactNode } from "react";

// Interfaces
interface ProgressBarContextData {
  progress: number;
  setProgress: (progress: number) => void;
  incrementProgress: (incrementValue: number) => void;
  decrementProgress: (decrementValue: number) => void;
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
  incrementProgress: (incrementValue) => {},
  decrementProgress: (decrementValue) => {},
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
  const [progress, setProgress] = useState<number>(12.5);
  const [, setUpdateTrigger] = useState({});
  // console.log("ProgressBarProvider", progress);

  const incrementProgress = (incrementValue: number) => {
    setProgress((prevProgress) => prevProgress + incrementValue);
    setUpdateTrigger({});
  };

  const decrementProgress = (decrementValue: number) => {
    setProgress((prevProgress) => Math.max(0, prevProgress - decrementValue));
    setUpdateTrigger({});
  };

  const showProgressBar = () => setIsVisible(true);
  const hideProgressBar = () => setIsVisible(false);

  return (
    <ProgressBarContext.Provider
      value={{
        progress,
        setProgress,
        incrementProgress,
        decrementProgress,
        isVisible,
        showProgressBar,
        hideProgressBar,
      }}
    >
      {children}
    </ProgressBarContext.Provider>
  );
};
