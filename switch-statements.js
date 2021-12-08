function sequentialSizes(val) {
  
    switch(val) {
      case 1:
      case 2:
      case 3:
        return "Low";
        
      case 4:
      case 5:
      case 6:
        return "Mid";
        
      case 7:
      case 8:
      case 9:
        return "High";
        
    }
    
      return result;
    }
    
    console.log(sequentialSizes(5));


function chainToSwitch(val) {

  switch(val) {
    case "bob":
      return "Marley";
      
    case 42:
      return "The Answer";
      
    case 1:
      return "There is no #1";
      
    case 99:
      return "Missed me by this much!";
      
    case 7:
      return "Ate Nine";
      

  }
  
  return x;
}

console.log(chainToSwitch(99));