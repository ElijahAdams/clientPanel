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
 totalBalance : number;

  constructor(private cs: ClientService) { }

  ngOnInit() {
    this.cs.getClients().subscribe(clients => {
      this.clients = clients;
      this.getTotalBalance();
    })
  }
 getTotalBalance() {
    this.totalBalance = this.clients.reduce((total, client) => {
      return total + client.balance;
    }, 0)

 }
}
