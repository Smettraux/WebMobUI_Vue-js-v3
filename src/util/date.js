const mapDays = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];

export function dateToHours(date) {
  if (!(date instanceof Date)) date = new Date(date);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (hours < 10) hours = '0' + hours;
  if (minutes < 10) minutes = '0' + minutes;
  return `${hours}:${minutes}`;
}

export function dateToFrCh(date) {
  if (!(date instanceof Date)) date = new Date(date);
  let day = date.getDate();
  let dayName = mapDays[date.getDay()];
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  if (month < 10) month = '0' + month;
  if (day < 10) day = '0' + day;
  return `${dayName} ${day}.${month}`;
}