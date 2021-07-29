import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar(userLogin: UserLogin){
    return this.http.post('https://blogpessoalguugs.herokuapp.com/usuarios/logar', userLogin)
  }

  cadastrar(user: User){
    return this.http.post('https://blogpessoalguugs.herokuapp.com/usuarios/cadastrar', user)
  }
}
