import connectDB from "@/database/database";
import ProjectsSchema from "@/lib/models/projectsModel";

export async function GET() {
  try {
    await connectDB();
    const projects = await ProjectsSchema.find();
    return Response.json(projects, {status: 200});
  } catch (error) {
    console.error(error);
  }
}