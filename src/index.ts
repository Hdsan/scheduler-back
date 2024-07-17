import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Olá, mundo!');
});

app.post('/login', (req: Request, res: Response) => {
    console.log("Login")
    res.send({ message: "Successful login", status: 200, login: true });
});
app.get('/schedules', async (req: Request, res: Response) => {
    console.log("Schedule")
    const schedule =
    {
        "time": new Date(),
        "user_id": "1234",
        "observation": "nope",
        "location": "predas",
        "status": "OK"
    }
    const schedule2 =
    {
        "time": "",
        "user_id": "",
        "observation": "",
        "location": "",
        "status": null
    }

    // res.statusCode = 204;
    await sleep(3000);
    
    res.send(schedule);
    //res.send("VISH")
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
function sleep(miliseconds: number) :Promise<void>{
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("OK")
            resolve();
        }, miliseconds);
    });
}
