import DatabaseRepositoryFactory from "./infra/factory/DatabaseRepositoryFactory";
import ExpressAdapter from "./infra/http/ExpressAdapter";
import HttpController from "./infra/http/HttpController";
import PgPromiseAdapter from "./infra/database/PgPromiseAdapter";
import UsecaseFactory from "./infra/usecase/UsecaseFactory";

// main
const connection = new PgPromiseAdapter().connect();
const repositoryFactory = new DatabaseRepositoryFactory(connection);
const usecaseFactory = new UsecaseFactory(repositoryFactory);
const httpServer = new ExpressAdapter();
new HttpController(httpServer, usecaseFactory);
httpServer.listen(3001);
