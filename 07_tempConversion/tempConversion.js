const ftoc = function(ftemp) {
  return Math.round(((ftemp-32)*5/9) * 10) / 10;
};

const ctof = function(ctemp) {
  return Math.round((ctemp * 9/5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
