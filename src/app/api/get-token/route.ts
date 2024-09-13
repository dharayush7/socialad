import { validateRequest } from "@/auth";
import streamChatClient from "@/lib/stream";

export async function GET() {
  try {
    const { user } = await validateRequest();

    if (!user) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    console.log("Calling get-token for user:", user.id);

    const expirationTime = Math.floor(Date.now() / 1000) + 60 * 60;
    const issedAt = Math.floor(Date.now() / 1000) - 60;
    const token = streamChatClient.createToken(
      user.id,
      expirationTime,
      issedAt,
    );

    return Response.json({
      token,
    });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
