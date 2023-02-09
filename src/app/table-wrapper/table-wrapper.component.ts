import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableWrapperModel } from '../app.component';

@Component({
  selector: 'app-table-wrapper',
  templateUrl: './table-wrapper.component.html',
  styleUrls: ['./table-wrapper.component.scss'],
})
export class TableWrapperComponent implements OnInit {
  @Output() actionRowPressed = new EventEmitter<number>();

  @Input() tableWrapperModel?: TableWrapperModel;

  constructor() {}

  ngOnInit(): void {}
}
