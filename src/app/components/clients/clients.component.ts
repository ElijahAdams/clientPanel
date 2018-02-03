import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../Models/Client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
 clients: Client[];

  constructor(private cs: ClientService) { }

  ngOnInit() {
    this.cs.getClients().subscribe(clients => {
      this.clients = clients;
    })
  }

}
