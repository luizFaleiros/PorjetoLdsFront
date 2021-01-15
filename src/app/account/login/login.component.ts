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
    
      const result = this.accountService.login(this.login).subscribe(response =>{
      localStorage.setItem('token',response.headers.get('Authorization') || '');
      this.router.navigate(['']);
      });
      // navego para a rota vazia novamente

    
  }
}
