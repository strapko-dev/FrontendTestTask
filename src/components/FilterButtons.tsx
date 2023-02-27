import { Grid } from "@mui/material";
import { setServiceProps } from "./Header";
import OneFilterButton from "./OneFilterButton";

const FilterButtons: React.FC<setServiceProps> = ({ category, setCategory }) => {
    const categoryList = ['all', 'haircuts', 'makeUp', 'manicure']
    let count = 0

    return (
        <section style={{width: '100%',  overflowX: 'scroll', marginTop: '20px'}}>
            <Grid container gap={1} sx={{width: 'max-content', margin: '0 auto'}}>
                { 
                categoryList.map((currentCategory) => {
                    count += 1
                    if (count <= 1) {
                        return (
                            <OneFilterButton 
                            setCategory={setCategory} 
                            category={category} 
                            currentCategory={currentCategory} 
                            sx={2} 
                            key={currentCategory} 
                            />
                        )
                    } else {
                        return (
                            <OneFilterButton 
                            setCategory={setCategory} 
                            category={category} 
                            currentCategory={currentCategory} 
                            sx={3} 
                            key={currentCategory} 
                            />
                        )
                    }
                }) 
                }
            </Grid>
        </section>
    );
}

export default FilterButtons;