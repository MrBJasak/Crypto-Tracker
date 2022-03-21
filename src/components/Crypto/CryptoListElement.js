import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, CardActions, Button, CardMedia } from '@mui/material';

const CryptoListElement = ({ id, symbol, name, image, currentPrice, vsCurrency }) => {
    return (
        <Card sx={{ maxWidth: 300 }}>
            <CardMedia component="img" height="90" image={image} alt={symbol} />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {currentPrice + ' ' + vsCurrency.toUpperCase()}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">
                    <Link className="btn" to={`/list/${id}`}>
                        Show Details
                    </Link>
                </Button>
            </CardActions>
        </Card>
    );
};

export default CryptoListElement;
