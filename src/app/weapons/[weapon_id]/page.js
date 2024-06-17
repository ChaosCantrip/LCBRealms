import {Suspense} from "react";

export default async function WeaponPage({ params }) {
    const weapon_id = params.weapon_id;
    const weapon_response = await fetch(process.env.URL + '/api/weapons/' + weapon_id);
    const weapon = await weapon_response.json();
    return (
        <div>
            <h1>{weapon.name}</h1>
            <p>{weapon.rarity} {weapon.type}</p>
            <h2>Perks</h2>
            <div>
                {Object.entries(weapon.perks).map(([column, perks]) => (
                    <div key={column}>
                        <h3>{column}</h3>
                        {perks.map(perk_id => (
                            <Suspense key={perk_id} fallback={<LoadingPerk perk_id={perk_id} />}>
                                <Perk perk_id={perk_id} />
                            </Suspense>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

async function Perk({perk_id}) {
    const perk_response = await fetch(process.env.URL + '/api/perks/' + perk_id);
    const perk = await perk_response.json();
    return (
        <div>
            <h4>{perk.name}</h4>
            <p>{perk.description}</p>
        </div>
    );
}

function LoadingPerk({perk_id}) {
    return (
        <div>
            <h4>Loading...</h4>
            <p>{perk_id}</p>
        </div>
    );
}