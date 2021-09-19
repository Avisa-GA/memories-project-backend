import { rootRoute, createPost, getPosts } from "../controllers/controllers";

const routes = (app) => {
  app.route("/").get(rootRoute);
  app.route("/posts").get(getPosts).post(createPost);
};

export default routes;
