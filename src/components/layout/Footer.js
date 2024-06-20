import styles from "./Footer.module.css";

import minecraft from "@styles/modules/minecraft_text.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>Website by <span className={`${minecraft.gold} ${minecraft.bold} ${minecraft.shadow}`}>ChaosCantrip</span> </p>
        </footer>
    );
}