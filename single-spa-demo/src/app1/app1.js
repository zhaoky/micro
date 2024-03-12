import React from 'react';
import ReactDOMClient from 'react-dom/client';
import singleSpaReact from 'single-spa-react';
import Root from './root.component.tsx';
console.log('app1');
const reactLifecycles = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: Root,
  domElementGetter,
});

export function bootstrap(props) {
  console.log('app1bootstrap',props);
  return reactLifecycles.bootstrap(props);
}

export function mount(props) {
  console.log('app1mount',props);
  return reactLifecycles.mount(props);
}

export function unmount(props) {
  console.log('app1unmount',props);
  return reactLifecycles.unmount(props);
}

function domElementGetter() {
  // Make sure there is a div for us to render into
  let el = document.getElementById('app1');
  if (!el) {
    el = document.createElement('div');
    el.id = 'app1';
    document.body.appendChild(el);
  }

  return el;
}
