import axios from 'axios';

test("Carteira possua um saldo total", () => { })

test("Deve adicionar uma transação positiva na carteira", async () => {
    const input = {
        transactionId: "1",
        transactionDate: Date.now(),
        transactionSource: "Inter",
        description: "Salario",
        value: 3000.00
    }
    const response = await axios.post("http://localhost:3001/transaction", input);
    const output = response.data;
    expect(output.message).toBe("Transaction added");
})

test("Deve adicionar uma transação negativa na carteira", async () => {
    const input = {
        transactionId: "2",
        transactionDate: Date.now(),
        transactionSource: "Inter",
        description: "Geladeira",
        value: -2200.00
    }
    const response = await axios.post("http://localhost:3001/transaction", input);
    const output = response.data;
    expect(output.message).toBe("Transaction added");
})

test("Exibe valores reduzidos da carteira", () => { })

test("Exibe valores aumentados da carteira", () => { })