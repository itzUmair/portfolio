import connectDB from "@/database/database";
import MessagesSchema from "@/lib/models/messagesModel";

export async function POST(req: Request, res: Response) {
  const data = await req.formData();
  try {
    await connectDB();
    await MessagesSchema.create({
      name: data.get("name"),
      email: data.get("email"),
      message: data.get("message"),
      date: Date.now(),
    });
    return Response.json({
      message: "Thankyou for reaching out! I'll get back to you ASAP",
    });
  } catch (error) {
    return Response.json({ message: "Something went wrong" });
  }
}
