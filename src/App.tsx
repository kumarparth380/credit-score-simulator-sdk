import React from "react";
import CreditSimulationForm from "./components/CreditSimulationForm";
import useCreditSimulation, {
  CreditSimulationContext,
} from "./hooks/useCreditSimulation";
import { ThemeProvider } from "./providers/ThemeProvider";

const App: React.FC = () => {
  const { onSimulationChange, creditScore } = useCreditSimulation();

  return (
    <CreditSimulationContext.Provider value={{ creditScore }}>
      <ThemeProvider>
        <div className="app">
          <CreditSimulationForm onSimulationChange={onSimulationChange} />
        </div>
      </ThemeProvider>
    </CreditSimulationContext.Provider>
  );
};

export default App;