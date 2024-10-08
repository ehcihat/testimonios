import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import { styled } from '@mui/material/styles';
import InfoIcon from '@mui/icons-material/Info';
import FavoriteIcon from '@mui/icons-material/Favorite';

const CustomCard = styled(Card)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[3],
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    maxWidth: 300,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}));

function Testimonio({ persona }) {
    const [like, setLike] = useState(false);

    const toggleLike = () => {
        setLike(!like);
    }

    return (
        <CustomCard sx={{alignItems:"flex-start"}}>
            <CardMedia

                component="img"
                image={persona.imageUrl}
                alt={persona.nombre}
                sx={{ width: '100%', height: 150, objectFit: 'cover' }}
            />
            <CardContent >
                <Typography variant='h5' component='h2' textAlign="center" gutterBottom>
                    Hola, soy {persona.nombre}.
                </Typography>
                <Typography variant='subtitle1' textAlign="center" sx={{ fontWeight: 'bold' }}>
                    <InfoIcon sx={{ verticalAlign: 'middle', marginRight: 0.5 }} />
                    {persona.atribute}
                </Typography>
                <Typography variant='body2' sx={{ marginTop: 1, textAlign: 'center' }}>
                    {persona.description}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton onClick={toggleLike} aria-label="like">
                    {like ? <FavoriteIcon sx={{color: "red"}} /> : <FavoriteIcon />}
                </IconButton>
            </CardActions>
        </CustomCard>
    );
}

export default Testimonio;
