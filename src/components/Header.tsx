import { ArrowBack, Search } from "@mui/icons-material";
import { Grid, IconButton, Typography } from "@mui/material";
import FilterButtons from "./FilterButtons";
import { serviceProps } from "../App";
import { Dispatch, SetStateAction } from "react";

export type setServiceProps = {
    setServicesFilter: Dispatch<SetStateAction<serviceProps | undefined>>
}

const Header: React.FC<setServiceProps> = ({setServicesFilter}) => {
    return (
        <>
        <section>
            <Grid container spacing={1} sx={{margin: '0px', width: '100%', marginTop: '20px', paddingRight: '13px'}}>
                <Grid xs={1} item>
                    <IconButton
                    sx={{
                        color: 'var(--colors-text-black)',
                        marginLeft: '-8px'
                    }}
                    >
                        <ArrowBack/>
                    </IconButton>
                </Grid>
                
                <Grid xs={10} item>
                    <Typography
                    variant="h1"
                    sx={{
                        color: 'var(--colors-text-black)',
                        fontSize: 'var(--fs-2xl)',
                        fontWeight: 'var(--fw-bold)',
                        marginLeft: '10px',
                        marginTop: '5px',
                    }}
                    >
                        Nearby Your Location
                    </Typography>
                </Grid>
                
                <Grid xs={1} item>
                    <IconButton
                    sx={{
                        color: 'var(--colors-text-black)'
                    }}
                    >
                        <Search />
                    </IconButton>
                </Grid>
            </Grid>
        </section>
        
        <FilterButtons setServicesFilter={setServicesFilter} />
        </>
    );
}

export default Header;