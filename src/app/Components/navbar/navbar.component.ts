import { Component, OnInit } from '@angular/core';
import { ConsultasService } from 'src/app/Services/consultas.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _gato:ConsultasService) { }

  ngOnInit(): void {

    this._gato.LlamaraWarnert();
  }

}
