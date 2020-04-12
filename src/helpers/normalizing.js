import moment from "moment";

function normalizeTimePart(timePart) {
  return timePart.length === 1 ? `0${timePart}` : timePart;
}

function normalizeProduction(production) {
  const { performanceCalendar: performanceCalendarStr } = production;
  const performanceCalendar = performanceCalendarStr ?
    JSON.parse(performanceCalendarStr)
      .map(performance => ({
        ...performance,
        date: moment(performance.date, "DD-MM-YYYY"),
        time: performance.time
          .split(":")
          .map(normalizeTimePart)
          .join(":")
      }))
      .sort(({ date: date1 }, { date: date2 }) => {
        return date1.isBefore(date2) ? -1 : 1;
      }) :
    [];
  return {
    ...production,
    performanceCalendar
  };
}

export function normalizeSeason(season) {
  const { startYear, endYear } = season;
  const rs = {
    ...season,
    title: `Seizoen ${startYear}-${endYear}`,
    productions: season.productions.map(normalizeProduction)
  };
  console.log("norm season", JSON.stringify(rs, null, 2));
  return rs;
}

export function nameMonth(month) {
  const name = {
    "01": "januari",
    "02": "februari",
    "03": "maart",
    "04": "april",
    "05": "mei",
    "06": "juni",
    "07": "juli",
    "08": "augustus",
    "09": "september",
    "10": "oktober",
    "11": "november",
    "12": "december"
  }[month];
  return name || "----";
}
