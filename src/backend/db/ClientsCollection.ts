import Client from "../../core/Client";
import ClientsRepository from "../../core/ClientsRepository";
import * as firestore from "firebase/firestore";
import firebase from "../config";

export default class ClientCollection implements ClientsRepository {
  #conver = {
    toFireBase(client: Client) {
      return {
        name: client.name,
        age: client.age,
      };
    },
    fromFirestore(
      snapshot: firestore.QueryDocumentSnapshot,
      options: firestore.SnapshotOptions
    ): Client {
      const data = snapshot.data(options);
      return new Client(data.name, data.age, snapshot.id);
    },
  };

  async saveClient(client: Client): Promise<Client> {
    const db = firestore.getFirestore();
    if (client.id) {
      let clientRef = firestore.doc(db, "clients", client.id);
      firestore.setDoc(clientRef, {
        name: client.name,
        age: client.age,
      });
      return client;
    } else {
      firestore.addDoc(this.collections(), {
        name: client.name,
        age: client.age,
      });

      return client;
    }
  }

  async removeClient(client: Client): Promise<void> {
    const db = firestore.getFirestore();
    const clientRef = firestore.doc(db, "clients", client.id);
    firestore.deleteDoc(clientRef);
  }

  async showAllClients(): Promise<Client[]> {
    let clients = firestore.getDocs(this.collections()).then((snapshot) => {
      let clientsArray: any = [];

      snapshot.docs.forEach((client) => {
        clientsArray.push({ ...client.data(), id: client.id });
      });

      return clientsArray ?? [];
    });

    console.log(clients.then((i) => console.log(i)));

    return clients;
  }

  collections() {
    const db = firestore.getFirestore(firebase.getApp());
    const clientRef = firestore
      .collection(db, "clients")
      .withConverter(this.#conver[0]);

    return clientRef;
  }
}
