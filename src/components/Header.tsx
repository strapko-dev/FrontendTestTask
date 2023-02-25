import { ArrowBack, Search } from "@mui/icons-material";
import { Grid, IconButton, Typography } from "@mui/material";
import FilterButtons from "./FilterButtons";

const Header: React.FC<any> = ({setServicesFilter}) => {
    return (
        <>
        <section>
            <Grid container spacing={1} sx={{margin: '0px', width: '100%', marginTop: '30px'}}>
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