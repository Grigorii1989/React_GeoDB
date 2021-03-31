import React, { useState } from 'react';
import { useFilmsContext } from '../../context/FilmContext';
import {
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableRow,
    TextField,
    Button,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { Search } from '../../components/Search';
import { FilmApi } from '../../services/FilmApi';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const tableConfig = [
    { header: "Название", key: "title", isLink: true },
    { header: "Год", key: "release_date" },
    { header: "Оценка", key: "vote_average" },
];

const TablePage = () => {
    const classes = useStyles();
    const { films } = useFilmsContext();

    const [query, setQuery] = useState('');
    const [searchFilm, setSearchFilm] = useState([]);

    const handleChange = (e) => {
        setQuery(e.target.value);
        FilmApi.getQuery(query)
            .then(resp => setSearchFilm(resp.data.results))
    }

    // console.log(searchFilm)

    return (
        <>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField onChange={handleChange} id="standard-basic" label="Search" placeholder="Enter your film" />
            </form>

            <Table>
                <TableHead>
                    <TableRow>
                        {tableConfig.map((cell) => (
                            <TableCell>{cell.header}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {searchFilm.map((item) => {
                        return (
                            <TableRow>
                                {tableConfig.map((cell) =>
                                    <TableCell>
                                        {cell.isLink ?
                                            <NavLink to={{
                                                pathname: `/card/${item.id}`,
                                                // query: {
                                                //     title: item.title,
                                                //     // content: item.content,
                                                //     comments: JSON.stringify(item.comments)

                                                // }
                                            }}>
                                                {/* {`/card/${item.id}`}> */}
                                                {item[cell.key]}
                                            </NavLink>
                                            :
                                            item[cell.key]
                                        }
                                    </TableCell>
                                )
                                }
                            </TableRow>
                        );
                    })}
                </TableBody>
                <TableFooter>
                </TableFooter>
            </Table>
        </>
    )
}

export { TablePage };