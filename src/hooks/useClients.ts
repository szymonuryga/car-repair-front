import { Client } from 'helpers/interfaces/Client';
import { useCallback } from 'react';
import { getClients, getClient, saveClient, deleteClient } from 'service/clientService';

export const useClients = () => {
    const getClientById = useCallback( async (clientId: number) => {
        try{
            const result = await getClient(clientId);
            return result.data;
        } catch (e) {
            console.log(e);
        }
    },[]);

    const getAllClients = useCallback(async ()=>{
        try {
            const result = await getClients();
            console.log(result.data);
            return result.data;
        } catch (e) {
            console.log(e);
        }
    },[]);

    const addClient = async (client: Client) => {
        try {
            saveClient(client);
        } catch (e){
            console.log(e);
        }
    }

    const removeClient = async (clientId: number) => {
        try {
            deleteClient(clientId);
        } catch (e){
            console.log(e);
        }
    };

    return {
        getAllClients,
        getClientById,
        addClient,
        removeClient
    }
}