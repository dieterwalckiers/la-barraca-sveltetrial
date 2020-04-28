function translate(datePart) {
  return {
    January: "januari",
    February: "februari",
    March: "maart",
    April: "april",
    May: "mei",
    June: "juni",
    July: "juli",
    August: "augustus",
    September: "september",
    October: "oktober",
    November: "november",
    December: "december",
    Monday: "Maandag",
    Tuesday: "Dinsdag",
    Wednesday: "Woensdag",
    Thursday: "Donderdag",
    Friday: "Vrijdag",
    Saturday: "Zaterdag",
    Sunday: "Zondag",
  }[datePart];
}

export function ddValueFromPerformance({ date, time }) {
  return {
    value: date,
    label: `${translate(date.format("dddd"))} ${date.format("DD")} ${translate(
      date.format("MMMM")
    )} ${date.format("YYYY")} | ${time}U`,
  };
}
