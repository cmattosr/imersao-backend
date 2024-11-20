import getTodosPosts from "../../models/postModel.js";

export default async function listarPosts(req, res) {
    // Chama a função `getTodosPosts()` para obter todos os posts.
    const posts = await getTodosPosts();
    // Envia uma resposta HTTP com status 200 (OK) e os posts no formato JSON.
    res.status(200).json(posts);
}
