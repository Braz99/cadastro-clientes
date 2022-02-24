import Client from "../../core/Client";
import ClientsRepository from "../../core/ClientsRepository";
import {
  getFirestore,
  QueryDocumentSnapshot,
  SnapshotOptions,
  getDocs,
  doc,
  addDoc,
  setDoc,
  deleteDoc,
  collection,
} from "firebase/firestore";

import app from "../config";

export default class ClientCollection implements ClientsRepository {
  #conver = {
    toFireBase(client: Client) {
      return {
        name: client.name,
        age: client.age,
      };
    },
    fromFirestore(
      snapshot: QueryDocumentSnapshot,
      options: SnapshotOptions
    ): Client {
      const data = snapshot.data(options);
      return new Client(data.name, data.age, snapshot.id);
    },
  };

  async saveClient(client: Client): Promise<Client> {
    const db = getFirestore();
    if (client.id) {
      let clientRef = doc(db, "clients", client.id);
      setDoc(clientRef, {
        name: client.name,
        age: client.age,
      });
      return client;
    } else {
      addDoc(this.collections(), {
        name: client.name,
        age: client.age,
      });

      return client;
    }
  }

  async removeClient(client: Client): Promise<void> {
    const db = getFirestore();
    const clientRef = doc(db, "clients", client.id);
    deleteDoc(clientRef);
  }

  async showAllClients(): Promise<Client[]> {
    let clients = await getDocs(this.collections()).then((snapshot) => {
      let clientsArray: any = [];

      snapshot.docs.forEach((client) => {
        clientsArray.push({ ...client.data(), id: client.id });
      });

      return clientsArray ?? [];
    });
    return clients;
  }

  collections() {
    const db = getFirestore(app());
    const clientRef = collection(db, "clients").withConverter(this.#conver[0]);
    return clientRef;
  }
}
