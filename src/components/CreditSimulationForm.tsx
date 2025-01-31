import React from 'react';
import CreditUtilizationSlider from './CreditUtilizationSlider';
import CreditScoreDisplay from './CreditScoreDisplay';

interface CreditSimulationFormProps {
  onSimulationChange: React.ChangeEventHandler<HTMLInputElement>;
}

const CreditSimulationForm: React.FC<CreditSimulationFormProps> = ({ onSimulationChange }) => {
  // Add this handler for the slider
  const handleSliderChange = (value: number) => {
    onSimulationChange({
      target: { value: value.toString(), name: 'creditUtilization' }
    } as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <div className="credit-simulation-form">
      <h2>Credit Score Simulator</h2>
      
      {/* Credit Utilization Slider */}
      <CreditUtilizationSlider onChange={handleSliderChange} />

      {/* Payment History Toggle */}
      <div>
        <label>Payment History:</label>
        <div>
          <label>
            <input type="radio" name="paymentHistory" value="onTime" onChange={onSimulationChange} />
            On-Time Payments
          </label>
          <label>
            <input type="radio" name="paymentHistory" value="missed" onChange={onSimulationChange} />
            Missed Payments
          </label>
        </div>
      </div>

      {/* New Credit Applications Counter */}
      <div>
        <label>New Credit Applications:</label>
        <input
          type="number"
          min="0"
          onChange={onSimulationChange}
          name="newCreditApplications"
        />
      </div>

      {/* Credit Age Slider */}
      <div>
        <label>Credit Age (Years):</label>
        <input
          type="range"
          min="0"
          max="40"
          onChange={onSimulationChange}
          name="creditAge"
        />
      </div>

      {/* Debt-to-Income Ratio */}
      <div>
        <label>Debt-to-Income Ratio:</label>
        <input
          type="number"
          min="0"
          max="100"
          onChange={onSimulationChange}
          name="debtToIncomeRatio"
        />
      </div>

      {/* Display Calculated Credit Score */}
      <CreditScoreDisplay />
    </div>
  );
};

export default CreditSimulationForm;
