import { Component, OnInit } from '@angular/core';
import { Form } from 'src/app/model/form';
import { VisaFormService } from 'src/app/services/visa-form.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-visa-form',
  templateUrl: './add-visa-form.component.html',
  styleUrls: ['./add-visa-form.component.css']
})
export class AddVisaFormComponent implements OnInit {
  //form: Form=new Form();

  constructor(private visaFormService: VisaFormService,
              private router: Router){ }

  ngOnInit(): void {
  }
  //saveForms(){
    //this.visaFormService.saveForms(this.form).subscribe(
    // data =>{
     // console.log('response',data);
     // this.router.navigateByUrl("/forms");
     //}
   //)
   //}

}
