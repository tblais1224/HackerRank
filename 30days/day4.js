

function Person(initialAge){
    // Add some more code to run some checks on initialAge
    var age;
    if (initialAge < 0) {
        age = 0;
        console.log("Age is not valid, setting age to 0.");
    } else { age = parseInt(initialAge);}
    this.amIOld = function () {
        if (age < 13) {
            console.log("You are young.");
        } else if (age >= 13 && age < 18) {
            console.log("You are a teenager.");
        } else { console.log("You are old.");}
   // Do some computations in here and print out the correct statement to the console

  };
   this.yearPasses=function(){
          // Increment the age of the person in here
       age += 1;
   };
}
