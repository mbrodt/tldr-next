import { type NextApiRequest, type NextApiResponse } from "next";

const hello = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json("hello world");
};

export default hello;
