// export class App {
//   message = 'Welcome to Aurelia!';
// }
import {inject} from 'aurelia-framework';
import {DependencyTest} from './dependency-test';

@inject(DependencyTest)

export class App {
   constructor(DependencyTest) {
      console.log(DependencyTest);
   }
}
