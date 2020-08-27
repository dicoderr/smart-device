'use strict';

var accordion = document.getElementsByClassName('accordion')[0];
var accordionPanels = Array.from(accordion.getElementsByClassName('accordion__panel'));

function toggle(panel) {
  if (panel.classList.contains('active')) {
    panel.classList.remove('active');
  } else {
    accordionPanels.forEach(function (p) {
      if (p === panel) {
        p.classList.add('active');
      } else {
        p.classList.remove('active');
      }
    });
  }
}

accordionPanels.forEach(function (p) {
  var button = p.getElementsByClassName('accordion__button')[0];
  button.addEventListener('click', function () {
    toggle(p);
  });
});
