import React, { useState } from "react";

import { Box, Dialog, DialogContent, DialogTitle, Typography } from "@mui/material";

import CustomInput from "../../UI/Input/CustomInput";
import CustomButton from "../../UI/Button/CustomButton";
import CloseModalButton from "../../UI/CloseModalButton/CloseModalButton";
import CustomLink from "../../UI/Link/CustomLink";

import IDialogProps from "../../../types/IDialogProps";
import IContactFormProps from "../../../types/IContactFormProps";

import PATHS from "../../../router/paths";

import cl from "./ConnectModal.module.scss";


const ConnectModal: React.FC<IDialogProps> = ({ open, onClose }) => {

  const [form, setForm] = useState<IContactFormProps>({ phone: "", name: "" });

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const dialogPaperStyles = {
    borderRadius: "30px",
    width: "min(100%, 500px)",
    py: 1,
  };

  return (
    <Dialog
      open={open}
      fullWidth
      onClose={onClose}
      sx={{ ".MuiDialog-paper": dialogPaperStyles }}
      className={cl["connect-dialog"]}
    >
      <DialogTitle className={cl["connect-dialog__header"]}>
        <Box>
          <Typography 
            className={cl["connect-dialog__title"]}
          >
            Зворотній зв’язок
          </Typography>
          <Typography 
            className={cl["connect-dialog__subtitle"]}
          >
            Ми зв’яжемось з вами протягом 5 хв
          </Typography>
        </Box>
        <CloseModalButton onClick={onClose} />
      </DialogTitle>

      <DialogContent>
        <form action="#">
            
          <Typography className={cl["connect-dialog__input-label"]}>
            Телефон *
          </Typography>
          <CustomInput 
            value={form.phone} 
            onChange={onInputChange} 
            name="phone" 
            className={cl["connect-dialog__input"]}
          />
      
          <Typography className={cl["connect-dialog__input-label"]}>
            Ім’я
          </Typography>
          <CustomInput 
            value={form.name} 
            onChange={onInputChange} 
            name="name" 
            className={cl["connect-dialog__input"]}
          />

          <div className={cl['connect-dialog__dialog-consents']}>
            “
            Відправляючи форму ви погоджуєтесь нa <br/>

            <CustomLink 
              to={PATHS.MAIN_PAGE} 
              className={cl["connect-dialog__consents-link"]}
            >
              Умови використання 
            </CustomLink>
            та 
            <CustomLink 
              to={PATHS.MAIN_PAGE} 
              className={cl["connect-dialog__consents-link"]}
            > 
               Політику конфіденційності.
            </CustomLink>
            "
          </div>

          <CustomButton>Отримати консультацію</CustomButton>

        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ConnectModal;
