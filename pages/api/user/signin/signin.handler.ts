import { query } from "@/dependency-injection/dependency-injection";

export default async function handle(
  req: { method?: string; body?: any },
  res: { status: (arg0: number) => any; setHeader: (arg1: any, arg2: any) => any }
) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    const payload = await query.signin(email, password);
    res.setHeader("Set-Cookie", `token=${payload.token}; HttpOnly`);
    res.setHeader("Set-Cookie", `email=${payload.email}; HttpOnly`);
    res.setHeader("Set-Cookie", `role=${payload.role}; HttpOnly`);
    return res.status(200).json(payload);
  } else {
    return res.status(405).json({ message: "Method Not allowed" });
  }
}
