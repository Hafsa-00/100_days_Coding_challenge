let userProfile = (function () {
  let name = "Hafsa";
  let age = 17;
  let studyInClass = 11;
  let country = "Pakistan";

  //  shares the user's details
  return {
    displayInfo: function () {
      console.log(
        `Name: ${name}, 
        Age: ${age},
        class:${studyInClass},
        country:${country}`
      );
    },
  };
})();
userProfile.displayInfo();
