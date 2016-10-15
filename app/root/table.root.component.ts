import { Component, ElementRef, Input, OnInit } from '@angular/core';
	
@Component({
  	selector: 'table-root',
	templateUrl: 'html-template/table.component.html',
  	styleUrls: ['node_modules/bootstrap/dist/css/bootstrap.css'],
})
export class TableRootComponent  implements OnInit {
	
	@Input() headerColumn1: string;
	@Input() headerColumn2: string;
	@Input() headerColumn3: string;
	
	headerCol1: string;
	headerCol2: string;
	headerCol3: string;
	
	constructor(elm: ElementRef){
		this.headerColumn1 = elm.nativeElement.getAttribute('headerColumn1');
		this.headerColumn2 = elm.nativeElement.getAttribute('headerColumn2');
		this.headerColumn3 = elm.nativeElement.getAttribute('headerColumn3');
	}
		
	ngOnInit() {
		this.headerCol1 = this.headerColumn1;
		this.headerCol2 = this.headerColumn2;
		this.headerCol3 = this.headerColumn3;
	}
}