

function hashStringToInt(s) {
    let hash = 17;
  
    for (let i = 0; i < s.length; i++) {
      hash = (13 * hash * s.charCodeAt(i))%100;
  
    }
 
    return hash;
  }


  console.log(hashStringToInt('ben'))

