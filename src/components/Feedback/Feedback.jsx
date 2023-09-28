import React, { useState } from "react"
import styles from "./Feedback.module.scss";
import receiver from "../../assets/images/receiver.jpg";

export function Feedback() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [description, setDescription] = useState("");

    const [nameDirty, setNameDirty] = useState(false);
    const [phoneDirty, setPhoneDirty] = useState(false);
    const [descriptionDirty, setDescriptionDirty] = useState(false);

    const [nameError, setNameError] = useState("Это обязательное поле");
    const [phoneError, setPhoneError] = useState("Это обязательное поле");
    const [descriptionError, setDescriptionError] = useState("Это обязательное поле");

    const nameHandler = (e) => {
        setName(e.target.value);
        if (e.target.value.trim().length < 5) {
            setNameError("Некорректные данные")
        } else {
            setNameError("");
        }
    }
    const phoneHandler = (e) => {
        setPhone(e.target.value);
        if (/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(e.target.value)) {
            setPhoneError("");
        } else {
            setPhoneError("Некорректные данные");
        }
    }
    const descriptionHandler = (e) => {
        setDescription(e.target.value);
        if (e.target.value.trim().length < 20) {
            setDescriptionError("Некорректные данные");
        } else {
            setDescriptionError("");
        }
    }

    const isDisabled = (nameError || phoneError || descriptionError) && "disabled";

    const onInputFocus = (e) => {
        const id = e.target.id;
        const label = document.querySelector(`[for=${id}]`);
        label.style.fontSize = "16px";
    }
    const onBlurFocus = (e) => {
        const id = e.target.id;
        const label = document.querySelector(`[for=${id}]`);
        label.style.fontSize = "24px";

        switch (id) {
            case "name" :
                setNameDirty(true);
                break;
            case "phone" :
                setPhoneDirty(true)
                break;
            case "description" :
                setDescriptionDirty(true)
                break;
        }
    }

    return (
        <section id="feedback" className={styles.feedback}>
            <div className={styles.feedbackWrapper}>
                <h2 className={styles.title}>Оставьте заявку</h2>
                <div className={styles.feedbackContent}>
                    <div className={styles.feedbackColumn}>
                        <div className={styles.receiver}>
                            <img className={styles.receiverImage} src={receiver} alt="Юлия Дижа" />
                            <span class={styles.receiverName}>Юлия Дижа</span>
                            <p class={styles.receiverInfo}>Поможет запустить ваш проект</p>
                        </div>
                        <form className={styles.feedbackForm}>
                        <div className={styles.feedbackField}>
                            {(nameDirty && nameError) && <div className={styles.validation}>{nameError}</div>}
                            <label htmlFor="name">Ваше имя *</label>
                            <input
                                value={name}
                                id="name" 
                                className={styles.name} 
                                type="text"
                                onFocus={(e) => {onInputFocus(e)}}
                                onBlur={(e) => {onBlurFocus(e)}}
                                onChange={(e) => {nameHandler(e)}}
                            />
                        </div>
                            
                        <div className={styles.feedbackField}>
                            {(phoneDirty && phoneError) && <div className={styles.validation}>{phoneError}</div>}
                            <label htmlFor="phone">Телефон <span className={styles.optionalText}>или мессенджер</span> *</label>
                            <input
                                value={phone}
                                id="phone" 
                                className={styles.phone} 
                                type="tel"
                                onFocus={(e) => {onInputFocus(e)}}
                                onBlur={(e) => {onBlurFocus(e)}}
                                onChange={(e) => {phoneHandler(e)}}
                            />
                        </div>
                            
                        <div className={styles.feedbackField}>
                        {(descriptionDirty && descriptionError) && <div className={styles.validation}>{descriptionError}</div>}
                            <label htmlFor="description">Краткое описание задачи *</label>
                            <textarea
                                value={description}
                                id="description"
                                className={styles.description} 
                                type="text"
                                onFocus={(e) => {onInputFocus(e)}}
                                onBlur={(e) => {onBlurFocus(e)}}
                                onChange={(e) => {descriptionHandler(e)}}
                            />
                        </div>

                        <button 
                            disabled={isDisabled}
                            className={styles.sendFormButton}
                            type="submit"
                        >Отправить</button>
                        </form>
                    </div>

                    <div className={styles.brifingsWrapper}>
                        <span class={styles.brifingsTitle}>Скачать брифинги на:</span>
                        <ul className={styles.brifings}>
                            <li className={styles.brifing}>
                                <a className={styles.brifingLink} href="">разработку логотипа</a>
                            </li>
                            <li className={styles.brifing}>
                                <a className={styles.brifingLink} href="">разработку сайта</a>
                            </li>
                            <li className={styles.brifing}>
                                <a className={styles.brifingLink} href="">разработку лендинга</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}