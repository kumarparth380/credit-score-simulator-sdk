import React from 'react';
import CreditSimulationForm from './components/CreditSimulationForm';
import { CreditSimulationContext } from './hooks/useCreditSimulation';
import useCreditSimulation from './hooks/useCreditSimulation';

const App: React.FC = () => {
  const { simulationData, creditScore, onSimulationChange } = useCreditSimulation();

  return (
    <CreditSimulationContext.Provider value={{ creditScore }}>
      <div className="app">
        <h1>Credit Score Simulator</h1>
        <CreditSimulationForm onSimulationChange={onSimulationChange} />
      </div>
    </CreditSimulationContext.Provider>
  );
};

export default App;