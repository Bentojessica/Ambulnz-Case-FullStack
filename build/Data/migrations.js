"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const knex_1 = __importDefault(require("knex"));
const dotenv_1 = __importDefault(require("dotenv"));
const pizzas_json_1 = __importDefault(require("./pizzas.json"));
dotenv_1.default.config();
exports.connection = (0, knex_1.default)({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_SCHEMA,
        multipleStatements: true
    }
});
const printError = (error) => { console.log(error.sqlMessage || error.message); };
const createTables = () => exports.connection
    .raw(`
   CREATE TABLE ambulnz_pizza (
    name VARCHAR(255),
    price FLOAT,
    ingredients VARCHAR(500)
    );
`)
    .then(() => { console.log("Tabelas criadas"); })
    .catch(printError);
const insertUsers = () => (0, exports.connection)("ambulnz_pizza")
    .insert(pizzas_json_1.default)
    .then(() => { console.log("Usuários criados"); })
    .catch(printError);
const closeConnection = () => { exports.connection.destroy(); };
createTables()
    .then(insertUsers)
    .finally(closeConnection);
//# sourceMappingURL=migrations.js.map