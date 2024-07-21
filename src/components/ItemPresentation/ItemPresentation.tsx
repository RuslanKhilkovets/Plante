import { FC, useState } from "react";
import cl from "./ItemPresentation.module.scss"
import { Button } from "@mui/base";
import ProductCounter from "../ProductCounter/ProductCounter";
import CustomButton from "../StyledComponents/CustomButton";
import { IconButton } from "@mui/material";
import cartIcon from "../../icons/cart.svg";
import STOCK_VARIANT from "../../constants/StockVariants";
import clsx from "clsx";
import ItemSlider from "../ItemSlider/ItemSlider";


const ItemPresentation: FC = ( { item } ) => {
    const [count, setCount] = useState<number>(1);

    return (
        <div className={cl["item"]}>
            <div className={cl["item-slider"]}>
                <ItemSlider/>
            </div>
            <div className={cl["item-description"]}>
                    <p className={cl["item-description__title"]}>{item?.title}</p>
                    <div className={cl["item-description__info"]}>
                        <p className={clsx(cl["item-description__info--text"], {
                            [cl["item-description__info--exists"]]: item.isInStock,
                            [cl["item-description__info--non-exists"]]: !item.isInStock,
                        })}>
                            {item.isInStock ? `${STOCK_VARIANT.EXISTS} (${item.count} од.)` : STOCK_VARIANT.NOT_EXISTS} 
                        </p>
                        <p className={cl["item-description__info--text"]}>Код: {item?.code}</p>
                        <p className={cl["item-description__info--text"]}>Виробник: {item?.producer}</p>
                    </div>
                    <div className={cl["item-description__item"]}>
                        <p className={cl["item-description__item--title"]}>
                           Вага
                        </p> 
                        <div className={cl["item-description__item_wrapper"]}>
                            {
                                item?.weightItems?.map((item: number) => {
                                    return  (
                                        <Button className={cl["item-description__weight-item"]}>
                                            <p>{item}</p>
                                        </Button>  
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className={cl["item-description__item"]}>
                        <div className={cl["item-description__item_wrapper"]}>
                           <p>Ціна</p>
                           <h6>{item?.price} грн</h6>
                        </div>
                    </div>
                    <div className={cl["item-description__item"]}>
                        <div className={cl["item-description__item_wrapper"]}>
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
    );
};

export default ItemPresentation;