import { Component } from '@angular/core';
import { CompanyService } from 'src/app/store/company/company.service';
@Component({
  selector: 'app-test-spartacus',
  templateUrl: './test-spartacus.component.html',
  styleUrls: ['./test-spartacus.component.scss'],
})
export class TestSpartacusComponent {
  companies = ['IBM', 'APPLE', 'Microsoft', 'Google', 'META', 'AMAZON'];

  constructor(private comapnyService: CompanyService) {}

  selectCompany(companyName: string) {
    this.comapnyService.addCompany(companyName);
  }
}
