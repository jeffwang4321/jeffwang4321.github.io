//Default active on home
$('#n_home').addClass("active");

/*
Using jquery waypoints to change active on scroll
*/
$('#home').waypoint(function() {
  $("header ul li").children().removeClass("active");
  $("#n_home").addClass("active");
}, { offset: -100 });

$('#about').waypoint(function() {
  $("header ul li").children().removeClass("active");
  $("#n_about").addClass("active");
}, { offset: 0 });


$('#work').waypoint(function() {
  $("header ul li").children().removeClass("active");
  $("#n_work").addClass("active");
}, { offset: 0 });

$('#project').waypoint(function() {
  $("header ul li").children().removeClass("active");
  $("#n_project").addClass("active");
}, { offset: 1 });

$('#contact').waypoint(function() {
  $("header ul li").children().removeClass("active");
  $("#n_contact").addClass("active");
}, { offset: 500 });

