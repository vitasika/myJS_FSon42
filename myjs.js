function getShippingCost(country) {
  let message;
  // Change code below this line
  
  switch(country) {
    case "China":
      cost = 100
      console.log("Shipping to <country> will cost <price> credits");
      break;
    case "Chile":
      cost = 250
      console.log("Shipping to <country> will cost <price> credits");
      break;
    case "Australia":
      cost = 170
      console.log("Shipping to <country> will cost <price> credits");
      break;
    case "Jamaica":
      cost = 120
      console.log("Shipping to <country> will cost <price> credits");
      break;
      
    default:
      console.log("Sorry, there is no delivery to your country");
  }

  // Change code above this line
  return message;
}