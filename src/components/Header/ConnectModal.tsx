import { Box, Button, Dialog, DialogContent, DialogTitle, Typography } from "@mui/material";
import cl from "./ConnectModal.module.scss";
import { UnstyledInputBasic } from "../StyledComponents/CustomInput";
import CustomInput from "../StyledComponents/CustomInput";
import StyledButton from "../StyledComponents/CustomButton";

const ConnectModal = ({ open, onClose } : any) => {

    return (
        <Dialog
            open={open}
            fullWidth={true}
            onClose={onClose}
            sx={{
                ".MuiDialog-paper": {
                    borderRadius: "30px",
                    width: "400px"
                }
            }}
        >
            <DialogTitle
                sx={{
                    display: "flex",
                    justifyContent: "space-between", 
                }}
            >
                <Box>
                    <Typography variant="h6" sx={{
                        mt: 1,
                        color: "#121212",
                        fontSize: "1.5rem",
                        fontStyle: "normal",
                        fontWeight: "bold",
                        lineHeight: "100%"
                    }}>
                        Зворотній зв’язок
                    </Typography>
                    <Typography variant="p" sx={{
                        color: "#868686",
                        fontSize: "1rem",
                        fontStyle: "normal",
                        lineHeight: "120%"
                    }}>
                        Ми зв’яжемся з вами протягом 5хв
                    </Typography>
                </Box>
                
                <Button onClick={onClose} className="" sx={{
                    p: 0,
                    m: 0,
                }}>
                    <svg className={cl.closeButton}></svg>
                </Button>
            </DialogTitle>

            <DialogContent>
                    <Typography variant="h6" sx={{
                        color: "#868686",
                        fontSize: "1rem",
                        fontStyle: "normal",
                        lineHeight: "120%",
                        py: 1
                    }}>
                        Телефон *
                    </Typography>
                <CustomInput
                    
                />
                    <Typography variant="h6" sx={{
                        color: "#868686",
                        fontSize: "1rem",
                        fontStyle: "normal",
                        lineHeight: "120%",
                        py: 1
                    }}>
                        Ім`я
                    </Typography>
                <CustomInput
                    
                />
                <StyledButton>
                    Отримати консультацію
                </StyledButton>
            </DialogContent>
        </Dialog>
    );
};

export default ConnectModal;