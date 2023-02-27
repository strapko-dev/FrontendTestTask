import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { dataServices } from "../data/dataServices";
import CardService from "./CardService";

export interface DataServicesProps {
    name: string;
    address: string;
    distance: string;
    rate: string;
    img: string;
    category: string;
}

interface CategoryProps {
    category: string;
}

const Services: React.FC<CategoryProps> = ({category}) => {
    const [items, setItems] = useState<DataServicesProps[]>([])

    useEffect(() => {
        let data = dataServices
        if (category === 'all') {
            setItems(data)
        } else {
            if (category === 'haircuts') {
                data = data.filter((s) => s.category === 'haircuts')
            } else if (category === 'makeUp') {
                data = data.filter((s) => s.category === 'makeUp')
            } else if (category === 'manicure') {
                data = data.filter((s) => s.category === 'manicure')
            }
            setItems(data)
        }
    }, [category])

    return (
        <Grid container>
            {
                items.map((s) => {
                    return (
                        <Grid xs={12} item key={s.name}>
                            <CardService data={s} />
                        </Grid>
                    )
                })
            }
        </Grid>
    );
}

export default Services;