
$(document).ready(function () {
    console.log("My new renter form will go here.");
    console.log(
      "I can write all my actual code in a javascript file. Not inside a handlebars file. "
    );
  
    $("#new-booking").on("submit", function (e) {
      e.preventDefault();
      const email = $("#email").val();
     
      const firstName = $("#firstName").val();
      const lastName = $("#lastName").val();
      const password = $("#password").val();
      const phoneNum = $("#phoneNum").val();
      const phoneNum = $("#phoneNum").val();
      

      console.log(email);
      console.log(password);
      console.log(firstName);
      console.log(lastName);
  
       // AJAX calling routes
      $.ajax({
        method: "POST",
        url: "/api/renterss",
        data: {
          email,
          password,
          firstName,
          lastName,
        },
      }).then((response) => {
        window.location.replace("/players");
      });
    });
  });
  