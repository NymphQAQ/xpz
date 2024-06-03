import prisma from "@/components/prisma";
import { NextApiRequest, NextApiResponse } from 'next';


export default async function GET (req: NextApiRequest, res: NextApiResponse) {
    const data = await prisma.user.findMany()
    console.log("你好",data)
    res.status(200).json({ data });

}
