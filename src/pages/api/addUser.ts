// import prisma from "@/components/prisma";
// import {NextRequest, NextResponse} from "next/server";
// // import { NextApiRequest, NextApiResponse } from 'next';
//
// export default async function POST (req: NextRequest, res: NextResponse) {
//     const data = await prisma.user.findMany()
//     await prisma.user.create({
//         data: {
//             name: 'Alice',
//             phone: 'alice@prisma.io',
//
//         },
//     })
//     console.log("你好",data)
//     return NextResponse.json({
//         status: 200,
//         data
//     })
// }
