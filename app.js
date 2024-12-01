//-------------------Part 1: Fizz Buzz-----------------------------------------------------------------------------

// Loop through all numbers from 1 to 100.

for (i=1 ; i <=100 ; i++)
{
  // If a number is divisible by 3, log “Fizz.”
   if(i % 3 ==0 )
   {
    console.log("Fizz");
   }

 // If a number is divisible by 5, log “Buzz.”
   else if (i % 5 == 0)
   {
    console.log("Buzz");
   }

 // If a number is divisible by both 3 and 5, log “Fizz Buzz.”
   else if (i % 3 === 0 && i % 5 === 0)
   {
    console.log("Fizz Buzz");
   }
   
 // If a number is not divisible by either 3 or 5, log the number.
   else 
   {
    console.log(i);
   }
       
}
console.log('----------------------------------------------------------');

// ----------------------------------Part2=-------------------------

let n = 9; 

let num = n + 1; 
let isPrime = false; 

// to find the next prime number
while (!isPrime)
  {
    isPrime = true; // Assume the number is prime until proven otherwise

    for (let i = 2; i <= Math.sqrt(num); i++) 
    {
        if (num % i === 0) 
        {
            isPrime = false; // Not prime if divisible by i
            break; 
        }
    }

    // If it's prime, log the number and break the loop
    if (isPrime) 
      {
        console.log(num);
        break;
     }

    num++;
}



