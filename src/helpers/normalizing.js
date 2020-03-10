export function normalizeSeason(season) {
  const { startYear, endYear } = season;
  return {
    ...season,
    title: `Seizoen ${startYear}-${endYear}`
  };
}
