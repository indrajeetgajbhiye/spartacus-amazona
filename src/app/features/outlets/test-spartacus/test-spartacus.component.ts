import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
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
  @Input() value;

  ngOnInit(): void {
    console.log('its called second and once');
    this.quantity$.subscribe((data) => {
      console.log('its called second and once', data);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('its called first and on every value change', changes);
  }

  ngOnDestroy(): void {
    console.log('its called last');
  }
}
