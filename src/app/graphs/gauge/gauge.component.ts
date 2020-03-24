import { Component, OnInit, Input } from '@angular/core';
import * as c3 from 'c3';
import { GlobalService } from 'src/app/services/global.service';
@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.css']
})
export class GaugeComponent implements OnInit {
 @Input() listData:any;
 @Input() index:any;
  constructor(private globalService : GlobalService) { }
  public response:any;
  public array:Array<any>=[];
 
  ngAfterViewInit(){
    let obj = {
      dataValue:this.listData.value[0].StreamingScore.toFixed(2),
      min:0,
      max:5,
      name:'Airtel',
      ind: this.listData._id
    };
    this.assignToGraph(obj);
  }
  ngOnInit() {}
 
  assignToGraph({ dataValue, min, max, name,ind }): any {
    let parent_id: any;
    for (let i = 1; i <= this.index; i++) {
      if(i==ind){
      parent_id = document.getElementsByClassName('card-graph')[i];
      let chart = c3.generate({
        bindto: document.getElementsByClassName('card-graph')[i],
        data: {
          columns: [
            ['data', dataValue]
          ],
          type: 'gauge',
          onclick: function (d, i) { },
          onmouseover: function (d, i) { },
          onmouseout: function (d, i) { }
        },
        gauge: {
          label: {
            format: function (value, ratio) {
              return value;
            },
            show: false,
          },
          min,
          max,
          width: 5
        },
        color: {
          pattern: ['red', 'orange', 'green'],
          threshold: {
            values: [2, 3, 5]
          }
        },
        size: {
          height: 108
        },
      });
      parent_id.getElementsByTagName('g')[1].insertAdjacentHTML('afterend', `<g class="custom_label" transform="" style="display:flex; transform:translate(45px, 82px)"><rect x="0" y="0" width="80" height="20" style="fill:#F0FDFF;opacity:1;"></rect><text x="40" y="15" id="text" style="text-anchor:middle;" font-family="Gotham Book" font-size="12" fill="#14BED2">${name}</text></g>`);
    }
    }
  }
  ngDoCheck() {
    for (let i = 0; i < this.index; i++) {
      let bar: any = document.getElementsByClassName(' c3-shape c3-shape c3-arc c3-arc-data')[i];
      bar ? bar.style.stroke = '' : '';
      let bottomBar: any = document.getElementsByClassName('c3-legend-item c3-legend-item-data') ? document.getElementsByClassName('c3-legend-item c3-legend-item-data')[i] : '';
      bottomBar ? bottomBar.style.display = 'none' : '';
      let el: any = document.getElementsByClassName('c3-gauge-value')[i];
      el ? el.style.fill = bar.style.fill : '';
      let arcEl: any = document.getElementsByClassName('c3-shapes c3-shapes-data c3-arcs c3-arcs-data')[i];
      arcEl ? arcEl.style.transform = 'scaleY(1.09)' : '';
      arcEl ? arcEl.style.pointerEvents = 'none' : '';
    }
  }
}

