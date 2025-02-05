import React from "react"
import { getCategoryDescription } from "../utils/gen"
import { useTheme } from "../providers/ThemeProvider"

interface ScoreRangeProps {
  score: number
}

export function ScoreRange({ score }: ScoreRangeProps) {
  const { scoreRanges, colors } = useTheme()

  const getScoreCategory = (score: number) => {
    if (score >= scoreRanges.excellent[0]) return "Excellent"
    if (score >= scoreRanges.veryGood[0]) return "Very Good"
    if (score >= scoreRanges.good[0]) return "Good"
    if (score >= scoreRanges.fair[0]) return "Fair"
    return "Poor"
  }

  const getScoreColor = (score: number) => {
    if (score >= scoreRanges.excellent[0]) return colors.excellent
    if (score >= scoreRanges.veryGood[0]) return colors.veryGood
    if (score >= scoreRanges.good[0]) return colors.good
    if (score >= scoreRanges.fair[0]) return colors.fair
    return colors.poor
  }


  const category = getScoreCategory(score)

  return (
    <div className="mt-4 text-center">
      <span className="text-lg font-semibold" style={{ color: getScoreColor(score) }}>
        {category}
      </span>
      <p className="text-sm mt-2 max-w-md">{getCategoryDescription(category)}</p>
    </div>
  )
}

