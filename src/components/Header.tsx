import { ArrowBack, Search } from "@mui/icons-material";
import { Grid, IconButton, Typography } from "@mui/material";
import FilterButtons from "./FilterButtons";
import { Dispatch, SetStateAction } from "react";

export interface setServiceProps {
    setCategory: Dispatch<SetStateAction<string>>;
    category: string;
}

const Header: React.FC<setServiceProps> = ({setCategory, category}) => {
    return (
        <>
        <section>
            <Grid container spacing={1} sx={{margin: '0px', width: '100%', marginTop: '20px', paddingRight: '13px'}}>
                <Grid xs={1} item>
                    <IconButton
                    sx={{
                        color: 'colorsTextBlack.main',
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
                        color: 'colorsTextBlack.main',
                        fontSize: 'fs2Xl',
                        fontWeight: 'fontWeightBold',
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
                        color: 'colorsTextBlack.main',
                    }}
                    >
                        <Search />
                    </IconButton>
                </Grid>
            </Grid>
        </section>
        
        <FilterButtons setCategory={setCategory} category={category} />
        </>
    );
}

export default Header;