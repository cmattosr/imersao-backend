import express from "express";
import listarPosts from "../controllers/postsController.js";

const routes = (app) => {
    // Habilita o middleware `express.json()` para que o Express possa entender requisições com corpo no formato JSON.
    app.use(express.json());
    // Define uma rota GET para a URL "/posts".
    app.get("/posts", listarPosts);
}

export default routes;