import React, { useContext } from "react";
import { CreditSimulationContext } from "../hooks/useCreditSimulation";
import { useTheme } from "../providers/ThemeProvider";
import { ScoreRange } from "./ScoreRange";

const CreditScoreDisplay: React.FC = () => {
  const { creditScore } = useContext(CreditSimulationContext);
  const { colors } = useTheme();

  const getScoreColor = (score: number) => {
    if (score >= 800) return colors.excellent;
    if (score >= 740) return colors.veryGood;
    if (score >= 670) return colors.good;
    if (score >= 580) return colors.fair;
    return colors.poor;
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative w-48 h-48">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#e6e6e6"
            strokeWidth="10"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke={getScoreColor(creditScore)}
            strokeWidth="10"
            strokeDasharray={`${((creditScore - 300) / 550) * 283} 283`}
            transform="rotate(-90 50 50)"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl font-bold">{creditScore}</span>
        </div>
      </div>
      <ScoreRange score={creditScore} />
    </div>
  );
};

export default CreditScoreDisplay;
