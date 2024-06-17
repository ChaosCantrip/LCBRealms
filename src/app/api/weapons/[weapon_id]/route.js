import {NextResponse} from "next/server";
import {getWeapon} from "@lib/Weapons";

// Returns data for specific weapon

export async function GET(request, {params}) {
    const weapon_id = params.weapon_id.toLowerCase();
    const weapon = getWeapon(weapon_id);
    if (weapon) {
        return NextResponse.json(weapon, {status: 200});
    } else {
        return NextResponse.json({
            message: `Weapon with id ${weapon_id} not found.`
        }, {status: 404});
    }
}