export const getScoreCategory = (score: number): string => {
  if (score < 580) return "Poor";
  if (score < 670) return "Fair";
  if (score < 740) return "Good";
  if (score < 800) return "Very Good";
  return "Excellent";
};

export const getCategoryDescription = (category: string) => {
  switch (category) {
    case "Excellent":
      return "You're in the top tier of credit scores. You should qualify for the best rates on loans and credit cards.";
    case "Very Good":
      return "Your score is well above average. You should have no problem qualifying for most loans.";
    case "Good":
      return "Your score is about average. You may qualify for a wider variety of loans, but not at the best rates.";
    case "Fair":
      return "Your score is below average. You may still qualify for some loans, but rates may be higher.";
    case "Poor":
      return "Your score needs improvement. You may have difficulty qualifying for loans or credit cards.";
    default:
      return "";
  }
};
