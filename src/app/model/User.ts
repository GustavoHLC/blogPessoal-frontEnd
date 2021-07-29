import { Postagem } from "./Postagem";

 export class User {
  public id: number;
  public nome: string;
  public login: string;
  public senha: string;
  public dataNascimento: Date;
  public foto: string;
  public tipo: string;
  public postagem: Postagem[];
}
