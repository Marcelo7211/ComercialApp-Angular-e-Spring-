import { OportunidadeServiceService } from './../../service/oportunidade-service.service';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api'


@Component({
  selector: 'app-painel-negociacao',
  templateUrl: './painel-negociacao.component.html',
  styleUrls: ['./painel-negociacao.component.css']
})
export class PainelNegociacaoComponent implements OnInit {

  oportunidade = {};
  oportunidades = [];

  constructor(private opService: OportunidadeServiceService, private message: MessageService) { };

  ngOnInit() {
    this.consultar();
  }


  consultar() {
    this.opService.findAll()
      .subscribe(resposta => this.oportunidades = <any>resposta);
  }

  adcionar(){
    this.opService.post(this.oportunidade).subscribe(() => {
      this.oportunidade = {};
      this.consultar();

      this.message.add({
        severity: "success",
        summary: "Oportunidade gravada!!"
      });
    },(error: any) => {
      this.message.add({
        severity: "error",
        summary: "Oportunidade não gravada!!"
      })
    });
  }

}
