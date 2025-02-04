import React from 'react';

interface CreditUtilizationSliderProps {
  value?: number;
  onChange: (value: number) => void;
//   onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const CreditUtilizationSlider: React.FC<CreditUtilizationSliderProps> = ({ value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-lg font-medium">Credit Utilization (%):</label>
      <input
        type="range"
        min="0"
        max="100"
        step="1"
        onChange={(e) => onChange(parseInt(e.target.value))}
        name="creditUtilization"
        className="w-full"
      />
    </div>
  );
};

export default CreditUtilizationSlider;
