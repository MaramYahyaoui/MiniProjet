import { Injectable } from '@angular/core';
import { Categorie } from '../model/categorie.model';
import { Makeup } from '../model/makeup.model';



@Injectable({
  providedIn: 'root'
})
export class MakeupService {
  makeup : Makeup[]; 
  categories : Categorie[];
  Makeup : Makeup
  categorie = new Categorie();
  makeupRecherche: Makeup[];
  rechercherParCategorie(idCat: number): Makeup[]{
    this.makeupRecherche = [];
    this.makeup.forEach((cur, index) => {
    if(idCat == cur.categorie.idCat) {
    console.log("cur "+cur);
    this.makeupRecherche.push(cur);
    }
  });
  return this.makeupRecherche; }
  constructor() { 

    this.categories = [ {idCat : 1, nomCat : "FOUNDATION "},
      {idCat : 2, nomCat : "EYESHADOWS"},
      {idCat : 3, nomCat : "LIPSTICK"},
      {idCat : 4, nomCat : "CONTURING"},
      {idCat : 5, nomCat : "MASCARA"},
      {idCat : 6, nomCat : "CONCEALER"}
    ];
    this.makeup= [
      {idMakeup : 1, nomMakeup : "FIT ME  ", prixMakeup : 150.900, dateCreation : new Date("01/14/2018"),categorie:{idCat : 1, nomCat : "FOUNDATION"}},
      {idMakeup : 2, nomMakeup : "RELOADED MAXI ", prixMakeup : 250, dateCreation : new Date("12/17/2018"),categorie:{idCat : 2, nomCat : "EYESHADOWS"}},
      {idMakeup : 3, nomMakeup :"I LOVE EXTREME  ", prixMakeup : 120, dateCreation : new Date("02/20/2019"),categorie:{idCat : 5, nomCat : "MASCARA"}},
      {idMakeup : 4, nomMakeup :"LUXY CONTOUR PALETE ", prixMakeup : 90, dateCreation : new Date("02/20/2019"),categorie:{idCat : 4, nomCat : "CONTURING"}}
      ];
  }
  listeMakeup():Makeup[]{
    return this.makeup;

  }
  ajouterMakeup( makeup: Makeup){
    this.makeup.push(makeup);
  }
    supprimerMakeup( prod: Makeup){
      //supprimer le produit prod du tableau produits
      const index = this.makeup.indexOf(prod, 0);
      if (index > -1) {
      this.makeup.splice(index, 1);
      }
      //ou Bien
      /* this.produits.forEach((cur, index) => {
      if(prod.idProduit === cur.idProduit) {
      this.produits.splice(index, 1);
      }
      }); */
      }

      consulterMakeup(id:number): Makeup{
        this.Makeup = this.makeup.find(p => p.idMakeup == id);
        return this.Makeup;
        
        }
        
        updateMakeup(p:Makeup)
      {
      // console.log(p);
        this.supprimerMakeup(p);
        this.ajouterMakeup(p);
        
          }

          listeCategories():Categorie[] {
            return this.categories;
            }
            consulterCategorie(id:number): Categorie{
            this.categorie = this.categories.find(cat => cat.idCat == id);
            return this.categorie;
            }
}
