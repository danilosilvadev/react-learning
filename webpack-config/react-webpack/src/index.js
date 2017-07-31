import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import Library from './library';


function component() {
  var element = document.createElement('div');

// Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
// Add the image to our existing div.
   var myIcon = new Image();
   myIcon.src = Icon;
   element.appendChild(myIcon);
  return element;
}

if (module.hot) {
  module.hot.accept('./library', function() {
    console.log('Accepting the updated library module!');
    Library.log();
  })
}

document.body.appendChild(component());