$(document).ready(function() {
  // $("input[type='radio']").click(function() {
  //   $(".answer").addClass("test");
  // });
  $("#language").submit(function(event) {
    event.preventDefault();

    var experiance = $("input:radio[name=experiance]:checked").val();
    var personality = $("input:radio[name=personality]:checked").val();
    var company = $("input:radio[name=company]:checked").val();
    var development = $("input:radio[name=development]:checked").val();
    var pace = $("input:radio[name=pace]:checked").val();
    var change = $("input:radio[name=change]:checked").val();
    var drink = $("input:radio[name=drink]:checked").val();

    if (experiance === "No") {
      if (personality === "Artistic" && change === "Embrace") {
        $("#design").show();
        $("#java").hide();
        $("#csharp").hide();
        $("#php").hide();
        $("#css").hide();
        $("#ruby").hide();
        $("#javascript").hide();
      }
      else if (personality === "Logical" && development === "Web"){
        $("#javascript").show();
        $("#java").hide();
        $("#csharp").hide();
        $("#php").hide();
        $("#design").hide();
        $("#ruby").hide();
        $("#css").hide();
      }
      else if (personality === "Artistic" || pace === "Steady") {
        $("#css").show();
        $("#java").hide();
        $("#csharp").hide();
        $("#php").hide();
        $("#design").hide();
        $("#ruby").hide();
        $("#javascript").hide();
      }
      else {
        $("#css").show();
        $("#java").hide();
        $("#csharp").hide();
        $("#php").hide();
        $("#design").hide();
        $("#ruby").hide();
        $("#javascript").hide();
      }
    }

    if (personality === "Artistic" && experiance === "Yes") {
      if (company === "Small" && development !== "Mobile") {
        $("#ruby").show();
        $("#java").hide();
        $("#csharp").hide();
        $("#php").hide();
        $("#design").hide();
        $("#css").hide();
        $("#javascript").hide();
      }
      else {
        $("#java").show();
        $("#ruby").hide();
        $("#csharp").hide();
        $("#php").hide();
        $("#design").hide();
        $("#css").hide();
        $("#javascript").hide();
      }
    }

    if (personality === "Logical" && experiance === "Yes") {
      if (company === "Small" && pace === "Fast") {
        $("#php").show();
        $("#java").hide();
        $("#csharp").hide();
        $("#ruby").hide();
        $("#design").hide();
        $("#css").hide();
        $("#javascript").hide();
      }
      else if (company === "Large" || change === "Keep") {
        $("#csharp").show();
        $("#java").hide();
        $("#ruby").hide();
        $("#php").hide();
        $("#design").hide();
        $("#css").hide();
        $("#javascript").hide();
      }
    }
  });
});
