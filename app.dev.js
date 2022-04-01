"use strict";

var showAdvice = function showAdvice() {
  var res, data;
  return regeneratorRuntime.async(function showAdvice$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch("https://api.adviceslip.com/advice"));

        case 2:
          res = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(res.json());

        case 5:
          data = _context.sent;
          console.log(data);
          document.getElementById("adv-ID").innerHTML = "advice # ".concat(data.slip.id);
          document.querySelector(".adv-text").innerHTML = "\"".concat(data.slip.advice, "\"");

        case 9:
        case "end":
          return _context.stop();
      }
    }
  });
};

showAdvice();