function getTotalFib(number) {
  if (number < 2) return number;
  return getTotalFib(number - 1) + getTotalFib(number - 2);
}
