"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (req, res) => {
    res.send('Olá, mundo!');
});
app.get('/exemplo', (req, res) => {
    res.send('Esta é uma rota de exemplo!');
});
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
