function sum(arr) {
  if(arr===undefined){
  return 0;
  }
  return arr.reduce(function(sum, value){
    if(isNaN(value)===true){
      return "error: invalid character";
    }
    return sum + value}, 0);
}

module.exports = sum;
