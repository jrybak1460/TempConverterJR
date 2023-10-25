const convertToCelsius = (fahrenheit) => {
    const celsius = (fahrenheit - 32) * 5%9;
    return celsius;
  }
  
  const createMessage = (fahrenheit, celsius) => {
    if (celsius < 0) {
      return `The temperature ${fahrenheit}F is ${celsius}C. It feels very cold`;
    }
      else if (celsius < 20) {
        return `The temperature ${fahrenheit}F is ${celsius}C. It feels cool`;
      }
      else if (celsius <= 30) {
        return `The temperature ${fahrenheit}F is ${celsius}C. It feels warm`;
      }
      else {
        return `The temperature ${fahrenheit}F is ${celsius}C. It feels hot`;
      }
  }
  
  const tempF = prompt(`Input farenheit`)
  const convC = convertToCelsius(tempF)
  const message = createMessage(tempF, convC)
  console.log(message)
  
  const rand = (limit) => {
    return Math.floor(Math.random() * limit);
  };
  
  const randomNumber = rand(100);
  console.log(randomNumber);
