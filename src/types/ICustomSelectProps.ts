import { SelectChangeEvent } from "@mui/material";

export default interface ICustomSelectProps {
    value: any;
    onChange: (event: SelectChangeEvent<unknown>) => void;
    options: { id: number; value: any; label: string }[];
    label?: string;
    className?: string;
}