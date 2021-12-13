import React from "react";
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    makeStyles,
    Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    card: {
        marginBottom: theme.spacing(5),
    },
    media: {
        height: 250,
        [theme.breakpoints.down("sm")]: {
            height: 150,
        },
    },
}));

const Post = () => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="https://images.pexels.com/photos/7319337/pexels-photo-7319337.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    title="My Post"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        My first Post
                    </Typography>
                    <Typography cariant="body2">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Corporis non atque repudiandae a aut maiores ipsum
                        saepe ab ut cupiditate itaque laudantium est ullam nulla
                        accusamus officiis, aperiam dolores aliquam voluptas
                        numquam nobis eum. Laudantium aut atque veritatis quis
                        veniam?
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" variant="contained">
                    Share
                </Button>
                <Button size="small" color="secondary" variant="contained">
                    Learn more
                </Button>
            </CardActions>
        </Card>
    );
};

export default Post;
