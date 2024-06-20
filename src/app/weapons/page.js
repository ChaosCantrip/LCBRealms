import Link from "next/link";
import {getAllWeapons} from "@lib/Weapons";

export default async function WeaponsPage() {
    const weapons = getAllWeapons();
    return (
        <div>
            <h1>Weapons</h1>
            <ul>
                {weapons.map(weapon => (
                    <li key={weapon.id}>
                        <Link href={`/weapons/${weapon.id}`}>
                            <p>{weapon.name}</p>
                            <p>{weapon.rarity} {weapon.type}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}