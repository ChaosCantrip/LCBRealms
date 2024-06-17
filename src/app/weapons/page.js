import Link from "next/link";

export default async function WeaponsPage() {
    const weapons_response = await fetch(process.env.URL + '/api/weapons');
    const weapons = await weapons_response.json();
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