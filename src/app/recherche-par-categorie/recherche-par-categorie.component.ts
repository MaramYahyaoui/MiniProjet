import { Component, OnInit } from '@angular/core';
import { Categorie } from '../model/categorie.model';
import { Makeup } from '../model/makeup.model';
import { MakeupService } from '../services/makeup.service';

@Component({
  selector: 'app-recherche-par-categorie',
  templateUrl: './recherche-par-categorie.component.html',
  styles: [
  ]
})
export class RechercheParCategorieComponent implements OnInit {

  makeup : Makeup[];
  categories: Categorie[];
  IdCategorie: number;
  constructor(private makeupService: MakeupService) { }

  ngOnInit(): void {
    this.categories=this.makeupService.listeCategories();
    this.makeup=[];
  }
  onChange() {
    console.log(this.IdCategorie);
    this.makeup = this.makeupService.rechercherParCategorie(this.IdCategorie);
    }
    supprimerMakeup(prod:Makeup)
    {
      let conf = confirm("Are you sure ?");
      if (conf)
      this.makeupService.supprimerMakeup(prod);
    }
}
