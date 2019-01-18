$(document).ready(function() {
  $("#language").submit(function(event) {
    event.preventDefault();

    var personality = $("input:radio[name=personality]:checked").val();
    var company = $("input:radio[name=company]:checked").val();
    var development = $("input:radio[name=development]:checked").val();
    var pace = $("input:radio[name=pace]:checked").val();
    var change = $("input:radio[name=change]:checked").val();
  });
});
