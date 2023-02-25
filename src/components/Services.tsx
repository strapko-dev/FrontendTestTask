import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { dataServices } from "../data/dataServices";
import CardService from "./CardService";

interface dataServicesProps {
    name: string;
    address: string;
    distance: string;
    rate: string;
    img: string;
    haircuts: boolean;
    makeUp: boolean;
    manicure: boolean;
}

interface serviceProps {
    all: boolean,
    haircuts: boolean,
    makeUp: boolean,
    manicure: boolean,
}

const Services: React.FC<any> = ({servicesFilter}: {servicesFilter: serviceProps}) => {
    const [items, setItems] = useState<dataServicesProps[]>([])

    useEffect(() => {
        if (servicesFilter) {
            let {all, haircuts, makeUp, manicure} = servicesFilter
            
            let data = dataServices
            if (all) {
                setItems(data)
            } else {
                if (haircuts === true) {
                    data = data.filter((s) => s.haircuts === true)
                } else if (makeUp === true) {
                    data = data.filter((s) => s.makeUp === true)
                } else if (manicure === true) {
                    data = data.filter((s) => s.manicure === true)
                }
                setItems(data)
            }
        }
    }, [servicesFilter])

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