import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {



  regForm!:FormGroup;

  constructor(private fb:FormBuilder,private router:Router) { }
  
   ngOnInit(): void {
    this.regForm = this.fb.group({
      username:['',[Validators.required]],
      email:['',[Validators.required]],
      password:['',[Validators.required]],
      phone:['',[Validators.required]],

    });
   

 
  }

  tosubmitreg() {
    if(this.regForm.valid){
      console.log(this.regForm.value);

    }
  }
  register(): void {
   
      alert("SuccessFully  Registered....")
      this.router.navigate(['/books']);
    
  }

  // const localData = localStorage.getItem('signupUsers');
  // if(localData!=null){
  //   this.signupUsers = JSON.parse(localData);
  // }

  signupUsers:any[]=[];
  signupobj:any ={
    username:'',
    email:'',
    password:'',
    phone:''


  };
  loginObj:any={
    email:'',
    password:''
  }
 
  // onLogin(){
  //   const isUserExist = this.signupUsers.find(m => m.email == this.loginObj.email && m.password ==this.loginObj.password);
  //   if(isUserExist != undefined){
  //     alert('user login successfully');
  //   }else{
  //     alert('wrong credentials');
  //   }
  // }
    onSignUp(){
      this.signupUsers.push(this.regForm.value);
      localStorage.setItem('signUpUsers',JSON.stringify(this.signupUsers));
    }

}
