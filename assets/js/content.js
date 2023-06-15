$(document).ready(function(){
    var currentProject = ""; // variable to store the ID of the currently shown project
    
    // Button 1
    $("#home").click(function(){
      if (currentProject !== ".home") {
        $(currentProject).hide("fast"); // hide the currently shown project
        currentProject = ".home";
        $(currentProject).show("fast"); // show the new project
      }
    });
    
    // Button 2
    $("#profiles").click(function(){
      if (currentProject !== ".profiles") {
        $(currentProject).hide("fast"); // hide the currently shown project
        currentProject = ".profiles";
        $(currentProject).show("fast"); // show the new project
      }
    });
    
    // Button 3
    $("#counters").click(function(){
      if (currentProject !== ".counters") {
        $(currentProject).hide("fast"); // hide the currently shown project
        currentProject = ".counters";
        $(currentProject).show("fast"); // show the new project
      }
    });
    
    // Button 4
    $("#comps").click(function(){
      if (currentProject !== ".comps") {
        $(currentProject).hide("fast"); // hide the currently shown project
        currentProject = ".comps";
        $(currentProject).show("fast"); // show the new project
      }
    });

    // Button 5
    $("#maps").click(function(){
      if (currentProject !== ".maps") {
        $(currentProject).hide("fast"); // hide the currently shown project
        currentProject = ".maps";
        $(currentProject).show("fast"); // show the new project
      }
    });
    
    // Hide all content sections
    $(".home, .profiles, .counters, .comps, .maps").hide();
    
}); 