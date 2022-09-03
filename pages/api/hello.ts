// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiHandler, NextApiRequest, NextApiResponse} from "next";

type Data = {
  name: string;
};

const handler: NextApiHandler = (req, res) => {
  if(req.method !== "POST"){
    return res.setHeader('ALLOW',"POST").status(405).json({});
  }
  res.status(200).json({ body: req.body });


};

export default handler;


