const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const getDisplayDate = utcDateString => {
  const d = new Date(utcDateString);
  const year = d.getFullYear();
  const date = d.getDate();
  const monthIndex = d.getMonth();
  const monthName = months[monthIndex];
  const dayIndex = d.getDay();
  const dayName = days[dayIndex];
  const formatted = `${dayName}, ${date} ${monthName} ${year}`;
  return formatted;
};
