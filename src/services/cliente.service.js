import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "http://localhost:8080/clientes/";

export const getAll = async() => {
    return (await axios.get(API_URL,
        {headers: authHeader()}
    )).data;
}
export const getById = async(id) => {
    return (await axios.get(API_URL + id,
        {headers: authHeader()}
    )).data;
}

export const create = async(nome, descricao, valor, imagens,artesanatos, pacotes) => {
    var dados = {nome:nome, descricao:descricao, valor: valor, imagens:imagens, artesanatos:artesanatos, pacotes:pacotes};
    await axios.post(API_URL, dados,{
        headers: authHeader()
    });
}

export const update = async(id, nome, telefone, dataNascimento, cpf, endereco, artesanatos, pacotes) => {
    var dados = {nome:nome, telefone:telefone, dataNascimento: dataNascimento, cpf:cpf, endereco:endereco, artesanatos:artesanatos, pacotes:pacotes};
    await axios.put(API_URL + id, dados,{
        headers: authHeader()
    });
}

export const deleteItem = async(id) => {
    await axios.delete(API_URL + id,{
        headers: authHeader()
        }
    );
}

