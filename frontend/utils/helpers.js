export const timeFromDateObj = dateObj => {
  const time = new Date(dateObj);
  let hours = ("0" + time.getHours()).slice(-2);
  let minutes = ("0" + time.getMinutes()).slice(-2);
  let period;
  if (time.getHours() >= 12) {
    period = "PM";
  } else {
    period = "AM";
  }
  return `${hours}:${minutes} ${period}`;
};

export const arrayToHash = arr => {
  const hash = {};
  arr.forEach( e => hash[e.id] = e);
  return hash;
};

export const hashToArray = hash => {
  return Object.keys(hash).map( id => hash[id]);
};
