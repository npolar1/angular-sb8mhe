import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreDocument
} from "@angular/fire/firestore";

import { Observable } from "rxjs";
@Injectable({
  providedIn: "root"
})

export class FirestoreService {
  constructor(private firestore: AngularFirestore) {
    console.log(`Constructor de Servicio`);
  }

  //Crea nueva entrega
  public createRow(data: {
    n: number;
    bolson: number;
    nombre: string;
    celular: string;
    miel: number
    tinto: number
    blanco: number
    yerba: number
    huevos: number
    campana: number;
    coments: string;
    monto: number;
    estado: boolean
    }) {
    return this.firestore.collection("entregas").add(data);
  }

  //Obtiene una entrega
  public getRow(documentId: string) {
    return this.firestore
      .collection("entregas")
      .doc(documentId)
      .snapshotChanges();
  }

  //Obtiene todas las entregas
  public getRows() {
    return this.firestore.collection("entregas").snapshotChanges();
  }

  //Actualiza una entrega
  public updateRow(documentId: string, data: any) {
    return this.firestore
      .collection("entregas")
      .doc(documentId)
      .set(data);
  }

  //Elimina una entrega
  public deleteRow(documentId: string) {
    return this.firestore
      .collection("entregas")
      .doc(documentId)
      .delete();
  }
}
