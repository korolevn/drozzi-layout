import { clsx } from "clsx";
import styles from "./Portfolio.module.scss";
import { cases } from "../../api/api";
import { useState } from "react";

export function Portfolio() {
    const defaultSelectedTags = ["поддержка сайта", "редизайн", "маркетинг сюда кратко теги"]
    const defaultTags = ["редизайн сайта", "разработка", "аудит"];

    const [selectedTags, setSelectedTags] = useState(defaultSelectedTags);
    const [tags, setTags] = useState(defaultTags);

    const filteredCases = cases.filter((item) => selectedTags.some((tag) => item.tags.includes(tag)));
    const addSelectedTag = (e, tag) => {
        e.preventDefault();
        setSelectedTags([...new Set([...selectedTags, tag])]); // remove duplicates with set

        const filteredTags = tags.filter((item) => (item !== tag));
        setTags([...filteredTags]);
    };
    const removeSelectedTag = (e, tag) => {
        e.preventDefault();
        const filteredSelectedTags = selectedTags.filter((item) => (item !== tag));
        setSelectedTags(filteredSelectedTags);

        setTags([...tags, tag]);
    }

    return (
        <section id="portfolio" className={styles.portfolio}>
            <div className={styles.portfolioWrapper}>
                <div className={styles.titleWrapper}>
                    <h2 className={styles.title}>Портфолио</h2>
                    <button className={styles.viewAll}>смотреть все</button>
                </div>
                <div className={styles.tagsSearch}>
                    <p>Поиск по тегам: </p>
                    <ul className={styles.tags}>
                        {tags.map((tag) => 
                            <li className={styles.tag}>
                                <a
                                    href=""
                                    className={styles.tagLink}
                                    onClick={(e) => {addSelectedTag(e, tag)}}
                                >
                                    {tag}
                                </a>
                            </li>
                        )}
                    </ul>
                </div>
                <ul className={styles.tagFilters}>
                    {selectedTags.map((tag) =>
                    <li className={styles.tagFilter}>
                        {tag}
                        <button
                            className={styles.removeTagButton}
                            onClick={(e) => {removeSelectedTag(e, tag)}}
                        >
                        </button>
                    </li>)}
                </ul>
                <ul className={clsx(styles.list, styles.cases)}>
                    {
                        filteredCases.map((item) => 
                        <li 
                            key={item.id}
                            className={styles.case}
                        >
                            <div className={styles.imageWrapper}>
                                <img className={styles.image} src={item.image} alt="" />
                                <span className={styles.category}>{item.category}</span>
                            </div>
                            <span className={styles.caseTitle}>{item.title}</span>
                            <ul className={styles.tags}>
                                {item.tags.map((tag) => 
                                    <li className={styles.tag}>
                                        <a
                                            className={styles.tagLink}
                                            href="#"
                                            onClick={(e) => {addSelectedTag(e, tag)}}
                                        >{tag}</a>
                                    </li>
                                )}
                            </ul>
                        </li>)
                    }
                </ul>
            <button className={styles.viewAllCasesButton}>Все кейсы</button>
            </div>
        </section>
    )
}