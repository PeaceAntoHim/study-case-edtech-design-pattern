import { query } from "@/dependency-injection/dependency-injection";

export default async function handle(
  req: { method?: string; body?: any },
  res: { status: (arg0: number) => any; setHeader: (arg1: any) => any }
) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    query.login(email, password);
  } else {
    return res.status(405).json({ message: "Method Not allowed" });
  }
}
