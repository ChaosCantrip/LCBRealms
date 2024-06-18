import {Suspense} from "react";

import minecraft from "@styles/modules/minecraft_text.module.css";
import styles from "./custom.module.css";
import tooltip from "@styles/modules/tooltip.module.css";

export default async function WeaponPage({ params }) {
    const weapon_id = params.weapon_id;
    const weapon_response = await fetch(process.env.URL + '/api/weapons/' + weapon_id);
    const weapon = await weapon_response.json();
    return (
        <div>
            <h1 className={`${minecraft.bold} ${minecraft.white} ${minecraft.shadow}`}>{weapon.name}</h1>
            <p>{weapon.rarity} {weapon.type}</p>
            <h2>Perks</h2>
            <div className={styles.perks_wrapper}>
                {Object.entries(weapon.perks).map(([column, perks]) => (
                    <div key={column} className={styles.perks_column}>
                        <h3 className={styles.column_name}>{column}</h3>
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
        <div className={`${styles.perk} ${tooltip.tooltip}`}>
            <h4 className={`${minecraft.bold} ${minecraft.dark_red} ${minecraft.shadow}`}>{perk.name}</h4>
            <p className={minecraft.gray}>{perk.description}</p>
        </div>
    );
}

function LoadingPerk({perk_id}) {
    return (
        <div className={styles.perk}>
            <h4>Loading...</h4>
            <p>{perk_id}</p>
        </div>
    );
}