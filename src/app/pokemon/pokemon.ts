import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon',
  imports: [ FormsModule, CommonModule ],
  templateUrl: './pokemon.html',
  styleUrl: './pokemon.css'

})
export class Pokemon {

  public nome:string = '';
  public img:string = '';
  public nomePesquisa = '';
  public altura : number= 0;
  public peso : number= 0;
  public hp : number=0;
  public tipo: string = '';

  constructor(private http:HttpClient){
      this.pesquisar()

    }
    
    public pesquisar(){
      this.http
      .get<any>('https://pokeapi.co/api/v2/pokemon/'+this.nomePesquisa)
      .subscribe(dados => {
        this.nome = dados.name;
        this.img = dados.sprites.front_default;
        this.altura = dados.height;
        this.peso = dados.weight;
        this.hp = dados.stats[0].base_stat;
        this.tipo = dados.types[0].type.name;

        console.log(dados);
      });
    }
  }