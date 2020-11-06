import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'navigation-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() titleMenu: string = "";
  @Input() subtitleMenu: string = "";
  @Input() mainIconMenu: string = "fa-cogs";
  @Input() sidebarItems:any[] = [];
  @Output() onClickSidebar: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onclick_sidebar(index: number, item: any) {
    this.onClickSidebar.emit({
      index: index,
      name: item.title
    })
  }

}
