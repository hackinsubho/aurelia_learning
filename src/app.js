// import 'fetch';
import {HttpClient, json} from 'aurelia-fetch-client';

let httpClient = new HttpClient();

export class App {
  message = 'Welcome to Aurelia!';

  getData() {
    httpClient.fetch('http://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => {
       console.log(data);
    });
 }
  myPostData = { 
    id: 101
 }

 postData(myPostData) {
    httpClient.fetch('http://jsonplaceholder.typicode.com/posts', {
       method: "POST",
       body: JSON.stringify(myPostData)
    })
  
    .then(response => response.json())
    .then(data => {
       console.log(data);
    });
 }
myUpdateData = {
      id: 1
   }
	
   updateData(myUpdateData) {
      httpClient.fetch('http://jsonplaceholder.typicode.com/posts/1', {
         method: "PUT",
         body: JSON.stringify(myUpdateData)
      })
		
      .then(response => response.json())
      .then(data => {
         console.log(data);
      });
   }

   deleteData() {
      httpClient.fetch('http://jsonplaceholder.typicode.com/posts/1', {
         method: "DELETE"
      })
      .then(response => response.json())
      .then(data => {
         console.log(data);
      });
   }
}
