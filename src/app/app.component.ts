import { Component } from '@angular/core';

interface Heading {
  title: string;
  alignment: 'start' | 'end';
}

interface RowData {
  data: Cell[];
}

interface Cell {
  data: string;
  subData?: string;
  action: boolean;
}

export interface TableWrapperModel {
  headings: Heading[];
  dataRows: RowData[];
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'table-wrapper-test';

  tableWrapperModel?: TableWrapperModel = {
    headings: [
      {
        title: 'Name',
        alignment: 'start',
      },
      {
        title: 'Age',
        alignment: 'end',
      },
    ],
    dataRows: [
      {
        data: [
          {
            data: 'Lærke',
            action: false,
          },
          {
            data: '24',
            action: false,
          },
          {
            data: 'toggle',
            action: true,
          },
        ],
      },
      {
        data: [
          {
            data: 'Sigurd',
            action: false,
          },
          {
            data: '27',
            action: false,
          },
          {
            data: 'toggle',
            action: true,
          },
        ],
      },
      {
        data: [
          {
            data: 'Joachim',
            action: false,
          },
          {
            data: '28',
            action: false,
          },
          {
            data: 'toggle',
            action: true,
          },
        ],
      },
    ],
  };
}
