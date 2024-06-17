import { Weapons } from "@data/Weapons";


export function getWeapon(weapon_id) {
    for (let i = 0; i < Weapons.length; i++) {
        if (Weapons[i].id === weapon_id) {
            return Weapons[i];
        }
    }
    return null;
}