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
  public tipo1: string = '';
  public tipo2: string = '';
  public ataque: number=0;
  public defesa: number=0;
  public agilidade: number=0;

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
        this.tipo1 = dados.types[0].type.name;
        this.tipo2 = dados.types.length > 1 ? dados.types[1].type.name : '';
        this.ataque = dados.stats[1].base_stat;
        this.defesa = dados.stats[2].base_stat;
        this.agilidade = dados.stats[5].base_stat;

        console.log(dados);
      });
    }
  }