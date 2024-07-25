import jsonServer from "json-server";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, "db.json"));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

server.use(async (req, res, next) => {
	await new Promise((res) => {
		setTimeout(res, 0);
	});
	next();
});

server.use((req, res, next) => {
	next();
});

server.use(router);

server.listen(8080, () => {
	console.log("server is running on 8000 port");
});
