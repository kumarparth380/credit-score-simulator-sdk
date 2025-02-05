import React from "react";
import CreditUtilizationSlider from "./CreditUtilizationSlider";
import CreditScoreDisplay from "./CreditScoreDisplay";
import { ScoreRange } from "./ScoreRange";
import { useTheme } from "../providers/ThemeProvider";
import { SimulationData } from "../hooks/useCreditSimulation";
import { Label } from "./common/Label";

interface CreditSimulationFormProps {
  onSimulationChange: React.ChangeEventHandler<HTMLInputElement>;
  simulationData: SimulationData;
}

const CreditSimulationForm: React.FC<CreditSimulationFormProps> = ({
  onSimulationChange,
  simulationData,
}) => {
  const { colors } = useTheme();
  // Add this handler for the slider
  const handleSliderChange = (value: number) => {
    onSimulationChange({
      target: { value: value.toString(), name: "creditUtilization" },
    } as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <div
      className="grid p-8 mt-8 max-w-4xl mx-auto gap-4  rounded-lg shadow-lg"
      style={{ background: colors.backgroundColor }}
    >
      <h2 className="text-3xl font-semibold">Credit Score Simulator</h2>
      <p className="text-sm text-neutral-500 dark:text-neutral-500">
        Explore how different factors affect your credit score
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          {/* Credit Utilization Slider */}
          <CreditUtilizationSlider
            value={simulationData.creditUtilization}
            onChange={handleSliderChange}
          />

          {/* Payment History Toggle */}
          <div className="mb-4">
            <Label>Payment History:</Label>
            <div className="flex space-x-4">
              <label className="items-center flex">
                <input
                  type="radio"
                  name="paymentHistory"
                  value="onTime"
                  onChange={onSimulationChange}
                />
                <span className="ml-2 text-sm text-stone-800">
                  On-Time Payments
                </span>
              </label>
              <label className="items-center flex">
                <input
                  type="radio"
                  name="paymentHistory"
                  value="missed"
                  onChange={onSimulationChange}
                />
                <span className="ml-2 text-sm text-stone-800">
                  Missed Payments
                </span>
              </label>
            </div>
          </div>

          {/* New Credit Applications Counter */}
          <div className="mb-4">
            <Label>New Credit Applications:</Label>
            <input
              type="number"
              min="0"
              onChange={onSimulationChange}
              value={simulationData.newCreditApplications}
              name="newCreditApplications"
              className="w-full p-2 border border-gray-300 rounded text-sm"
            />
          </div>

          {/* Credit Age Slider */}
          <div className="mb-4">
            <Label>Credit Age (Years): {simulationData.creditAge}</Label>
            <input
              type="range"
              min="0"
              max="40"
              onChange={onSimulationChange}
              name="creditAge"
              className="w-full accent-cyan-600"
            />
          </div>

          {/* Debt-to-Income Ratio */}
          <div className="mb-4">
            <Label>Debt-to-Income Ratio:</Label>
            <input
              type="number"
              min="0"
              max="100"
              value={simulationData.debtToIncomeRatio}
              onChange={onSimulationChange}
              name="debtToIncomeRatio"
              className="w-full p-2 border border-gray-300 rounded text-sm"
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
