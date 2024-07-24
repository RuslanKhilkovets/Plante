import cl from "./ItemInfo.module.scss"
import clsx from "clsx";

const ItemInfo = ( { item }) => {
    return (
        item !== null
        &&
        <div className={cl["item-info"]} >
            <div className={clsx(cl["item-info__item"], cl["item-info__item-gray-bg"])}>
                <p className={cl["item-info__item--title"]}>Опис</p>
                <p className={cl["item-info__item--text"]}>{item.description}</p>
            </div>
            <div className={cl["item-info__item"]}>
                <p className={cl["item-info__item--title"]}>Характеристики</p>
                <div className={cl["item-info__content"]}>
                    <div className={cl["item-info__content--item"]}>
                        <p className={cl["item-info__content--item_text"]}>Виробник</p>
                        <div className={cl["item-info__content--line"]}></div>
                        <p className={clsx(cl["item-info__content--item_text"], cl["item-info__content--item_text_grey"])}>{item.producer}</p>
                    </div>
                    <div className={cl["item-info__content--item"]}>
                        <p className={cl["item-info__content--item_text"]}>Категорія</p>
                        <div className={cl["item-info__content--line"]}></div>
                        <p className={clsx(cl["item-info__content--item_text"], cl["item-info__content--item_text_grey"])}>{item.category}</p>
                    </div>
                    <div className={cl["item-info__content--item"]}>
                        <p className={cl["item-info__content--item_text"]}>Вага</p>
                        <div className={cl["item-info__content--line"]}></div>
                        <p className={clsx(cl["item-info__content--item_text"], cl["item-info__content--item_text_grey"])}>{item.weight}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemInfo;