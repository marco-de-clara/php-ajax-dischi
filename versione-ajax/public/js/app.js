/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  $.ajax({
    'url': 'public/php/dischi.php',
    'method': 'GET',
    'success': function success(dischi) {
      // get html from record card template
      var template_record_html = $('#record-card').html(); // ready the function

      var template_function = Handlebars.compile(template_record_html);

      for (var i = 0; i < dischi.length; i++) {
        // get current disc
        var disco = dischi[i];
        console.log(disco); // set the object inside the template

        var template_final = template_function(disco); // append card to container

        $('.records-wrapper').append(template_final);
      }
    },
    'error': function error() {
      console.log('si è verificato un errore');
    }
  });
  $('#genre').change(function () {
    // get chosen genre
    var chosen_genre = $('#genre :selected').val(); // loop for the number of records to show a specific genre

    for (var i = 0; i < $('.record').length; i++) {
      if (chosen_genre != '') {
        // if the chosen genre isn't 'All'
        if (chosen_genre != 'all') {
          // get current record genre 
          var record_genre = $('.genre').eq(i).text().toLowerCase(); // if current record genre equals chosen genre

          if (record_genre == chosen_genre) {
            // show that record
            $('.genre').eq(i).parent().addClass('active');
          } else {
            // hide that record
            $('.genre').eq(i).parent().removeClass('active');
          } // if chosen genre is 'All'

        } else {
          // show every record
          $('.genre').eq(i).parent().addClass('active');
        }
      }
    } // get first value from select


    var first_option = $('#genre option:first'); // set first value to genre select

    $('#genre').val(first_option.val());
  });
  $('#artist').change(function () {
    // get chosen artist
    var chosen_artist = $('#artist :selected').val(); // loop for the number of artists to show a specific artist

    for (var i = 0; i < $('#artist option').length; i++) {
      if (chosen_artist != '') {
        // if the chosen artist isn't 'All'
        if (chosen_artist != 'all') {
          // get current record artist 
          var record_artist = $('.author').eq(i).text().toLowerCase(); // if current record artist equals chosen artist

          if (record_artist == chosen_artist) {
            // show that record
            $('.author').eq(i).parent().addClass('active');
          } else {
            // hide that record
            $('.author').eq(i).parent().removeClass('active');
          } // if chosen artist is 'All'

        } else {
          // show every record
          $('.author').eq(i).parent().addClass('active');
        }
      }
    } // get first value from select


    var first_option = $('#artist option:first'); // set first value to artist select

    $('#artist').val(first_option.val());
  });
});

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************!*\
  !*** multi ./src/js/app.js ./src/scss/app.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! E:\MAMP\htdocs\php-ajax-dischi\versione-ajax\src\js\app.js */"./src/js/app.js");
module.exports = __webpack_require__(/*! E:\MAMP\htdocs\php-ajax-dischi\versione-ajax\src\scss\app.scss */"./src/scss/app.scss");


/***/ })

/******/ });