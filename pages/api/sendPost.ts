import { NextApiRequest, NextApiResponse } from 'next';
export default function handle(req:NextApiRequest,res:NextApiResponse){
    res.send({
        post:req.body
    })
}