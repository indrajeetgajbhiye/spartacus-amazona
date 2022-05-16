import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { MiniCartComponent } from '@spartacus/storefront';

@Component({
  selector: 'app-test-spartacus',
  templateUrl: './test-spartacus.component.html',
  styleUrls: ['./test-spartacus.component.scss'],
})
export class TestSpartacusComponent
  extends MiniCartComponent
  implements OnInit, OnChanges, OnDestroy
{
  @Input() valuechild;
  @Output() valueChanged = new EventEmitter();
  ngOnInit(): void {
    console.log('its called second and once');
    this.quantity$.subscribe((data) => {
      console.log('its called second and once', data);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('its called first and on every value change', changes);
    this.valueChanged.emit(changes.valuechild.currentValue);
  }

  ngOnDestroy(): void {
    console.log('its called last');
  }
}
