'use strict';

var accordion = document.getElementsByClassName('accordion')[0];
var accordionPanels = Array.from(accordion.getElementsByClassName('accordion__panel'));

function toggle(current) {
  if (current.classList.contains('active')) {
    current.classList.remove('active');
  } else {
    accordionPanels.forEach(function (panel) {
      if (panel === current) {
        panel.classList.add('active');
      } else {
        panel.classList.remove('active');
      }
    });
  }
}

accordionPanels.forEach(function (panel) {
  var button = panel.getElementsByClassName('accordion__button')[0];
  button.addEventListener('click', function () {
    toggle(panel);
  });
});
