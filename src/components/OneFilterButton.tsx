import { Button, Grid } from "@mui/material"
import { Dispatch, SetStateAction } from "react";

interface ButtonProps {
    category: string;
    setCategory: Dispatch<SetStateAction<string>>;
    currentCategory: string;
    sx: number;
}

const OneFilterButton: React.FC<ButtonProps> = ({ category, setCategory, currentCategory, sx }) => {
    return (
        <Grid xs={sx} item>
            <Button size="small"
            variant={category === currentCategory ? 'contained' : 'outlined'} 
            onClick={() => setCategory(currentCategory)} 
            color="primary"
            sx={{
                fontSize: 'var(--fs-md)',
                fontWeight: 'var(--fw-bold)',
                boxShadow: 'none',
                borderRadius: '30px',
                width: '100%',
            }}>{currentCategory}</Button>
        </Grid>
    )
}

export default OneFilterButton