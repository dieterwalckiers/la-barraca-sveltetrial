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

export function ddItemFromPerformance({ date, time }, index) {
  return {
    value: index,
    label: `${translate(date.format("dddd"))} ${date.format("DD")} ${translate(
      date.format("MMMM")
    )} ${date.format("YYYY")} | ${time}U`,
  };
}

export function buildNumberOfTicketsItems() {
  return [
    { value: 1, label: "1"},
    { value: 2, label: "2"},
    { value: 3, label: "3"},
    { value: 4, label: "4"},
    { value: 5, label: "5"},
    { value: 6, label: "6"},
    { value: 7, label: "7"},
    { value: 8, label: "8"},
    { value: 9, label: "9"},
    { value: 10, label: "10"},
  ]
}