import { rootRoute } from "../controllers/controllers";

const routes = (app) => {
  app.route("/").get(rootRoute);
};

export default routes;
