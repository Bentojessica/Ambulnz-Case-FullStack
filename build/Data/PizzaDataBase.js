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
exports.PizzaDataBase = void 0;
const BaseDataBase_1 = require("./BaseDataBase");
class PizzaDataBase extends BaseDataBase_1.BaseDataBase {
    getPizzas() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let pizzas = yield this.connection()
                    .into(PizzaDataBase.TABLE_NAME);
                const arrayPizzas = pizzas.map((pizza) => {
                    return Object.assign(Object.assign({}, pizza), { ingredients: JSON.parse(pizza.ingredients) });
                });
            }
            catch (error) {
                throw new Error(error.message || error.sqlMessage);
            }
        });
    }
}
exports.PizzaDataBase = PizzaDataBase;
PizzaDataBase.TABLE_NAME = "ambulnz_pizza";
//# sourceMappingURL=PizzaDataBase.js.map