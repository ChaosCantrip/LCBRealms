import Link from "next/link";
import {getAllWeapons} from "@lib/Weapons";

import styles from "./custom.module.css";
import tooltip from "@styles/modules/tooltip.module.css";

export default async function WeaponsPage() {
    const weapons = getAllWeapons();
    return (
        <div>
            <h1>Weapons</h1>
            <div className={styles.list}>
                {weapons.map(weapon => (
                    <Weapon weapon={weapon} key={weapon.id} />
                ))}
            </div>
        </div>
    );
}

function Weapon({weapon}) {
    return (
        <Link href={`/weapons/${weapon.id}`}>
            <div className={`${tooltip.tooltip} ${styles.weapon}`}>
                <p className={styles.weapon_name}>{weapon.name}</p>
                <p className={styles.weapon_subtitle}>{weapon.rarity} {weapon.type}</p>
            </div>
        </Link>
    );
}