import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        width: 250,
        height: 270,
    },
});

const EventCard = (props) => {
    const { img, title } = props.eventCard;
    const classes = useStyles();
    return (
        <Card className={classes.root} >
            <CardActionArea >
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height='200'
                    image={img}
                    title="Contemplative Reptile"
                />
                <CardContent >
                    <Typography gutterBottom >
                        {title}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default EventCard;