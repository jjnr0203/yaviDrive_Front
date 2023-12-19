import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrl: './receipt.component.css'
})

export class ReceiptComponent {
  userId = this.activatedRouter.snapshot.params['id']
  recibo: any = {} ;

  constructor(protected  httpClient: HttpClient,protected  router: Router,private activatedRouter: ActivatedRoute) {
    this.getReceipt();
  }

    getReceipt() {
    this.httpClient.get('http://localhost:3000/receipt/'+ this.userId).subscribe((respuesta: any) => {
        this.recibo = respuesta;
        console.log(this.recibo);
      });
  }
  descargarPDF() {
    this.httpClient.get(`http://localhost:3000/receipt/download/` + this.userId, { responseType: 'arraybuffer' })
      .subscribe((data: ArrayBuffer) => {
        const blob = new Blob([data], { type: 'application/pdf' });

        // Crea un enlace temporal y simula un clic para descargar el PDF
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'registro.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, error => {
        console.error('Error al descargar el PDF:', error);
      });
  }

}
