import { useEffect, useState } from "react";
import ClientCollection from "../backend/db/ClientsCollection";
import ButtonApp from "../components/ButtonApp";
import FormClient from "../components/FormClient";
import Layout from "../components/Layout";
import TableClients from "../components/TableCients";
import Client from "../core/Client";
import ClientsRepository from "../core/ClientsRepository";

// interface items {
//   index: number;
//   value: string;
// }

// let letters: Array<items> = [
//   { index: 0, value: "e" },
//   { index: 1, value: "a" },
//   { index: 2, value: "g" },
//   { index: 3, value: "h" },
//   { index: 4, value: "i" },
//   { index: 5, value: "v" },
//   { index: 6, value: "z" },
//   { index: 7, value: "b" },
//   { index: 8, value: "x" },
//   { index: 9, value: "y" },
// ];

export default function Home() {
  // function l() {
  //   let number = Math.trunc(Math.random() * 10);
  //   let [b] = letters.filter((item) => item.index === number);
  //   return b;
  // }

  // function generateID() {
  //   let letter = l();
  //   return (
  //     Math.trunc(Math.random() * 1000 + Math.random() * 500) + letter?.value
  //   );
  // }
  let [clientSelected, setClientSelected] = useState<Client>(Client.empty());
  let [visible, setVisible] = useState<"formulary" | "table">("table");
  let [clients, setClients] = useState<Client[]>([]);

  let repo: ClientsRepository = new ClientCollection();
  // let clients = [
  //   new Client("Ana", 17, 1),
  //   new Client("Beatriz", 19, 2),
  //   new Client("Joaquim", 20, 3),
  //   new Client("Manuela", 21, 4),
  // ];

  useEffect(() => {
    repo.showAllClients().then(setClients);
  }, []);

  function selectClient(client: Client) {
    setClientSelected(client);
    setVisible("formulary");
  }

  function removeClient(client: Client) {
    console.log(client.name, "removed");
  }

  function newClient() {
    setClientSelected(Client.empty());
    setVisible("formulary");
  }

  function saveClient(client: Client) {
    console.log(client);
  }

  return (
    <div
      className={`flex h-screen w-screen  
    justify-center items-center 
    bg-gradient-to-r from-blue-500 to-purple-500`}
    >
      <Layout title="Cadastro Simples">
        {visible === "table" ? (
          <>
            <div className={`flex justify-end`}>
              <ButtonApp onClick={newClient} color="blue">
                Cadastrar Cliente
              </ButtonApp>
            </div>
            <TableClients
              clients={clients}
              clientSelected={selectClient}
              clientRemoved={removeClient}
            ></TableClients>
          </>
        ) : (
          <FormClient
            cancel={() => setVisible("table")}
            clientChange={saveClient}
            client={clientSelected}
          />
        )}
      </Layout>
    </div>
  );
}
