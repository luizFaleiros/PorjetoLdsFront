import { Router } from '@angular/router';
import { AccountService } from './../shared/account.service';
import { Component, OnInit } from '@angular/core';
import { Login } from '../shared/Login.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = {
    email: '',
    password: ''
  } as Login;

  constructor(
    private accountService: AccountService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  async onSubmit(){
    try{
      const result = this.accountService.login(this.login).subscribe(response =>{
      localStorage.setItem('token',response.headers.get('Authorization') || '');
      });
      // navego para a rota vazia novamente
      this.router.navigate(['']);
    } catch (error){
      console.error(error);
    }
  }
}
