import styles from "./Header.module.css";
import Link from "next/link";

import tooltip from "@styles/modules/tooltip.module.css";

export default function Header() {
    return (
        <header className={`${styles.header}`}>
            <div className={styles.title}>
                <h1>Realms</h1>
            </div>
            <div className={styles.nav}>
                <NavLink href="/">Home</NavLink>
                <NavLink href="/weapons">Weapons</NavLink>
            </div>
        </header>
    );
}

function NavLink({href, children}) {
    return (
        <Link href={href} className={`${styles.nav_button} ${tooltip.tooltip}`}>
            {children}
        </Link>
    );
}