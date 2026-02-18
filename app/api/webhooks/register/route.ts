import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { WebhookEvent } from "@clerk/nextjs/server";
import { Webhook } from "svix";

export async function POST(req: Request) {
    const webhookSecret = process.env.WEBHOOK_SECRET_KEY;

    if (!webhookSecret) {
        throw new Error("webhook secret not provided in env");
    }

    const headerPayload = await headers();

    const svix_id = headerPayload.get("svix-id");
    const svix_timestamp = headerPayload.get("svix-timestamp");
    const svix_signature = headerPayload.get("svix-signature");

    if (!svix_id || !svix_timestamp || !svix_signature) {
        return new NextResponse(
            `invalid svix credentials: { ${svix_id} | ${svix_timestamp} | ${svix_signature}} `, {
            status: 401
        });
    }

    const payload = await req.json();
    const body = JSON.stringify(payload);

    const webhook = new Webhook(webhookSecret);

    let event: WebhookEvent;
    try {
        event = webhook.verify(body, {
            "svix-id": svix_id,
            "svix-signature": svix_signature,
            "svix-timestamp": svix_timestamp
        }) as WebhookEvent;
    } catch (err) {
        console.error(`failed to verify webhook: ${err}`)
        return new NextResponse(
            `failed to verify webhook: ${err}`, {
            status: 401
        }
        );
    }

    switch (event.type) {
        case "user.created":
            // TODO: 
            const { email_addresses } = event.data;
            console.log("user.created event recieved", email_addresses);
            break;
        case "user.updated":
            // TODO: 
            const { first_name } = event.data;
            console.log("user.updated event recieved", first_name);
            break;
        default:
            // TODO: 
            console.log(`unhandled event recieved: ${event.type} ${event.data}`);
    }

    return NextResponse.json({
        "message": "event recieved successfully"
    })
} 