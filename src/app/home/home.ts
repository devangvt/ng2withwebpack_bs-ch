import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {Http} from 'angular2/http';

import {Title} from './providers/title';
import {XLarge} from './directives/x-large';
import {Alert} from 'ng2-bootstrap/ng2-bootstrap';
import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'app'
  selector: 'home',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    Title
  ],
  // We need to tell Angular's compiler which directives are in our template.
  // Doing so will allow Angular to attach our behavior to an element//, CHART_DIRECTIVES
  directives: [
    ...FORM_DIRECTIVES,
    XLarge, Alert, CHART_DIRECTIVES
  ],
  // We need to tell Angular's compiler which custom pipes are in our template.
  pipes: [ ],
  // Our list of styles in our component. We may add more to compose many styles together
  styles: [ require('./home.css') ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  template: require('./home.html')
})
export class Home {
  // TypeScript public modifiers
  constructor(public title: Title, public http: Http) {

  }
  public alerts: string[] = [];
  public types = ['success', 'info', 'warning', 'danger'];
  private barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    multiTooltipTemplate: '<%if (datasetLabel){%><%=datasetLabel %>: <%}%><%= value %>'
  };
  private barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  private barChartSeries = ['Series A', 'Series B'];
  public barChartType = 'Bar';
  private barChartLegend: boolean = true;

  private barChartData = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  addAlert() {
    let i = this.alerts.length;
    this.alerts.push(this.types[i]);
  } 

  ngOnInit() {
    console.log('hello Home component');
  }


  // events
  chartClicked(e: any) {
    console.log(e);
  }

  chartHovered(e: any) {
    console.log(e);
  }

}
