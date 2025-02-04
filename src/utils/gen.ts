export const getScoreCategory = (score: number): string => {
    if (score < 580) return 'Poor';
    if (score < 670) return 'Fair';
    if (score < 740) return 'Good';
    if (score < 800) return 'Very Good';
    return 'Excellent';
};
