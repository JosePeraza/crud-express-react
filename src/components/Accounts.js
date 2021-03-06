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

    const [accounts, setAccounts] = useState([]);



    // Llamar Api
    useEffect(() => {
        const promise = axios(`https://cors-anywhere.herokuapp.com/https://mighty-mesa-47222.herokuapp.com/accounts/get/`);

        promise.then((res) => {
            setAccounts(res.data);
        });
        },[]);

    useEffect(() => {
        console.log(accounts);
    },[accounts]);
  


  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Cuentas activas</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Ship To</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {accounts.map((value) => (
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