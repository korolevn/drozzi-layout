import React, { useState } from "react"
import team from "../../assets/images/team.jpg";
import styles from "./About.module.scss";
import { Modal } from "../Modal/Modal";

export function About() {
    const [modalShowed, setModalShowed] = useState(false);

    const showFullImage = () => {
        setModalShowed(true);
    }

    return (
        <section id="about" className={styles.about}>
            <div className={styles.aboutWrapper}>
                <h2 className={styles.title}>О компании</h2>
                <ul className={styles.team}>
                    <li className={styles.teamItem}>
                        <span>5</span>отделов
                    </li>
                    <li className={styles.teamItem}>
                        <span>5</span>маркетологов
                    </li>
                    <li className={styles.teamItem}>
                        <span>3</span>дизайнера
                    </li>
                    <li className={styles.teamItem}>
                        <span>3</span>копирайтера
                    </li>
                    <li className={styles.teamItem}>
                        <span>7</span>разработчиков
                    </li>
                </ul>
                <div className={styles.teamInfoWrapper}>
                    <div className={styles.teamInfo}>
                        <p>
                            Мы — команда специалистов с опытом, энтузиазмом и лёгким недосыпом. Маркетинговое агентство «Дрожжи» было основано 
                            в 2015 году, как компания, где можно получить комплексное интернет- и oффлайн-продвижение. На сегодняшний день мы не зависим ни от ниши, ни от географии, ни от специфики продукта. 
                            В портфолио компании сотни успешных кейсов, способных помочь вам в реализации своей идеи.
                        </p>
                        <ul className={styles.features}>
                            <li className={styles.feature}>
                                <span>1000+</span> реализованных<br/> проектов
                            </li>
                            <li className={styles.feature}>
                                <span>92</span> клиента доверили нам свои проекты
                            </li>
                            <li className={styles.feature}>
                                <span>5+</span> лет успешной работы
                            </li>
                        </ul>
                        <button className={styles.loadMoreButton}>подробнее</button>
                    </div>
                    <figure className={styles.teamImage}>
                        <img
                            onClick={() => showFullImage()}
                            className={styles.image}
                            src={team}
                            alt="Команда агентства «Дрожжи»"
                        />
                        <figcaption className={styles.imageCaption}>Команда агентства «Дрожжи»</figcaption>
                    </figure>
                    <Modal show={modalShowed} setShow={setModalShowed}/>
                </div>
            </div>
        </section>
    )
}