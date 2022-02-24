import { useEffect, useState } from "react";
import ClientCollection from "../backend/db/ClientsCollection";
import Client from "../core/Client";
import ClientsRepository from "../core/ClientsRepository";
import useVisible from "./useVsible";

export default function useClients() {
  let [clientSelected, setClientSelected] = useState<Client>(Client.empty());
  let { showTable, showFormulary, tableVisible } = useVisible();
  let [clients, setClients] = useState<Client[]>([]);

  let repo: ClientsRepository = new ClientCollection();

  function showClients() {
    repo.showAllClients().then((clients) => {
      setClients(clients);
      showTable();
    });
  }

  function selectClient(client: Client) {
    setClientSelected(client);
    showFormulary();
  }

  async function removeClient(client: Client) {
    await repo.removeClient(client);
    showClients();
  }

  function addClient() {
    setClientSelected(Client.empty());
    showFormulary();
  }

  async function saveClient(client: Client) {
    await repo.saveClient(client);
    showClients();
  }

  useEffect(showClients, []);

  return {
    clients,
    clientSelected,
    addClient,
    saveClient,
    removeClient,
    showClients,
    selectClient,
    tableVisible,
    showTable,
  };
}
