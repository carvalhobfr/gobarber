import jwt from "jsonwebtoken";
import { promisify } from "util";
import authConfig from "../../config/auth";

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "token not provide" });
  }

  const [, token] = authHeader.split(" ");
  /*desestruturação par apegar apenas o token o index 1 da string.*/

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);
    // console.log(decoded);
    req.userId = decoded.id;
    return next();
  } catch (err) {
    return res.status(401).json({ error: "Token invalid " });
  }
};
