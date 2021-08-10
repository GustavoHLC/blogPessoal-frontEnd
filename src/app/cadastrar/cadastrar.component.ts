import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  user: User = new User()
  confirmarSenha: string
  tipoUsu: string

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertas: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value
  }

  tipoUser(event: any){
    this.tipoUsu = event.target.value
  }

  cadastrar(){
    this.user.tipo = this.tipoUsu
    console.log(this.user)
    if(this.user.senha != this.confirmarSenha){
      this.alertas.showAlertDanger('As senhas são diferentes!')
    } else {
      this.authService.cadastrar(this.user).subscribe((resp: User) => {
        this.user = resp
        console.log(this.user)
        this.router.navigate(['/entrar'])
        this.alertas.showAlertSuccess('Usúario cadastrado com sucesso!')
      })
    }
  }
}
