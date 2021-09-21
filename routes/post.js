import {
  createPost,
  getPosts,
  updatePost,
  deletePost,
} from "../controllers/controllers.js";

const routes = (app) => {
  app.route("/posts").get(getPosts).post(createPost);
  app.route("/posts/:id").patch(updatePost).delete(deletePost);
};

export default routes;
