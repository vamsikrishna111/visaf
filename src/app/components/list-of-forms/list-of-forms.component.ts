import { Component, OnInit } from '@angular/core';
import { Form } from 'src/app/model/form';
import { VisaFormService } from 'src/app/services/visa-form.service';

@Component({
  selector: 'app-list-of-forms',
  templateUrl: './list-of-forms.component.html',
  styleUrls: ['./list-of-forms.component.css']
})
export class ListOfFormsComponent implements OnInit {
  //Forms: Form[]=[];

  constructor(private visaFormService: VisaFormService) { }

  ngOnInit(): void {
    //this.visaFormService.getForms().subscribe(data=>this.Forms=data)
  }

}

