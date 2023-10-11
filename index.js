// Code your solution in this file!
const drivers=['Antonia','Nuru','Amari','Mo'];
const returnFirstTwoDrivers= function(driversArray){
    return driversArray.slice(0,2);
};
//call function
const FirstTwoDrivers= returnFirstTwoDrivers(drivers);
console.log(FirstTwoDrivers);
const returnLastTwoDrivers= function (driversArray){
    return driversArray.slice(-2);
};
//call the function
const LastTwoDrivers= returnLastTwoDrivers(drivers);
console.log(lastTwoDrivers);


function createFareMultiplier(integer) {
    return function(fare) {
      return fare * integer;
    };
  }
  
  // Example usage:
  const quadrupleFare = createFareMultiplier(4);
  const doubleFare = createFareMultiplier(2);
  
  const initialFare = 10;
  const quadrupledAmount = quadrupleFare(initialFare);
  const doubledAmount = doubleFare(initialFare);
  
  console.log(quadrupledAmount); // Output: 40 (10 * 4)
  console.log(doubledAmount); // Output: 20 (10 * 2)
  function createFareMultiplier(integer) {
    return function(fare) {
      return fare * integer;
    };
  }
  
  function createFareMultiplier(integer) {
    return function(fare) {
      return fare * integer;
    };
  }
  
  const fareDoubler = createFareMultiplier(2);
  
  // Example usage:
  initialFare;
  const doubledFare = fareDoubler(initialFare);
  
  console.log(doubledFare); // Output: 20 (10 * 2)
  
    
  