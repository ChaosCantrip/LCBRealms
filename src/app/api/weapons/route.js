import {NextResponse} from "next/server";
import {getAllWeapons} from "@lib/Weapons";

// Returns data for all weapons

export async function GET(request) {
    const weapons = getAllWeapons();
    return NextResponse.json({
        weapons: weapons
    }, {status: 200});
}