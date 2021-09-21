import {
  createPost,
  getPosts,
  updatePost,
  deletePost,
  likePost,
} from "../controllers/controllers.js";

const routes = (app) => {
  app.route("/posts").get(getPosts).post(createPost);
  app.route("/posts/:id").patch(updatePost).delete(deletePost);
  app.route("/posts/:id/likepost").patch(likePost);
};

export default routes;
