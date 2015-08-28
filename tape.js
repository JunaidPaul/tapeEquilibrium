var difference = [];

var sum = function (startIndex, endIndex, a){
  var counter = 0
  for(var i=startIndex; i<=endIndex; i++){
    counter = counter + a[i];
  }
  return counter;
};

var solution = function(a){
  if(a.length != 0 && a.length <= 100000){
    for(var i=1; i<a.length; i++){
      var absoluteDifference = Math.abs(sum(0, i-1, a) - sum(i, a.length-1, a));
      difference.push(absoluteDifference);
    }
    difference.sort(function(a,b){return a - b});
    return difference[0];
  }else{
    return 0;
  }
};

// var a = [3, 1,2, 4, 3];
var a = [5, 6, 2, 4, 1];
answer = solution(a);
console.log(answer);
