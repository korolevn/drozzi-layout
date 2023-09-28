import React, { useState } from "react";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import styles from "./Header.module.scss";
import { clsx } from "clsx";

export function Header() {
    const [closed, setClosed] = useState(true);
    const isNavigationClosed = closed ? styles.navigation && styles.closed : "";

    return (
        <header className={styles.header}>
            <div className={styles.headerWrapper}>
                <div className={styles.navigationWrapper}>
                    <div className={styles.logoWrapper}>
                        <div className={styles.logo}>
                            <a href="#" className={styles.link}>
                                <Logo/>
                            </a>
                        </div>
                    </div>
                    <button 
                            className={styles.burgerButton}
                            onClick={() => { setClosed(false) }}
                        >
                            открыть меню
                    </button>
                    <nav className={clsx(styles.navigation, isNavigationClosed)}>
                        <button
                            className={styles.closeButton}
                            onClick={() => { setClosed(true) }}
                        >
                            закрыть меню
                        </button>
                        <ul className={clsx(styles.list, styles.menu)}>
                            <li className={styles.menuItem}>
                                <a href="#portfolio" className={styles.menuLink}>Портфолио</a>
                            </li>
                            <li className={styles.menuItem}>
                                <a href="#about" className={styles.menuLink}>О компании</a>
                            </li>
                            <li className={styles.menuItem}>
                                <a className={styles.menuLink}>Контакты</a>
                            </li>
                        </ul>
                        <a href="#feedback" className={styles.feedBackButton}>Оставить заявку</a>
                    </nav>
                </div>
                <div className={styles.headerContent}>
                    <h1 className={styles.title}>
                        Маркетинговое агентство.<br/>
                        С нами вы растете как на дрожжах
                    </h1>
                    <a 
                        href="#portfolio"
                        className={styles.downButton}>
                        прокрутить вниз
                    </a>
                    <ul className={styles.socials}>
                        <li className={styles.social}>
                            <a href="/" 
                                className={clsx(styles.socialLink, styles.whatsapp)}
                            >
                                <p class={styles.socialCaption}>Whatsapp</p>
                            </a>
                        </li>
                        <li className={styles.social}>
                            <a href="/" 
                                className={clsx(styles.socialLink, styles.telegram)}
                            >
                                <p class={styles.socialCaption}>Telegram</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}