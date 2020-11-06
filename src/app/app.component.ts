import { Component, OnInit } from '@angular/core';
import { MainSideBarMenuService } from './services/core/main-side-bar-menu.service';
import { MainTopBarMenuService } from './services/core/main-top-bar-menu.service';

declare var App:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private menuSvc:MainTopBarMenuService, private menuSvc1:MainSideBarMenuService){

  }



  title = 'app-real-time';
  miEmpresa = 'Grupo Flecha Amarilla';
  periodo = 2020;

  menuItems:any[] = [];
  sidebarItems:any[] = [];

  ngOnInit(){
    //Load Sidebar Script
    App.init();
    //Load Data
    this.getData();
  }

  getData() {
    this.menuSvc.getItemsMenu().subscribe((data:any) => {
      //Async
      this.menuItems = data;
    })
    this.menuSvc1.getItemsSidebar().subscribe((data:any) => {
      //Async
      this.sidebarItems = data;
    })
  }


  listenChildMenuEvent(eventArgs:any){
    console.log("el indice seleccionado en el papá es: ", eventArgs.index);
    console.log("el item es: ", eventArgs.name);
  }

  listenChildSidebarEvent(eventArgs:any){
    console.log("el indice seleccionado en el papá es: ", eventArgs.index);
    console.log("el item es: ", eventArgs.name);
  }

}
