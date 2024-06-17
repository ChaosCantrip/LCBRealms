import {NextResponse} from "next/server";
import {getPerk} from "@lib/Perks";

// Returns data for specific perk

export async function GET(request, {params}) {
    const perk_id = params.perk_id.toLowerCase();
    const perk = getPerk(perk_id);
    if (perk) {
        return NextResponse.json(perk, {status: 200});
    } else {
        return NextResponse.json({
            message: `Perk with id ${perk_id} not found.`
        }, {status: 404});
    }
}