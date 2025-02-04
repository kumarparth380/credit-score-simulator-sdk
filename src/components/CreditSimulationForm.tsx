import React from "react";
import CreditUtilizationSlider from "./CreditUtilizationSlider";
import CreditScoreDisplay from "./CreditScoreDisplay";
import { ScoreRange } from "./ScoreRange";

interface CreditSimulationFormProps {
  onSimulationChange: React.ChangeEventHandler<HTMLInputElement>;
}

const CreditSimulationForm: React.FC<CreditSimulationFormProps> = ({
  onSimulationChange,
}) => {
  // Add this handler for the slider
  const handleSliderChange = (value: number) => {
    onSimulationChange({
      target: { value: value.toString(), name: "creditUtilization" },
    } as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold mb-4">Credit Score Simulator</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          {/* Credit Utilization Slider */}
          <CreditUtilizationSlider onChange={handleSliderChange} />

          {/* Payment History Toggle */}
          <div className="mb-4">
            <label className="block text-lg font-medium">
              Payment History:
            </label>
            <div className="flex space-x-4">
              <label>
                <input
                  type="radio"
                  name="paymentHistory"
                  value="onTime"
                  onChange={onSimulationChange}
                />
                <span className="ml-2">On-Time Payments</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="paymentHistory"
                  value="missed"
                  onChange={onSimulationChange}
                />
                <span className="ml-2">Missed Payments</span>
              </label>
            </div>
          </div>

          {/* New Credit Applications Counter */}
          <div className="mb-4">
            <label className="block text-lg font-medium">
              New Credit Applications:
            </label>
            <input
              type="number"
              min="0"
              onChange={onSimulationChange}
              name="newCreditApplications"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Credit Age Slider */}
          <div className="mb-4">
            <label className="block text-lg font-medium">
              Credit Age (Years):
            </label>
            <input
              type="range"
              min="0"
              max="40"
              onChange={onSimulationChange}
              name="creditAge"
              className="w-full"
            />
          </div>

          {/* Debt-to-Income Ratio */}
          <div className="mb-4">
            <label className="block text-lg font-medium">
              Debt-to-Income Ratio:
            </label>
            <input
              type="number"
              min="0"
              max="100"
              onChange={onSimulationChange}
              name="debtToIncomeRatio"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>

        {/* Display Calculated Credit Score */}
        <CreditScoreDisplay />
      </div>
    </div>
  );
};

export default CreditSimulationForm;
