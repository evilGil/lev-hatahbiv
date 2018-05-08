import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-minus-plus-button',
  templateUrl: './minus-plus-button.component.html',
  styleUrls: ['./minus-plus-button.component.scss']
})
export class MinusPlusButtonComponent implements OnInit {
  @Input() startVal: number = 1;
  @Input() min: number = 0;
  @Input() max: number = 999;
  @Output() valueChanged = new EventEmitter();

  public value: number;
  private oldValue: number;

  constructor() {
  }

  ngOnInit() {
    if (this.startVal < this.min) {
      this.value = this.min;
    }
    else if (this.startVal > this.max) {
      this.value = this.max;
    }
    else {
      this.value = this.startVal;
    }
    this.oldValue = this.value;
  }

  minusClicked() {
    if (this.value > this.min) {
      this.value--;
      this.oldValue = this.value;
      this.valueChanged.emit(this.value);
    }
  }

  plusClicked() {
    if (this.value < this.max) {
      this.value++;
      this.oldValue = this.value;
      this.valueChanged.emit(this.value);
    }
  }

  onKeyUp(newValue) {
    if (newValue != this.oldValue) {
      this.oldValue = this.value;
      this.valueChanged.emit(this.value);
    }
  }

}
