import _ from 'lodash';
import './style.css';
import camera from './openvidu_camera.js';
import view from './openvidu_view.js';

function component() {
    let element = document.createElement('div');

    var cam_btn = document.createElement('button');
    var view_btn = document.createElement('button');
  
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    cam_btn.innerHTML = 'Click camera and check the console!';
    cam_btn.onclick = camera;
    view_btn.innerHTML = 'Click view and check the console!';
    view_btn.onclick = view;
  
    element.appendChild(cam_btn);
    element.appendChild(view_btn);

    return element;
  }
  
  document.body.appendChild(component());