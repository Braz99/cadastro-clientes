import Client from "./Client";

export default interface ClientsRepository {
  saveClient(client: Client): Promise<Client>;
  removeClient(client: Client): Promise<void>;
  showAllClients(): Promise<Client[]>;
}
