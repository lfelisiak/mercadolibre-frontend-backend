import express from 'express';
import bodyParser from 'body-parser';
class App {
    constructor(routes, port) {
        this.app = express();
        this.port = port;
        this.initializeMiddlewares();
        this.initializeRoutes(routes);
        this.initializaFallbackMiddleware();
    }
    initializeMiddlewares() {
        this.app.use(bodyParser.json());
        this.app.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
    }
    initializaFallbackMiddleware() {
        this.app.use((req, res, next) => {
            res.json({ status: false, code: 404, message: "Resource Not Found" });
        });
    }
    initializeRoutes(routes) {
        routes.forEach(route => {
            this.app[route.method](route.prefix + route.route, (req, res, next) => {
                const result = (new route.controller)[route.action](req, res, next);
                if (result instanceof Promise) {
                    result.then((result) => {
                        if (result !== null && result !== undefined)
                            return res.json(result);
                        else
                            return undefined;
                    })
                        .catch(err => console.log(err));
                }
                else if (result !== null && result !== undefined) {
                    return res.send(result);
                }
            });
        });
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        });
    }
}
export default App;
//# sourceMappingURL=app.js.map