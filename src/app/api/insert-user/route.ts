import { insertUser } from "@/app/utils/insetUser";
import { User } from "@/app/utils/insetUser";

export async function POST(request: Request) {
    const data: User = await request.json();
    await insertUser(data);
    return Response.json({ message: 'User inserted successfully!' });
}