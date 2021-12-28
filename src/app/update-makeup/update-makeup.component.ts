import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from '../model/categorie.model';
import { Makeup } from '../model/makeup.model';
import { MakeupService } from '../services/makeup.service';
@Component({
  selector: 'app-update-makeup',
  templateUrl: './update-makeup.component.html',
  styles: [
  ]
})
export class UpdateMakeupComponent implements OnInit {
  currentMakeup = new Makeup()
  categories : Categorie[];
  updatedCategorie : Categorie;
  constructor
  (private activatedRoute: ActivatedRoute,
    private router :Router,
    private makeupService: MakeupService) 
    { }

  ngOnInit(): void {
    this.categories = this.makeupService.listeCategories();
    
    this.currentMakeup = this.makeupService.consulterMakeup(this.activatedRoute.snapshot.params.id);
    console.log(this.currentMakeup);


  }
  updateMakeup()
{ 
  this.updatedCategorie =
  this.makeupService.consulterCategorie(this.currentMakeup.categorie.idCat);
  this.currentMakeup.categorie = this.updatedCategorie;
  this.makeupService.updateMakeup(this.currentMakeup);
  this.router.navigate(['makeup']);
}
  

}
