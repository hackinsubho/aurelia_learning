export class App {
  email = '';
   password = '';
   options = [];
   selectedOption = {};

   signup() {
      var myUser = { email: this.email, password: this.password }
      console.log(myUser);
   };
   constructor() {
    this.options = [
      {id:1, text:'First'}, 
      {id:2, text:'Second'}, 
      {id:3, text:'Third'}
   ]; 
   this.selectedOption = this.options[0];
    this.isChecked = false;
 }
 submit() {
  console.log("isChecked: " + this.isChecked);
  console.log('checked: ' + this.selectedOption.id);
}
}
