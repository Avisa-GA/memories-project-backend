import {
  createPost,
  getPosts,
  updatePost,
} from "../controllers/controllers.js";

const routes = (app) => {
  app.route("/posts").get(getPosts).post(createPost);
  app.route("/posts/:id").patch(updatePost);
};

export default routes;
