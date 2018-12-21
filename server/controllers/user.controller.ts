// import { executeSPById } from '../db/sql';

// export function infoChat(req, res, next) {

//     // console.log(req);
//     const command = 'SP_Whatsapp_CallTracking';
//     const id = req.query.id;

//     executeSPById(command, id)
//         .then(rows => {
//             res.json(rows).status(200);
//         }, (err) => {
//             res.status(500).json({ error: err }).send();
//         })
//         .catch(err => {
//             res.status(500).json({ error: err }).send();
//         });
// }