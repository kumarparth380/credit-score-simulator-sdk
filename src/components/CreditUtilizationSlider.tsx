import React from 'react';

interface CreditUtilizationSliderProps {
  value?: number;
  onChange: (value: number) => void;
//   onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const CreditUtilizationSlider: React.FC<CreditUtilizationSliderProps> = ({ value, onChange }) => {
  return (
    <div className="slider-container">
      <label htmlFor="credit-utilization">Credit Utilization: {value}%</label>
      <input
        id="credit-utilization"
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
      />
    </div>
  );
};

export default CreditUtilizationSlider;
