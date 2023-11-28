import { getComments, saveComments } from "@/lib/comments";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;
  const comments = await getComments(slug);
  return NextResponse.json({ comments });
}

export async function POST(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;

  const formData = await request.formData();
  const username = formData.get("username") as string;
  const content = formData.get("content") as string;
  console.log(content);

  await saveComments(username, content, slug);

  return NextResponse.json("comment saved!");
}
