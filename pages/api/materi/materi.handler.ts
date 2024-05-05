import { command, query } from "@/dependency-injection/dependency-injection";

export default async function handle(
  req: { method?: string; body?: any },
  res: { status: (arg0: number) => any; setHeader: (arg1: any) => any }
) {
  const { email, pathFile } = req.body;
  if (req.method === "POST") {
    const payload = await command.uploadMateri(email, pathFile);
    return res.status(201).json(payload);
  } else {
    const payload = await query.downloadMateri(email, pathFile);
    return res.status(201).json(payload);
  }
}
