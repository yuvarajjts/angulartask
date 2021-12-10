import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  hide = true;

  logo:string="https://www.jorimts.com/wp-content/uploads/elementor/thumbs/cropped-Jorim-Logo-ox593kft3grjzt9qh737o2d5e8jpq233d10p4a6dgw.png";

  

  isLoading = false;
  toggle:boolean = true;
  
  toggleLoading = () => {
    this.isLoading= true;
  
    this.toggle = !this.toggle

    // setTimeout(()=>{
    //   this.isLoading = false;
    // }, 3000)
  };
 
  
  constructor() { }

  ngOnInit(): void {
  }

}
function msg(arg0: () => void, Loging: any) {
  throw new Error('Function not implemented.');
}

function Loging(arg0: () => void, Loging: any) {
  throw new Error('Function not implemented.');
}

