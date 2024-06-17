import {NextResponse} from "next/server";
import {getAllPerks} from "@lib/Perks";

// Returns data for all perks

export async function GET(request) {
    const perks = getAllPerks();
    return NextResponse.json({
        perks: perks
    }, {status: 200});
}