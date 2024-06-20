import minecraft from "@styles/modules/minecraft_text.module.css";
import styles from "./custom.module.css";
import tooltip from "@styles/modules/tooltip.module.css";
import {notFound} from "next/navigation";
import {getWeapon} from "@lib/Weapons";
import {getPerk} from "@lib/Perks";

export default async function WeaponPage({ params }) {
    const weapon = getWeapon(params.weapon_id);
    if (!weapon) {
        return notFound();
    }
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
                            <Perk key={perk_id} perk_id={perk_id} />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

async function Perk({perk_id}) {
    const perk = getPerk(perk_id);
    if (!perk) {
        return (
            <div className={`${styles.perk} ${tooltip.tooltip}`}>
                <h4 className={`${minecraft.bold} ${minecraft.dark_red} ${minecraft.shadow}`}>Unknown Perk</h4>
                <p>{perk_id}</p>
            </div>
        );
    }

    return (
        <div className={`${styles.perk} ${tooltip.tooltip}`}>
            <h4 className={`${minecraft.bold} ${minecraft.dark_red} ${minecraft.shadow}`}>{perk.name}</h4>
            <p className={minecraft.gray}>{perk.description}</p>
        </div>
    );
}