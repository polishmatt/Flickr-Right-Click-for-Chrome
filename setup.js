(function() {
"use strict";

if ((window.location.href+"").indexOf("sizes") == -1) {
  let covers = window.document.getElementsByClassName("facade-of-protection-neue");
  Array.prototype.slice.call(covers).forEach(cover => {
    cover.parentElement.removeChild(cover);
  });
}

})();
