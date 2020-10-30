//Default active on home
$('#n_home').addClass("active");

/*
Using jquery waypoints to change active on scroll
*/

$('#home').waypoint(function() {
  // document.getElementById("demo").innerHTML = "home";
  $("#n_home").addClass("active");
  $("#n_about").removeClass("active");
}, { offset: 1 });

$('#home_b').waypoint(function() {
  $("#n_home").addClass("active");
  $("#n_about").removeClass("active");
},{ offset: 1 });

$('#about').waypoint(function() {
  $("#n_home").removeClass("active");
  $("#n_about").addClass("active");
  $("#n_work").removeClass("active");
},{ offset: 1 });

$('#about_b').waypoint(function() {
  $("#n_home").removeClass("active");
  $("#n_about").addClass("active");
  $("#n_work").removeClass("active");
},{ offset: 1 });

$('#work').waypoint(function() {
  $("#n_about").removeClass("active");
  $("#n_work").addClass("active");
  $("#n_project").removeClass("active");
},{ offset: 1 });

$('#work_b').waypoint(function() {
  $("#n_about").removeClass("active");
  $("#n_work").addClass("active");
  $("#n_project").removeClass("active");
},{ offset: 1 });

$('#project').waypoint(function() {
  $("#n_work").removeClass("active");
  $("#n_project").addClass("active");
  $("#n_contact").removeClass("active");
},{ offset: 1 });

$('#project_b').waypoint(function() {
  $("#n_work").removeClass("active");
  $("#n_project").addClass("active");
  $("#n_contact").removeClass("active");
},{ offset: 500 });

$('#contact').waypoint(function() {
  $("#n_project").removeClass("active");
  $("#n_contact").addClass("active");
}, { offset: 500 });



// $('#n_about').on('click', function() {
//   $("#n_about").addClass("active");
// }, { offset: -1 });




$('#about').waypoint(function() {
  $("#n_home").removeClass("active");
  $("#n_about").addClass("active");
  $("#n_work").removeClass("active");
});


$('#work').waypoint(function() {
  $("#n_about").removeClass("active");
  $("#n_work").addClass("active");
  $("#n_project").removeClass("active");
});

// $('#project').waypoint(function() {
//   $("header ul li").children().removeClass("active");
//   $("#n_project").addClass("active");
// }, { offset: 1 });

// $('#contact').waypoint(function() {
//   $("header ul li").children().removeClass("active");
//   $("#n_contact").addClass("active");
// }, { offset: 500 });



/* Active Nav on Click */
// $(document).ready(function() {
//   $('#n_about').on('click', function() {
//     $("#n_about").addClass("active");
//   });
// });


$(document).ready(function() {
  $('#n_home').on('click', function() {
    
    $("#n_home").addClass("active");
    $("#n_about").removeClass("active");
  });
});