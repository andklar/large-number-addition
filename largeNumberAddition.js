function sumStrings(a,b) { 
  var float = 0
  var numArray = []
  var aArray = a.split("") // turn input strings into arrays
  var bArray = b.split("") //  ""    ""    ""     ""    ""
  
  for (i=1; i <= (a.length > b.length ? a.length  : b.length) + 1; i++) {
    var a1 = parseInt((aArray[a.length - i]), 10)
      if (isNaN(a1)) { // converts NaNs to 0s
        a1 = 0;
      }
    var b1 = parseInt((bArray[b.length - i]), 10)
      if (isNaN(b1)) { // converts NaNs to 0s
        b1 = 0;
      }
    
    num = a1 + b1 + float
    
    float = 0 // float resets to 0 after it is added to next column
    
    if (num > 9) { // carry the one process
      num -= 10;   // subtract 10 from number so only a single digit is added 
      float +=1;   // add one to float
    }
    
    console.log(num)
    numArray.unshift(num); // add number to beginning of array
  }
  
  numString = numArray.join("").replace(/^0+/, ''); // convert array into string and remove leading 0s
  return numString;

}