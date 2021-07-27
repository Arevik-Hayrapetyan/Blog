export default function setItem(items) {
    localStorage.setItem("input", JSON.stringify(items));
  }
  
  export function getItem() {
    return JSON.parse(localStorage.getItem("input"));
  }