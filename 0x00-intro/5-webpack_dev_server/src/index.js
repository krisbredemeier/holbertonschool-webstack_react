// const $ = require('jquery')
import $ from "jquery";

$(window).on('load', function() {
  console.log('Holberton School');
  // $("h1").html("Holberton School");
  $("body").after("<h1>Holberton School</h1>");
});
