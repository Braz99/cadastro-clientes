import Head from "next/head";
import ButtonApp from "../components/ButtonApp";
import FormClient from "../components/FormClient";
import Layout from "../components/Layout";
import TableClients from "../components/TableClients";
import useClients from "../hooks/useClients";

export default function Home() {
  const {
    addClient,
    saveClient,
    removeClient,
    selectClient,
    clientSelected,
    clients,
    tableVisible,
    showTable,
  } = useClients();

  return (
    <div
      className={`flex h-screen w-screen  
    justify-center items-center 
    bg-gradient-to-r from-blue-500 to-purple-500`}
    >
      <Layout title="Cadastro Simples">
        {tableVisible ? (
          <>
            <div className={`flex justify-end`}>
              <ButtonApp onClick={addClient} color="blue">
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
            cancel={showTable}
            clientChange={saveClient}
            client={clientSelected}
          />
        )}
      </Layout>
    </div>
  );
}
