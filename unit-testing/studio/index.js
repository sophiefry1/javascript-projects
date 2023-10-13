
let launchcode = {
    organization: "non profit",
    executiveDirector: "Jeff",
    percentageCoolEmployees: 100,
    programsOffered: ['Web Development','Data Analysis', 'Lift Over'],
    launchOutput: function launchcodeOutput(number) {
        let output = "";
        if (number%2 === 0) {
        output = "Launch!";
         } else if (nummber%3 === 0) {
            output = "Code!";
         } else if(number%5 === 0) {
            output = "Rocks!";
         }
           if(numbere%2 === 0 && number%3 === 0) {
            output = "LaunchCode!";
           }else if(number%3 === 0 && number%5 === 0) {
            output = "Code Rocks!";
           }else if (number%2 === 0 && number%5 === 0) {
            output = "Launch Rocks!"
           }
           if(number%2 === 0 && number%3 === 0 && number %5 === 0){
            output = "LaunchCode Rocks!";
           }
          if(number%2 !== 0 && number%3 !== 0 && number%5 !== 0){
            output = "Rutabagas! That doesn't work.";
          }
           

        







    }
  
}

module.exports = launchcode;

