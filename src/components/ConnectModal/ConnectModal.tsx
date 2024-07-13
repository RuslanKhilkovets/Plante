import React, { useState } from "react";

import { Box, Dialog, DialogContent, DialogTitle, Typography } from "@mui/material";

import CustomInput from "../StyledComponents/CustomInput";
import CustomButton from "../StyledComponents/CustomButton";
import CloseModalButton from "../StyledComponents/CloseModalButton";

import IConnectModalProps from "../../types/IConnectModalProps";
import IContactFormProps from "../../types/IContactFormProps";

const ConnectModal: React.FC<IConnectModalProps> = ({ open, onClose }) => {

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

  const titleTextStyles = {
    mt: 1,
    color: "#121212",
    fontSize: "2rem",
    fontStyle: "normal",
    fontWeight: "bold",
    lineHeight: "100%",
  };

  const textStyles = {
    color: "#868686",
    fontSize: "1rem",
    fontStyle: "normal",
    lineHeight: "120%",
  };
  
  return (
    <Dialog
      open={open}
      fullWidth={true}
      onClose={onClose}
      sx={{ ".MuiDialog-paper": dialogPaperStyles }}
    >
      <DialogTitle sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Typography variant="h6" sx={titleTextStyles}>
            Зворотній зв’язок
          </Typography>
          <Typography sx={textStyles}>
            Ми зв’яжемось з вами протягом 5 хв
          </Typography>
        </Box>
        <CloseModalButton onClick={onClose} />
      </DialogTitle>

      <DialogContent>
        <form action="#">
            
          <Typography variant="h6" sx={{ ...textStyles, py: 2}}>
            Телефон *
          </Typography>
          <CustomInput value={form.phone} onChange={onInputChange} name="phone" />
      
          <Typography variant="h6" sx={{ ...textStyles, py: 2}}>
            Ім’я
          </Typography>
          <CustomInput value={form.name} onChange={onInputChange} name="name" />

          <CustomButton>Отримати консультацію</CustomButton>

        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ConnectModal;
