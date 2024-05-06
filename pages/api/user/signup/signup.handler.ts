import { command } from "@/dependency-injection/dependency-injection";

export default async function handle(
  req: { method?: string; body?: any },
  res: { status: (arg0: number) => any; setHeader: (arg1: any) => any }
) {
  if (req.method === "POST") {
    const { name, role, email, password } = req.body;
    const signup = await command.signup(name, role, email, password);
    return res.status(201).json({ signup: signup });
  } else {
    return res.status(405).json({ message: "Method Not allowed" });
  }
}
