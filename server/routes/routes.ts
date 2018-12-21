module.exports = (app: { get: (arg0: string, arg1: (_req: any, res: { sendFile: (arg0: string) => void; }) => void) => void; }) => {

    app.get('/', (_req: any, res: { sendFile: (arg0: string) => void; }) => {
        res.sendFile(__dirname + '/views/index.html');
    });

    // app.get('/corp/check_past_three', checkPast)

};