export const capitalize = (s) => {
  if (s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }
};

export const formatToIsraeliDate = (date) => {
  const baseDate = new Date(date);
  return `${baseDate.getDate().toString().padStart(2, "0")}/${(
    baseDate.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}/${baseDate.getFullYear()}`;
};
