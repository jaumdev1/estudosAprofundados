function validatePIN (pin) {
    pin = pin.replace(/[^\d]+/g,'') 
        if (pin.length !==4 && pin.length !==6){
            return false
        }
        return true
  }
  console.log(validatePIN('-1.234'))