import React from 'react';
import useCreditSimulation from '../hooks/useCreditSimulation';
import { Label } from './common/Label';

interface CreditUtilizationSliderProps {
  value?: number;
  onChange: (value: number) => void;
//   onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const CreditUtilizationSlider: React.FC<CreditUtilizationSliderProps> = ({ value, onChange }) => {
  return (
    <div className="mb-4">
      <Label>Credit Utilization: {value}%</Label>
      <input
        type="range"
        min="0"
        max="100"
        step="1"
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
        name="creditUtilization"
        className="w-full accent-cyan-600"
      />
    </div>
  );
};

export default CreditUtilizationSlider;
