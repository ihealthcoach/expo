import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";

interface QuestionnaireState {
  gender: "male" | "female" | "other" | null;
  goal: "muscles" | "weight-loss" | "strength" | null;
  workoutDays: number[];
  level: "beginner" | "intermediate" | "advanced" | null;
  weight: number | null;
  height: number | null;
  age: number | null;
  bodytype: "ectomorph" | "mesomorph" | "endomorph" | "combination" | null;
}

interface QuestionnaireContextData extends QuestionnaireState {
  setQuestionnaire: (data: Partial<QuestionnaireState>) => void;
}

const QuestionnaireContext = createContext<QuestionnaireContextData>({
  gender: null,
  goal: null,
  workoutDays: [],
  level: null,
  weight: null,
  height: null,
  age: null,
  bodytype: null,
  setQuestionnaire: () => {}, // Dummy function for initialization
});

export const useQuestionnaire = () => useContext(QuestionnaireContext);

interface QuestionnaireProviderProps {
  children: ReactNode;
}

export const QuestionnaireProvider: React.FC<QuestionnaireProviderProps> = ({
  children,
}) => {
  const [questionnaire, setQuestionnaireState] = useState<QuestionnaireState>({
    gender: null,
    goal: null,
    workoutDays: [],
    level: null,
    weight: null,
    height: null,
    age: null,
    bodytype: null,
  });

  useEffect(() => {
    console.log(questionnaire);
  }, [questionnaire]);

  const setQuestionnaire = (data: Partial<QuestionnaireState>) => {
    setQuestionnaireState((prev) => ({ ...prev, ...data }));
  };

  const contextValue = { ...questionnaire, setQuestionnaire };

  return (
    <QuestionnaireContext.Provider value={contextValue}>
      {children}
    </QuestionnaireContext.Provider>
  );
};
