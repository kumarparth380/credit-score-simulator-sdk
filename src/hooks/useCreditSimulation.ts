import { useState, createContext, useEffect, ChangeEvent } from 'react';

// Define a context for the credit score
export const CreditSimulationContext = createContext<{ creditScore: number }>({ creditScore: 700 });

export interface SimulationData {
  creditUtilization: number;
  paymentHistory: 'onTime' | 'missed';
  newCreditApplications: number;
  creditAge: number;
  debtToIncomeRatio: number;
}

const useCreditSimulation = () => {
  const [simulationData, setSimulationData] = useState<SimulationData>({
    creditUtilization: 30,
    paymentHistory: 'onTime',
    newCreditApplications: 0,
    creditAge: 10,
    debtToIncomeRatio: 0,
  });

  const [creditScore, setCreditScore] = useState<number>(700);

  const calculateCreditScore = () => {
    let score = 700;

    // Credit Utilization
    score -= simulationData.creditUtilization * 0.5;

    // Payment History
    if (simulationData.paymentHistory === 'missed') {
      score -= 100;
    }

    // New Credit Applications
    score -= simulationData.newCreditApplications * 10;

    // Credit Age
    score += simulationData.creditAge * 1.5;

    // Debt-to-Income Ratio
    score -= simulationData.debtToIncomeRatio * 0.2;

    // Clamp the score
    setCreditScore(Math.min(Math.max(score, 300), 850));
  };

  useEffect(() => {
    calculateCreditScore();
  }, [simulationData]);

  const onSimulationChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSimulationData((prevData) => ({
      ...prevData,
      [name]: name === 'newCreditApplications' || name === 'creditAge' || name === 'debtToIncomeRatio'
        ? parseInt(value === '' ? '0' : value, 10)
        : value,
    }));
  };

  return { simulationData, creditScore, onSimulationChange };
};

export default useCreditSimulation;
