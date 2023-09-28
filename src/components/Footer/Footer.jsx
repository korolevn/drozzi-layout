import React from "react";
import styles from "./Footer.module.scss";
import { ReactComponent as FooterLogo } from "../../assets/images/footer-logo.svg";

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerWrapper}>
                <ul className={styles.copyright}>
                    <li>2015-2021 © Дрожжи™</li>
                    <li>ООО «РВБ-Маркетинг»</li>
                    <li>Политика конфиденциальности</li>
                </ul>
                <FooterLogo/>
            </div>
        </footer>
    )
}