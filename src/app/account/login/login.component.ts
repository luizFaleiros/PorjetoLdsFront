import { Router } from '@angular/router';
import { AccountService } from './../shared/account.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Login } from '../shared/Login.interface';
import { AuthTokenService } from '../shared/auth-token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() usuarioAutenticado = false;
  @Output() showMenu = new EventEmitter<boolean>();
  login = {
    email: '',
    password: ''
  } as Login;

  constructor(
    private accountService: AccountService,
    private router: Router,
    private tokenService: AuthTokenService
  ) { }

  ngOnInit(): void {
    if(localStorage.getItem("token")){
      this.router.navigate(['']);
    }
  }

  async onSubmit(){

      const result = this.accountService.login(this.login).subscribe(response =>{
      this.tokenService.setToken(response.headers.get('Authorization') || '');
      this.usuarioAutenticado = true;
      this.showMenu.emit(this.usuarioAutenticado);
      this.router.navigate(['']);
      });
      // navego para a rota vazia novamente


  }
}
