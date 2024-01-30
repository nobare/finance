import ExpressAdapter from "./infra/http/ExpressAdapter";
import PgPromiseAdapter from "./infra/database/PgPromiseAdapter";

// main
const connection = new PgPromiseAdapter();
const httpServer = new ExpressAdapter();
connection.connect();
httpServer.listen(3001);
