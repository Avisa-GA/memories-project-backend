import { createPost, getPosts } from "../controllers/controllers.js";

const routes = (app) => {
  app.route("/posts").get(getPosts).post(createPost);
};

export default routes;
