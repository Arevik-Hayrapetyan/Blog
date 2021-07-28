const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
function postDate() {
  let currentDate = new Date();
  let date =
    currentDate.getFullYear() +
    "-" +
    (currentDate.getMonth()[months] + 1) +
    "-" +
    currentDate.getDate();
  return date;
}

export default postDate;
