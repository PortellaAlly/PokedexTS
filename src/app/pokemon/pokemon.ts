import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pokemon',
  imports: [ FormsModule ],
  templateUrl: './pokemon.html',
  styleUrl: './pokemon.css'

})
export class Pokemon {

  public nome:string = '';
  public img:string = '';
  public nomePesquisa = '';

  constructor(private http:HttpClient){
      this.pesquisar()

    }
    
    public pesquisar(){
      this.http
      .get<any>('https://pokeapi.co/api/v2/pokemon/'+this.nomePesquisa)
      .subscribe(dados => {
        this.nome = dados.name;
        this.img = dados.sprites.front_default;
        console.log(dados);
      });
    }
  }


