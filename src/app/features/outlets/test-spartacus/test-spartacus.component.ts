import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-test-spartacus',
  templateUrl: './test-spartacus.component.html',
  styleUrls: ['./test-spartacus.component.scss'],
})
export class TestSpartacusComponent implements OnInit, OnChanges, OnDestroy {
  @Input() value;
  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('its called second and once');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('its called first and on every value change', changes);
  }

  ngOnDestroy(): void {
    console.log('its called last');
  }
}
