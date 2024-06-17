import { Perks } from "@data/Perks";

export function getPerk(perk_id) {
    for (let i = 0; i < Perks.length; i++) {
        if (Perks[i].id === perk_id) {
            return Perks[i];
        }
    }
    return null;
}

export function getAllPerks() {
    return Perks;
}