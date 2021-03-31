import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { NavLink, useParams } from 'react-router-dom'
import { FilmApi } from '../../services/FilmApi';
import { ApiService } from '../../services/ApiService';
import { useFilmsContext } from '../../context/FilmContext';
import Box from '@material-ui/core/Box';

//const { watchFilms, deleteToWatch } = useContext(Context);

const useStyles = makeStyles({
    root: {
        maxWidth: 345
    }
});

const FilmCardPage = () => {
    const { id } = useParams()
    const classes = useStyles();
    // const item = JSON.parse(this.props.comments)
    const [item, setItem] = useState({})
    useEffect(() => {
        FilmApi.getOneById(id).then(resp => {
            console.log(resp)
            return setItem(resp?.data)
        })
    }, []);


    return (
        <Box m={3}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.cardImage}
                        component="img"
                        image={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                    />
                    <CardContent className={classes.cardText}>
                        <Typography gutterBottom variant="h5" component="h2">
                            {item.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {item.overview}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        <NavLink to={`/`}>
                            Home page
                            </NavLink>
                    </Button>
                    {/* <Button onClick={() => addToWatch(item.title, item.overview, item.poster_path)} size="small" color="primary">
                        Watch film.
                    </Button> */}
                </CardActions>
            </Card>
        </Box >
    );
};
export { FilmCardPage }