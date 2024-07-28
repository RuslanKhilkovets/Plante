import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";

import { Button } from "@mui/base";
import { Dialog, DialogContent, Grid, IconButton } from "@mui/material";

import Logo from "../../globals/Logo/Logo";
import OrderForm from "../OrderForm/OrderForm";
import CustomInput from "../../UI/Input/CustomInput";
import CustomSelect from "../../UI/Select/CustomSelect";
import CustomRadioButton from "../../UI/Radio/CustomRadioGroup";
import CustomLink from "../../UI/Link/CustomLink";
import CustomButton from "../../UI/Button/CustomButton";
import Cart from "../../globals/Cart/Cart";

import { useAppSelector } from "../../../hooks/redux";
import calculateTotalPrice from "../../../helpers/calculateTotalPrice";
import useRedirect from "../../../hooks/useRedirect";

import IDialogProps from "../../../types/IDialogProps";
import PATHS from "../../../router/paths";

import locationIcon from "../../../icons/location_on.svg" 
import arrowIcon from "../../../icons/btn-arrow-right.png" ;
import successImage from "../../../icons/iconamoon_cloud-yes.png";

import cl from "./OrderDialog.module.scss"


enum DeliveryType {
    PostUnit = 1,
    Courier = 2,
    Self_Pickup = 3
}

enum PaymentType {
    Online = 1,
    Offline = 2
}

interface IOrderData {
    name: string;
    surname: string;
    phone: string;
    deliveryType: DeliveryType,
    city: string,
    unit: string,
    street: string
    house: string
    apartment: string,
    paymentType: PaymentType
}

