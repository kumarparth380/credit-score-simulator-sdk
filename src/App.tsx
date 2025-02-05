import React from "react";
import CreditSimulationForm from "./components/CreditSimulationForm";
import useCreditSimulation, {
  CreditSimulationContext,
} from "./hooks/useCreditSimulation";
import { ThemeProvider } from "./providers/ThemeProvider";

const App: React.FC<{ theme: any }> = ({ theme }) => {
  const { simulationData, onSimulationChange, creditScore } =
    useCreditSimulation();

  return (
    <CreditSimulationContext.Provider value={{ creditScore }}>
      <ThemeProvider theme={theme}>
        <div className="app">
          <CreditSimulationForm
            simulationData={simulationData}
            onSimulationChange={onSimulationChange}
          />
        </div>
      </ThemeProvider>
    </CreditSimulationContext.Provider>
  );
};

export default App;