import React, { useContext } from 'react';
import { CreditSimulationContext } from '../hooks/useCreditSimulation';

const CreditScoreDisplay: React.FC = () => {
  const { creditScore } = useContext(CreditSimulationContext);

  const getScoreCategory = (score: number): string => {
    if (score < 580) return 'Poor';
    if (score < 670) return 'Fair';
    if (score < 740) return 'Good';
    if (score < 800) return 'Very Good';
    return 'Excellent';
  };

  return (
    <div>
      <h3>Credit Score: {creditScore}</h3>
      <p>Category: {getScoreCategory(creditScore)}</p>
    </div>
  );
};

export default CreditScoreDisplay;
