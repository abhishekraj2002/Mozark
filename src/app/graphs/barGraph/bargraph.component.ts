import { Component, OnInit } from '@angular/core';
import * as c3 from 'c3';

@Component({
  selector: 'app-bargraph',
  templateUrl: './bargraph.component.html',
  styleUrls: ['./bargraph.component.scss']
})
export class BargraphComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let chart = c3.generate({
      bindto: '.bar-chart',
      data: {
          columns: [
              ['data1', 30,10, 80,100],
          ],
          type: 'bar'
      },
      axis: {
        x: {
          label: {
              text: 'Scores',
              position: 'outer-left'
          }
      },
        y: {
          label: {
            text: 'Search execution time',
            position: 'outer-bottom'
        },
           
            // Range includes padding, set 0 if no padding needed
            padding: {top:40, bottom:0}
        }
    },
    grid: {
      lines: {
        front: false
      },
      y: {
        
          lines: [{value: 0},{value:10},{value:20},{value:30},{value:40},{value:50},{value:60},{value:70},{value:80},{value:90},{value:100},{value:110}]
          
      }
  },
      bar: {
          width: 15
      },
      size: {
        height:322,
        width:577
    },
    color: {
      pattern: ['#4880ff'], 
    }
  });
  }
  ngAfterViewInit(){
    // for(let i=0;i<=10;i++){
    //   if(i==10){
    //   document.getElementsByClassName('c3-chart-lines')[0].insertAdjacentHTML('afterbegin',` <line x1="20" y1="0" x2="1220" y2="0" style="stroke: gray;stroke-width: 0.2px;transform: translate(-9px, ${267}px);"></line>`);
    //   }else{
    //     document.getElementsByClassName('c3-chart-lines')[0].insertAdjacentHTML('afterbegin',` <line x1="20" y1="0" x2="1220" y2="0" style="stroke: gray;stroke-width: 0.2px;transform: translate(-9px, ${27*i}px);"></line>`);
    //   }
    // }
   
  }

}
