import { FC, useState } from "react";
import clsx from "clsx";

import { Button } from "@mui/base";
import { IconButton } from "@mui/material";

import ProductCounter from "../ProductCounter/ProductCounter";
import CustomButton from "../StyledComponents/CustomButton";
import ItemSlider from "../ItemSlider/ItemSlider";

import STOCK_VARIANT from "../../constants/StockVariants";
import IProductDetailsItem from "../../types/IProductDetailsItem";

import cartIcon from "../../icons/white-cart.svg";

import cl from "./ItemPresentation.module.scss"

const ItemPresentation: FC = ( { item }: { item: IProductDetailsItem | null } ) => {
    const [count, setCount] = useState<number>(1);
    const [selectedWeight, setSelectedWeight] = useState<number | null>(null);

    return (
        item !== null
        &&
        <div className={cl["item"]}>
            <div className={cl["item-slider"]}>
                <ItemSlider/>
            </div>
            <div className={cl["item-description"]}>
                    <p className={cl["item-description__title"]}>{item?.title}</p>
                    <div className={cl["item-description__info"]}>
                        <p className={clsx(cl["item-description__info--text_existing"], {
                            [cl["item-description__info--exists"]]: item?.isInStock,
                            [cl["item-description__info--non-exists"]]: !item?.isInStock,
                        })}>
                            {item?.isInStock ? STOCK_VARIANT.EXISTS: STOCK_VARIANT.NOT_EXISTS}
                            <span className={cl["item-description__info--text_count"]}> ({item.count} од.)</span> 
                        </p>
                        <p className={cl["item-description__info--text"]}>Код: {item?.code}</p>
                        <p className={cl["item-description__info--text"]}>Виробник: {item?.producer}</p>
                    </div>
                    <div className={cl["item-description__item"]}>
                        <p className={cl["item-description__item--title"]}>
                        Вага
                        </p> 
                        <div className={cl["item-description__item_wrapper"]}>
                            {item?.weightItems?.map((weight: number) => (
                                <Button 
                                    key={weight}
                                    onClick={() => setSelectedWeight(weight)}
                                    className={clsx(cl["item-description__weight-item"], {
                                        [cl["item-description__weight-item_active"]]: selectedWeight === weight
                                    })}
                                >
                                    <p>{weight}</p>
                                </Button>
                            ))}
                        </div>
                    </div>
                    <div className={cl["item-description__item"]}>
                        <div className={cl["item-description__item_wrapper"]}>
                        <p className={cl["item-description__item_price_text"]}>Ціна</p>
                        <h4 className={cl["item-description__item_price_number"]}>{item?.price} грн</h4>
                        </div>
                    </div>
                    <div className={cl["item-description__item"]}>
                        <div className={clsx(cl["item-description__item_wrapper"], cl["item-description__item_wrapper_buy"])}>
                        <ProductCounter
                                count={count}
                                setCount={setCount}
                        />
                        <CustomButton className={cl["item-description__item_buy-btn"]}
                            sx={{
                                p: 1
                            }}
                        >
                                <p className={cl["item-description__item_buy-btn--text"]}>Купити</p>
                                <IconButton>
                                    <img
                                        src={ cartIcon }
                                    />
                                </IconButton>
                        </CustomButton>
                        </div>
                    </div>
            </div>
        </div>
    )

};

export default ItemPresentation;