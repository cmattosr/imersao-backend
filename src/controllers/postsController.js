import fs from "fs"
import { getTodosPosts,criarPost } from "../models/postModel.js";

export async function listarPosts(req, res) {
    // Chama a função `getTodosPosts()` para obter todos os posts.
    const posts = await getTodosPosts();
    // Envia uma resposta HTTP com status 200 (OK) e os posts no formato JSON.
    res.status(200).json(posts);
}

export async function postarNovoPost(req, res) {
    const novoPost = req.body;
    try {
        const postCriado = await criarPost(novoPost);
        res.status(201).json(postCriado);
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json({ "Erro":"Erro ao criar o post" });
    }
}

export async function uploadImagem(req, res) {
    const novoPost = {
        descricao: "",
        imgUrl: req.file.originalname,
        alt: ""
    };
    try {
        const postCriado = await criarPost(novoPost);
        const imagemAtualizada = `uploads/${postCriado.insertedId}.png`
        fs.renameSync(req.file.path, imagemAtualizada);
        res.status(201).json(postCriado);
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json({ "Erro":"Erro ao criar o post" });
    }
}