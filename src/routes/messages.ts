import express, {Request} from "express";
import { db } from "../mocks/fakeDb";
import { bodyChat } from '../models/chat';
const router = express.Router();

router.get('/', (_, res)=>{
    res.json(db)
})

router.post('/', ({body: {name, name1}}: Request<{}, {}, bodyChat, {}>, res)=>{
    if(!name && !name1) {
        return res.status(400).json({message: 'incomplete fields'})
    } 
    let max = Math.max(...db.map(({ id }) => id + 1));
    db.push({id: max ,user: name, user1: name1, messages: []})
    res.json({message: 'chat add'})
})

router.put('/:id', ({body: {user, message}, params: {id}}: Request<{id: number}, {}, {user: string, message: string}, {}>, res)=> {
    const chat = db.find((chat)=>chat.id == id);
    if(chat) {
        chat.messages?.push({user: user, message: message})
        return res.json({message: "message send"})
    } else {
        res.status(404).json({message: "chat not found"})
    }
})


export default router;