$(document).ready(function() {
  $("input[type='radio']").click(function() {
    $(".answer").addClass("test");
  });
  $("#language").submit(function(event) {
    event.preventDefault();

    var personality = $("input:radio[name=personality]:checked").val();
    var company = $("input:radio[name=company]:checked").val();
    var development = $("input:radio[name=development]:checked").val();
    var pace = $("input:radio[name=pace]:checked").val();
    var change = $("input:radio[name=change]:checked").val();
    var drink = $("input:radio[name=drink]:checked").val();

    if (personality === "Artistic") {
      if (development !=="Mobile" && company === "Small" || pace === "Slow") {
        $("#ruby").show();
        $("#java").hide();
        $("#csharp").hide();
        $("#php").hide();
      }
      else {
        $("#java").show();
        $("#ruby").hide();
        $("#csharp").hide();
        $("#php").hide();
      }
    }

    if (personality === "Logical") {
      if (company === "Small" || pace === "Fast") {
        $("#php").show();
        $("#java").hide();
        $("#csharp").hide();
        $("#ruby").hide();
      }
      else {
        $("#csharp").show();
        $("#java").hide();
        $("#ruby").hide();
        $("#php").hide();
      }
    }
  });
});