const OrderDialog: React.FC<IDialogProps> = ({ open, onClose }) => {
    const navigate = useNavigate();
	const { items: cart } = useAppSelector(state => state.cartReducer)
    const orderId = Math.floor(Math.random() * 20000); // In future will be in response from server

    const [isFormCorrectFilled, setIsFormCorrectFilled] = useState<boolean>(false); 
    const [isOrderingCompleted, setIsOrderingCompleted] = useState<boolean>(false);
    const [isCartOpen, setIsCartOpen] = useState(false);

	const [orderForm, setOrderForm] = useState<IOrderData>({
        name: "",
        surname: "",
        phone: "",
        deliveryType: DeliveryType.PostUnit,
        city: "",
        unit: "",
        street: "",
        house: "",
        apartment: "",
        paymentType: PaymentType.Online      
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent) => {
        const { value, name } = e.target;
                
        setOrderForm((prev: IOrderData) => ({
            ...prev,
            [name]: value
        }));
    }

    const approveOrder = () => {
        // in the future request to server
        setIsOrderingCompleted(true);
    }

    const renderDeliveryItems = (type: DeliveryType) => {
        switch(type){
            case DeliveryType.PostUnit: {
                return (
                    <>
                        <Grid item xs={12}>
                            <label className={cl["order-form__input-label"]}>Виберіть місто</label>
                            <CustomSelect
                                value={orderForm.city}
                                options={[
                                    { id: 1, label: "Луцьк", value: "Луцьк"},
                                    { id: 2, label: "Львів", value: "Львів"},
                                    { id: 3, label: "Київ", value: "Київ"},
                                ]}
                                name="city"
                                onChange={handleInputChange}
                                className={cl["order-form__input"]}
                            />
                        </Grid>
                        {
                            orderForm.deliveryType === DeliveryType.PostUnit && !!orderForm.city
                            &&
                            <Grid item xs={12}>
                                <label className={cl["order-form__input-label"]}>Виберіть відділення</label>
                                <CustomSelect
                                    value={orderForm.unit}
                                    options={[
                                        { id: 1, label: "Відділення 1", value: 1},
                                        { id: 2, label: "Відділення 2", value: 2},
                                        { id: 3, label: "Відділення 3", value: 3},
                                    ]}
                                    name="unit"
                                    onChange={handleInputChange}
                                    className={cl["order-form__input"]}
                                />
                            </Grid>
                        }
                    </>
                )
            };
            case DeliveryType.Courier: {
                return (
                    <>
                        <Grid item xs={12}>
                            <label className={cl["order-form__input-label"]}>Виберіть місто</label>
                            <CustomSelect
                                value={orderForm.city}
                                options={[
                                    { id: 1, label: "Луцьк", value: "Київ"},
                                    { id: 2, label: "Львів", value: "Львів"},
                                    { id: 3, label: "Київ", value: "Київ"},
                                ]}
                                name="city"
                                onChange={handleInputChange}
                                className={cl["order-form__input"]}
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <label className={cl["order-form__input-label"]}>Вулиця</label>
                            <CustomInput
                                value={orderForm.street}
                                name="street"
                                onChange={handleInputChange}
                                className={cl["order-form__input"]}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <label className={cl["order-form__input-label"]}>Будинок</label>
                            <CustomInput
                                value={orderForm.house}
                                name="house"
                                onChange={handleInputChange}
                                className={cl["order-form__input"]}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <label className={cl["order-form__input-label"]}>Квартира</label>
                            <CustomInput
                                value={orderForm.apartment}
                                name="apartment"
                                onChange={handleInputChange}
                                className={cl["order-form__input"]}
                            />
                        </Grid>
                    </>
                )
            }
            case DeliveryType.Self_Pickup: {
                return (
                    <Grid item xs={12}>
                        <div className={cl["self-pickup"]}>
                            <div className={cl["self-pickup__title"]}>Самовивіз із магазину</div>
                            <div className={cl["self-pickup__content"]}>
                                <IconButton>
                                    <img
                                        src={ locationIcon }
                                    />
                                </IconButton>
                                <div>
                                    <p className={cl["self-pickup__address"]}>м. Київ, вул. Світлицького 35, оф. 43/1-1</p>
                                    <p className={cl["self-pickup__schedule"]}>Пн-Пт 08:30-17:30</p>
                                </div>
                            </div>
                        </div>
                    </Grid>
                )
            }
            default:
                return null;
        }
    }

    const renderMainContent = () => {
        return (
            !isOrderingCompleted
            ?
            <Grid 
                container
                spacing={"40px"}
            >
                <Grid item xs={12} lg={6.5}>
        
                    <h3 className={cl["order__title"]}>Оформлення замовлення</h3>

                    <Grid width={1}>
                        <div className={cl["login"]}>
                            <p className={cl["login__text"]}>
                                Увійдіть у свій кабінет, аби швидше оформити замовлення
                            </p>
                            <CustomLink to={PATHS.MAIN_PAGE}  className={cl["login__link"]}>Увійти</CustomLink>
                        </div>
                    </Grid>

                    <OrderForm
                        number={1}
                        title="Контактні дані"
                    >
                        <form action="#" className={clsx(cl["order__form"], cl["order-form"])}>
                            <Grid container spacing={"20px"}>
                                <Grid item xs={12} md={6}>
                                    <label className={cl["order-form__input-label"]}>Ім`я</label>
                                    <CustomInput
                                        value={orderForm.name}
                                        onChange={handleInputChange}
                                        name="name"
                                        placeholder="Ім`я"
                                        className={cl["order-form__input"]}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <label className={cl["order-form__input-label"]}>Прізвище</label>
                                    <CustomInput
                                        value={orderForm.surname}
                                        onChange={handleInputChange}
                                        name="surname"
                                        className={cl["order-form__input"]}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <label className={cl["order-form__input-label"]}>Телефон</label>
                                    <CustomInput
                                        value={orderForm.phone}
                                        onChange={handleInputChange}
                                        name="phone"
                                        className={cl["order-form__input"]}
                                    />
                                </Grid>
                            </Grid>
                        </form>
                    </OrderForm>
                    <OrderForm
                        number={2}
                        title="Доставка"
                    >
                        <form action="#" className={clsx(cl["order__form"], cl["order-form"])}>
                            <Grid container spacing={"20px"}>
                                <Grid item xs={12}>
                                    <label className={cl["order-form__input-label"]}>Спосіб доставки</label>
                                    <CustomSelect
                                        value={orderForm.deliveryType}
                                        options={[
                                            { id: 1, label: "Кур`єром", value: DeliveryType.Courier},
                                            { id: 2, label: "Відділення Нової Пошти", value: DeliveryType.PostUnit},
                                            { id: 3, label: "Самовивіз з магазину", value: DeliveryType.Self_Pickup},
                                        ]}
                                        name="deliveryType"
                                        onChange={handleInputChange}
                                        className={cl["order-form__input"]}
                                    />
                                </Grid>
                                { renderDeliveryItems(orderForm.deliveryType) }
                            </Grid>
                        </form>
                    </OrderForm>
                    <OrderForm
                        number={3}
                        title="Оплата"
                    >
                        <form action="#" className={clsx(cl["order__form"], cl["order-form"])}>
                            <Grid container spacing={"20px"}>
                                <Grid item xs={12}>
                                        <Grid item xs={12}>
                                            <div className={clsx(cl["order-form__radio"], {
                                                [cl["order-form__radio_active"]]: orderForm.paymentType === PaymentType.Offline
                                            })}>
                                                <label className={cl["order-form__radio-btn"]}>
                                                    <CustomRadioButton
                                                        name="paymentType"
                                                        value={PaymentType.Offline}
                                                        checked={orderForm.paymentType === PaymentType.Offline}
                                                        onChange={() => setOrderForm(prev => ({ ...prev, paymentType: PaymentType.Offline}))}
                                                    />
                                                    Оплата під час отримання товару
                                                </label>
                                            </div>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <div className={clsx(cl["order-form__radio"], {
                                                [cl["order-form__radio_active"]]: orderForm.paymentType === PaymentType.Online
                                            })}>                                                       
                                                <label className={cl["order-form__radio-btn"]}>
                                                        <CustomRadioButton
                                                            name="paymentType"
                                                            value={PaymentType.Online}
                                                            checked={orderForm.paymentType === PaymentType.Online}
                                                            onChange={() => setOrderForm(prev => ({ ...prev, paymentType: PaymentType.Online}))}
                                                        />
                                                        Оплатити карткою зараз
                                                    </label>
                                                {
                                                    orderForm.paymentType === PaymentType.Online
                                                    &&
                                                    <p className={cl["order-form__manager"]}>
                                                        Наш менеджер зв'яжеться з вами для уточнення інформації щодо оплати
                                                    </p>
                                                }
                                            </div>
                                        </Grid>
                                </Grid>
                            </Grid>
                        </form>
                    </OrderForm>
                </Grid>
                <Grid item xs={12} lg={5.5}>
                    <div className={clsx(cl["order__cart"], cl["order-cart"])}>
                        <div className={cl["order-cart__heading"]}>
                            <p className={cl["order-cart__title"]}>Ваше замовлення</p>
                            <Button className={cl["order-cart__edit"]}
                                onClick={() => setIsCartOpen(true)}
                            >
                                Редагувати
                            </Button>
                        </div>
                        <ul className={cl["order-cart__items"]}>
                            {
                                cart.map(cartItem => {
                                    return(
                                        <li className={cl["order-cart__item"]}>
                                            <div className={cl["order-cart__item-item"]}>
                                                <img
                                                    src={ cartItem?.img }
                                                    className={cl["order-cart__item--img"]}
                                                />
                                                <p className={cl["order-cart__item--text"]}>
                                                    {cartItem.title}
                                                </p>
                                            </div>
                                            <div className={cl["order-cart__item-item"]}>
                                                <p className={cl["order-cart__item--text"]}>
                                                    {cartItem.count}x
                                                </p>
                                                <p className={cl["order-cart__item--text"]}>
                                                    {cartItem.price} грн
                                                </p>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <div className={cl["order-form__sum-item"]}>
                            <p className={cl["order-form__text"]}>{cart?.length} товари на суму:</p>
                            <p className={cl["order-form__text"]}>{calculateTotalPrice(cart)} грн</p>
                        </div>
                        <div className={cl["order-form__sum-item"]}>
                            <p className={cl["order-form__text"]}>Доставка:</p>
                            <p className={cl["order-form__text"]}>за тарифами перевізника</p>
                        </div>
                        <div className={cl["line"]}></div>
                        <div className={cl["order-form__sum-item"]}>
                            <p className={cl["order-form__text"]}>Всього</p>
                            <p className={clsx(cl["order-form__text"], [cl["order-form__text_bold"]])}>{calculateTotalPrice(cart)} грн</p>
                        </div>
                    </div>
                    <p className={cl["order-cart__policies"]}>
                        “Відправляючи форму ви погоджуєтесь на <CustomLink to={PATHS.MAIN_PAGE}>Умови використання</CustomLink> та <CustomLink to={PATHS.MAIN_PAGE}>Політику конфіденційності</CustomLink>.”
                    </p>
                    <CustomButton 
                        onClick={approveOrder}
                        disabled={!isFormCorrectFilled}
                    >
                        Підтвердити замовлення
                    </CustomButton>
                    {
                        !isFormCorrectFilled
                        &&
                        <p className={cl["order-cart__invalid-data"]}>
                            Будь-ласка, спочатку заповніть всі необхідні поля
                        </p>
                    }
                </Grid>
            </Grid>
            :
            <div className={cl["order-success"]}>
                <div className={cl["order-success__content"]}>
                    <img
                        src={ successImage }
                    />
                    <div className={cl["order-success__content"]}>
                        <div className={cl["order-success__content-item"]}>
                            <p className={cl["order-success__title"]}>
                                Дякуємо!
                            </p>
                            <p className={cl["order-success__subtitle"]}>
                                Ваше замовлення обробляється
                            </p>
                        </div>
                        <div className={cl["order-success__content-item"]}>
                            <div className={cl["order-success__number-item"]}>
                                <p className={cl["order-success__number"]}>
                                    Номер замовлення:   
                                </p>
                                <p className={cl["order-success__number_bold"]}>
                                    {orderId}
                                </p>
                            </div>
                        </div>
                        <div className={cl["order-success__content-item"]}>
                            <CustomButton
                                onClick={() => navigate(PATHS.MAIN_PAGE)}
                                className={cl["order-success__btn"]}
                            >
                                <p className={cl["order-success__btn_text"]}>На головну</p>
                                <IconButton>
                                    <img
                                        src={ arrowIcon }
                                    />
                                </IconButton>
                            </CustomButton>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    useEffect(() => {
        const checkData = () => {
            const isPersonalDataFilled = 
            orderForm.name && 
            orderForm.surname && 
            orderForm.phone && 
            orderForm.deliveryType;

            if(!isPersonalDataFilled) return;

            if(
                (orderForm.deliveryType === DeliveryType.Courier
                && orderForm.city
                && orderForm.apartment
                && orderForm.house
                && orderForm.street) 
                ||
                orderForm.deliveryType === DeliveryType.PostUnit
                && orderForm.city
                && orderForm.unit
                || 
                isPersonalDataFilled
                && orderForm.deliveryType === DeliveryType.Self_Pickup
            ){
                setIsFormCorrectFilled(true)
            } 
        }
        checkData()
        
    }, [orderForm])

    useRedirect(cart?.length === 0 && !isOrderingCompleted);

	return (
		<Dialog
			open={open}
			fullScreen
			onClose={onClose}
			sx={{ ".MuiDialog-paper": {
                p: 0
            }}}
		>
			<DialogContent>
                <div className="global-container">
                    <div className="order">
                        <div className={cl["order__heading"]}>
                            <Logo/>
                        </div>
                        {renderMainContent()}
                    </div>
                </div>
				
			</DialogContent>
            <Cart
                open={isCartOpen}
                onClose={() => setIsCartOpen(false)}
            />
		</Dialog>
	);
};

export default OrderDialog;