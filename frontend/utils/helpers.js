export const timeFromDateObj = dateObj => {
  const time = new Date(dateObj);
  let period;
  if (time.getHours() >= 12) {
    period = "PM";
  } else {
    period = "AM";
  }
  return `${time.getHours()}:${time.getMinutes()} ${period}`;
};
