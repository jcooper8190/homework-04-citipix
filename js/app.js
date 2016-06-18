$(function(){

// print background based on text entered.
// text must be the name of a city.
// city name has a class matching that city name in css. 
// reset background with new submission.
 
// listen for user clicking 'submit'/submitting text
$("#submit-btn").click(changeBackground);
 
function changeBackground(event) {
 
  event.preventDefault();
 
  //text entry - basically tells js to read what is in the input box (class of 'city-type')
  var city = $("#city-type").val();
  
  //match entry with proper css class (name of city)
  
  if(city === "NYC" || city === "new york city" || city === "new york" || city === "New York" || city === "New York City" || city === "nyc"){
      $("body").attr("class", "nyc");
  }
  
  else if(city === "SF" || city === "san francisco" || city === "bay area" || city === "Bay Area" || city === "San Francisco" || city === "sf"){
      $("body").attr("class", "sf");
  }
  
  else if(city === "LA" || city === "los angeles" || city === "LAX" || city === "la" || city === "Los Angeles"){
      $("body").attr("class", "la");
  }
  
  else if(city === "ATX" || city === "austin" || city === "Austin" || city === "atx"){
      $("body").attr("class", "austin");
  }
  
  else if(city === "SYD" || city === "sydney" || city === "Sydney" || city === "syd"){
      $("body").attr("class", "sydney");
  }
  // changes to default background images if input does not match any other city
  else{
      $("body").attr("class", "");
  }
 
 
  }
}); 