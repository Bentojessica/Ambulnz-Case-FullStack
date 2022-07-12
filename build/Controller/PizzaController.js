"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PizzaController = void 0;
const PizzaBusiness_1 = require("../Business/PizzaBusiness");
class PizzaController {
    getPizzaController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pizzas = yield new PizzaBusiness_1.PizzaBusiness().getPizzas();
                res.status(200).send(pizzas);
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
    }
}
exports.PizzaController = PizzaController;
//# sourceMappingURL=PizzaController.js.map