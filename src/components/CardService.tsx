import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, Card, CardActionArea, CardActions } from '@mui/material';
import { LocationOn, StarHalf } from '@mui/icons-material';
import ButtonFavourite from './ButtonFavourite';
import { DataServicesProps } from './Services';

interface DataProps {
    data: DataServicesProps
}

const CardService: React.FC<DataProps> = (props) => {
    let {name, address, distance, rate, img} = props.data
    
    return (
        <>
            <Card sx={{ 
                width: '100%',
                marginTop: '24px',
                borderRadius: '20px',
                backgroundColor: 'colorsUiBase.main',
                boxShadow: '0px 4px 60px 0px rgba(4, 6, 15, 0.05)', 
            }}>
                <CardActionArea sx={{
                    display: 'flex',
                    width: '100%', 
                    height: '110px', 
                    margin: '0',
                }}>
                    <Box sx={{width: '80px', marginLeft: '10px'}}>
                        <img src={require(`../img/${img}.png`)} alt={name} width="80" height="80" style={{}}/>
                    </Box>

                    <CardContent sx={{flexGrow: '1'}}>

                        <Typography sx={{
                            color: 'colorsTextBlack.main',
                            fontSize: 'fsXl',
                            fontWeight: 'fontWeightBold',
                        }}>
                            {name}
                        </Typography>

                        <Typography sx={{
                            color: 'colorsTextGreyLight.main',
                            fontSize: 'fsSm',
                            fontWeight: 'fontWeightRegular',
                        }}>
                            {address}
                        </Typography>

                        <Box sx={{marginTop: '10px', display: 'flex'}}>
                            <Typography sx={{display: 'flex', alignItems: 'center'}}>
                                <LocationOn sx={{width: '15px', color: 'colorsOrange.main'}}/>
                                {distance}
                            </Typography>
                            <Typography sx={{display: 'flex', alignItems: 'center', marginLeft: '10px'}}>
                                <StarHalf sx={{width: '15px', color: 'colorsOrange.main'}} />
                                {rate}
                            </Typography>
                        </Box>

                    </CardContent>

                    <CardActions sx={{paddingTop: '5px', height: '100%', display: 'flex', alignItems: 'start'}}>
                        <ButtonFavourite />
                    </CardActions>
                </CardActionArea>
            </Card>
        </>
    );
}

export default CardService;