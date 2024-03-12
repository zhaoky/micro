import * as singleSpa from 'single-spa';

const pathPrefix = prefix => location => location.pathname.startsWith(prefix);

singleSpa.registerApplication('app-1', (v) => import('../app1/app1.js'), pathPrefix('/app1'), { content: 'app1111111' });
singleSpa.registerApplication('app-2', () => import('../app2/app2.js'), pathPrefix('/app2'), { content: 'app2222222' });
console.log('start');
singleSpa.start();

