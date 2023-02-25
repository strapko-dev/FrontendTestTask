import { Button, Grid } from "@mui/material";
import { useEffect, useState } from "react";

const FilterButtons: React.FC<any> = ({ setServicesFilter }) => {
    const [all, setAll] = useState(true)
    const [haircuts, setHaircuts] = useState(false)
    const [makeUp, setMakeUp] = useState(false)
    const [manicure, setManicure] = useState(false)

    const services = {all, haircuts, makeUp, manicure}

    useEffect(() => {
        setServicesFilter(services)
    }, [all, haircuts, makeUp, manicure])

    const handleToggle = (setButton: Function): void => {
        setAll(false)
        setHaircuts(false)
        setMakeUp(false)
        setManicure(false)

        setButton(true)
    }

    return (
        <section style={{width: '100%',  overflowX: 'scroll', marginTop: '20px'}}>
            <Grid container gap={1} sx={{width: 'max-content', margin: '0 auto'}}>
                <Grid xs={2} item>
                    <Button size="small"
                    variant={all === true ? 'contained' : 'outlined'} 
                    onClick={() => handleToggle(setAll)} 
                    color="primary" 
                    sx={{
                        fontSize: 'var(--fs-md)',
                        fontWeight: 'var(--fw-bold)',
                        boxShadow: 'none',
                        borderRadius: '30px',
                        width: '100%',
                    }}>All</Button>
                </Grid>
                <Grid xs={3} item>
                    <Button size="small"
                    variant={haircuts === true ? 'contained' : 'outlined'} 
                    onClick={() => handleToggle(setHaircuts)} 
                    color="primary" 
                    sx={{
                        fontSize: 'var(--fs-md)',
                        fontWeight: 'var(--fw-bold)',
                        boxShadow: 'none',
                        borderRadius: '30px',
                        width: '100%',
                    }}>Haircuts</Button>
                </Grid>
                <Grid xs={3} item>
                    <Button size="small"
                    variant={makeUp === true ? 'contained' : 'outlined'} 
                    onClick={() => handleToggle(setMakeUp)} 
                    color="primary" 
                    sx={{
                        fontSize: 'var(--fs-md)',
                        fontWeight: 'var(--fw-bold)',
                        boxShadow: 'none',
                        borderRadius: '30px',
                        width: '100%',
                    }}>Make up</Button>
                </Grid>
                <Grid xs={3} item>
                    <Button size="small"
                    variant={manicure === true ? 'contained' : 'outlined'} 
                    onClick={() => handleToggle(setManicure)} 
                    color="primary" 
                    sx={{
                        fontSize: 'var(--fs-md)',
                        fontWeight: 'var(--fw-bold)',
                        boxShadow: 'none',
                        borderRadius: '30px',
                        width: '100%',
                    }}>Manicure</Button>
                </Grid>
            </Grid>
        </section>
    );
}

export default FilterButtons;