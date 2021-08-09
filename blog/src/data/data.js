const currentDate = new Date();
export const date =
  currentDate.getFullYear() +
  "-" +
  (currentDate.getMonth() + 1) +
  "-" +
  currentDate.getDate();

const today = new Date();
export const time =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
