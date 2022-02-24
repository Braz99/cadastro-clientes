import Client from "../core/Client";
import { Edit, Trash } from "./IconsRepository";

interface TableClientsProps {
  clients: Client[];
  clientSelected?: (client: Client) => void;
  clientRemoved?: (client: Client) => void;
}

export default function TableClients(props: TableClientsProps) {
  let checkActions = props.clientRemoved || props.clientSelected;

  function renderHead() {
    return (
      <tr>
        <th className={`text-center p-4`}>ID</th>
        <th className={`text-center p-4`}>Nome</th>
        <th className={`text-center p-4`}>Idade</th>
        {checkActions ? <th className={`text-center p-4`}>Ações</th> : false}
      </tr>
    );
  }

  function renderData() {
    return props.clients?.map((client, i) => {
      return (
        <tr
          key={client.id}
          className={i % 2 === 0 ? "bg-gray-200" : "bg-gray-50"}
        >
          <td className={`text-center p-4`}>{client.id}</td>
          <td className={`text-center p-4`}>{client.name}</td>
          <td className={`text-center p-4`}>{client.age}</td>
          {checkActions ? renderIcons(client) : false}
        </tr>
      );
    });

    function renderIcons(client: Client) {
      return (
        <td className={`flex justify-around`}>
          {props.clientSelected ? (
            <button
              onClick={() => props.clientSelected?.(client)}
              className={`flex justify-center items-center p-2 m-1 
            text-blue-500
            hover:bg-gray-100 
            rounded-full`}
            >
              {Edit}
            </button>
          ) : (
            false
          )}
          {props.clientRemoved ? (
            <button
              onClick={() => props.clientRemoved?.(client)}
              className={`flex justify-center items-center p-2 m-1 
            text-red-500
            hover:bg-gray-100 
            rounded-full`}
            >
              {Trash}
            </button>
          ) : (
            false
          )}
        </td>
      );
    }
  }
  return (
    <table className={`w-full rounded-xl overflow-hidden`}>
      <thead
        className={`text-gray-100 
        bg-gradient-to-r from-purple-600 to-purple-800 `}
      >
        {renderHead()}
      </thead>
      <tbody>{renderData()}</tbody>
    </table>
  );
}
