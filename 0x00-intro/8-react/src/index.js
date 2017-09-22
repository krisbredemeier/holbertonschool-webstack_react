// const $ = require('jquery')
// import $ from "jquery";
//
// $(window).on('load', function() {
//   $("body").after( $("<h1 id=\'header1\'>HolbertonSchool</h1>").hide());
//   $("body").after( $("<h1 id=\'header2\'>HBTN</h1>").hide());
//
//   function show_second_h1() {
//     $("#header1").hide();
//     $("#header2").show();
//     setTimeout(show_first_h1,2000);
//   }
//
//   function show_first_h1() {
//     $("#header1").show();
//     $("#header2").hide();
//     setTimeout(show_second_h1,2000);
//   }
//   setTimeout(show_second_h1,2000);
// });

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

ReactDOM.render(<App />, document.getElementById('root'));
