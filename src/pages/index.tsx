import { useEffect, useState } from "react";
import ClientCollection from "../backend/db/ClientsCollection";
import ButtonApp from "../components/ButtonApp";
import FormClient from "../components/FormClient";
import Layout from "../components/Layout";
import TableClients from "../components/TableCients";
import Client from "../core/Client";
import ClientsRepository from "../core/ClientsRepository";

export default function Home() {
  let [clientSelected, setClientSelected] = useState<Client>(Client.empty());
  let [visible, setVisible] = useState<"formulary" | "table">("table");
  let [clients, setClients] = useState<Client[]>([]);

  let repo: ClientsRepository = new ClientCollection();

  useEffect(() => {
    showClients;
  }, []);

  function showClients() {
    repo.showAllClients().then((clients) => {
      setClients(clients);
      setVisible("table");
    });
  }

  function selectClient(client: Client) {
    setClientSelected(client);
    setVisible("formulary");
  }

  async function removeClient(client: Client) {
    await repo.removeClient(client);
    showClients();
  }

  function newClient() {
    setClientSelected(Client.empty());
    setVisible("formulary");
  }

  async function saveClient(client: Client) {
    await repo.saveClient(client);
    showClients();
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
