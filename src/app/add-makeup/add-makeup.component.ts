import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from '../model/categorie.model';
import { Makeup } from '../model/makeup.model';
import { MakeupService } from '../services/makeup.service';


@Component({
  selector: 'app-add-makeup',
  templateUrl: './add-makeup.component.html',
  styleUrls: ['./add-makeup.component.css']
})
export class AddMakeupComponent implements OnInit {

  newMakeup = new Makeup();

  msg : String;

  categories : Categorie[];
  newIdCat : number;
  newCategorie : Categorie;

  constructor(private makeupService: MakeupService , private router : Router) {

  }

  ngOnInit(): void {

    this.categories = this.makeupService.listeCategories();
  }
  addMakeup(){
    this.newCategorie = this.makeupService.consulterCategorie(this.newIdCat);
this.newMakeup.categorie = this.newCategorie;
    this.makeupService.ajouterMakeup(this.newMakeup);
    this.router.navigate(['makeup']);
    //this.msg="Makeup  "+ this.newMakeup.nomMakeup+"add it successfully";
  }

}
