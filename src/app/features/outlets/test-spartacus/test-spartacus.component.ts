import { ComapnyService } from './../../../store/company/company.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-test-spartacus',
  templateUrl: './test-spartacus.component.html',
  styleUrls: ['./test-spartacus.component.scss'],
})
export class TestSpartacusComponent {
  companies = ['IBM', 'APPLE', 'Microsoft', 'Google', 'META', 'AMAZON'];

  constructor(private comapnyService: ComapnyService) {}

  selectCompany(companyName: string) {
    this.comapnyService.addCompany(companyName);
  }
}
