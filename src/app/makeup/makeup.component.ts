import { Component, OnInit } from '@angular/core';
import { Makeup } from '../model/makeup.model';
import { AuthService } from '../services/auth.service';
import { MakeupService } from '../services/makeup.service';


@Component({
  selector: 'app-makeup',
  templateUrl: './makeup.component.html',
  styleUrls: ['./makeup.component.css']
})
export class MakeupComponent implements OnInit {
  makeup : Makeup[]; 

  constructor(private makeupService: MakeupService, public authService: AuthService ) {
    this.makeup = makeupService.listeMakeup();

  }

  ngOnInit(): void {
  }
  supprimerMakeup(prod:Makeup)
  {
    let conf = confirm("Are you sure ?");
    if (conf)
    this.makeupService.supprimerMakeup(prod);
  }

}
