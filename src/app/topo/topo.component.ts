import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
  // styles: [`.exemplo {color:red}`]
})
export class TopoComponent implements OnInit {
  public  titulo: string = 'Aprendendo Inglês'
  constructor() { }

  ngOnInit(): void {
  }

}
