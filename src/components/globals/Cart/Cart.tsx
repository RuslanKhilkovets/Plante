import React from "react";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";

import { Dialog, DialogActions, DialogContent, DialogTitle, Fade, Grid, Typography } from "@mui/material";

import CustomButton from "../../UI/Button/CustomButton";
import CloseModalButton from "../../UI/CloseModalButton/CloseModalButton";
import CartItem from "../CartItem/CartItem";

import emptyCartImage from "../../../icons/empty.png";
import calculateTotalPrice from "../../../helpers/calculateTotalPrice";
import { useAppSelector } from "../../../hooks/redux";

import PATHS from "../../../router/paths";
import IDialogProps from "../../../types/IDialogProps";

import cl from "./Cart.module.scss";


const dialogPaperStyles = (theme: any) => ({
  borderRadius: "30px",
  width: "min(100%, 700px)",
  minHeight: "600px",
  p: "10px 20px",
  [theme.breakpoints.down('sm')]: {
    width: "100vw",
    height: "100vh",
    maxHeight: "100vh",
    maxWidth: "100vw",
    borderRadius: 0,
    p: 0,
    m: 0
  },
});

const Cart: React.FC<IDialogProps> = ({ open, onClose }) => {
	const navigate = useNavigate();
	const { items: cart } = useAppSelector(state => state.cartReducer)
	
	const bookOrder = () => {
		navigate(PATHS.CHECKOUT);
		onClose();
	}

  	const renderActionsButtons = () => {
		return cart.length === 0 ? 
			(
				<CustomButton onClick={onClose}>До покупок</CustomButton>
			) : (
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<CustomButton onClick={bookOrder}>Оформити замовлення</CustomButton>
					</Grid>
					<Grid item xs={12}>
						<CustomButton onClick={onClose} variant="secondary">Продовжити покупки</CustomButton>
					</Grid>
				</Grid>
			);
  	};

	const renderContent = () => {
		return cart.length !== 0 ? (
			<>
				<div className={cl["cart__cart-data"]}>

					<div className={cl["cart__cart-container"]}>
						{
							cart?.map(cartItem => {
								return <CartItem item={cartItem}/>
							})
						}
					</div>
				</div>
				<div className={cl["cart-price"]}>
					<p className={cl["cart-price__text"]}>Всього</p>
					<div className={cl["cart-price__line"]}></div>
					<p className={cl["cart-price__text"]}>{ calculateTotalPrice(cart) } грн</p>
				</div>
			</>

		)
		: 
			<div className={cl["empty-cart"]}>
				<img
					src={ emptyCartImage }
				/>
				<p className={cl["empty-cart__text"]}>Кошик порожній</p>
			</div>
	};

	return (
		<Dialog
			open={open}
			fullWidth
			onClose={onClose}
			sx={(theme) => ({ ".MuiDialog-paper": dialogPaperStyles(theme) })}
			className={cl["cart"]}
			TransitionComponent={Fade}
			TransitionProps={{ timeout: 500 }}
		>
			<DialogTitle className={cl["cart__header"]}>
				<Typography className={cl["cart__title"]}>Корзина</Typography>
				<CloseModalButton onClick={onClose} />
			</DialogTitle>

			<DialogContent
				className={clsx({
					[cl["cart__content_empty"]]: cart?.length === 0,
					[cl["cart__content"]]: cart?.length !== 0
				})}
			>
				{renderContent()}
			</DialogContent>

			<DialogActions
				className={cl["cart__btns"]}
			>
				{renderActionsButtons()}
			</DialogActions>
		</Dialog>
	);
};

export default Cart;