const ftoc = function(num) {
  const celc = ((num - 32) * (5/9));
  return (Math.round(celc * 10) / 10)
  
};

const ctof = function(num) {
  const fahr = ((num * (9/5)) + 32);
  return (Math.round(fahr * 10) / 10)
  
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
