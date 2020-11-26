import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  step: number;
  btnString: string;
  fillPorcent: any;

  validUrl: boolean;

  constructor( private router: Router) { }

  ngOnInit(): void {
    this.step = 1;
    this.btnString = 'Continuar';
    this.fillPorcent = 100 / 3;
    this.validUrl = true;
    this.validarUrl();
  }

  validarUrl() {
    if(!this.validUrl) {
      this.router.navigate(['not-avaible'], {skipLocationChange: true});
    }
  }

  nextStep() {
      this.step++;
      this.fillPorcent = (100/3) * this.step;
  }

  prevStep() {
    this.step--;
    this.fillPorcent = this.fillPorcent - (100/3);
  }

  finishSteps() {
    console.log('finish!!');
    this.router.navigate(['finish'], {skipLocationChange: true});
  }

}
