import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import { useState, useEffect } from "react";
import axios from 'axios';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {

    const [clients, setClients] = useState([]);



    // Llamar Api
    useEffect(() => {
        const promise = axios(`https://cors-anywhere.herokuapp.com/https://mighty-mesa-47222.herokuapp.com/clientes/get/`);

        promise.then((res) => {
            setClients(res.data);
        });
    },[]);

    useEffect(() => {
        console.log(clients);
    },[clients]);


  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Usuarios activos</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell>Apellido</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Telefono</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clients.map((value) => (
            <TableRow key={value.id}>
              <TableCell>{value.first_name}</TableCell>
              <TableCell>{value.last_name}</TableCell>
              <TableCell>{value.email}</TableCell>
              <TableCell>{value.telephone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}