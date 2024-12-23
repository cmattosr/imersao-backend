// Importa a função `conectarAoBanco` do arquivo `dbConfig.js`, responsável por estabelecer a conexão com o banco de dados.
import 'dotenv/config'
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbconfig.js";

// Estabelece a conexão com o banco de dados utilizando a string de conexão obtida da variável de ambiente `STRING_CONEXAO`.
// O resultado da conexão é armazenado na variável `conexao`.
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona responsável por buscar todos os posts no banco de dados.
export async function getTodosPosts() {
    // Seleciona o banco de dados com o nome "imersao-instabyte".
    const db = conexao.db("imersao-instabyte");
    // Seleciona a coleção "posts" dentro do banco de dados.
    const colecao = db.collection("posts");
    // Executa uma consulta para encontrar todos os documentos na coleção "posts" e retorna os resultados como um array.
    return colecao.find().toArray();
}
  
export async function criarPost(novoPost) {
    const db = conexao.db("imersao-instabyte");
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost);
}

export async function atualizarPost(id, novoPost) {
    const db = conexao.db("imersao-instabyte");
    const colecao = db.collection("posts");
    const objID = ObjectId.createFromHexString(id);
    return colecao.updateOne({_id: new ObjectId(objID)}, {$set:novoPost});
}