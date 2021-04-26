import React from 'react';
import Title from './Title';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';

export default function FormComponent() {
  return (
    <React.Fragment>
    <Title>Actualizar Cuenta</Title>
        <FormControl>
            <TextField
            id="first-name"
            label="Primer nombre"
            style={{ margin: 8 }}
            fullWidth
            margin="normal"
            InputLabelProps={{
                shrink: true,
            }}
            />

            <TextField
            id="last-name"
            label="Segundo nombre"
            style={{ margin: 8 }}
            fullWidth
            margin="normal"
            InputLabelProps={{
                shrink: true,
            }}
            />   

            <TextField
            id="email"
            label="Email"
            style={{ margin: 8 }}
            fullWidth
            margin="normal"
            InputLabelProps={{
                shrink: true,
            }}
            />      

            <TextField
            id="telephone"
            label="Telefono"
            style={{ margin: 8 }}
            fullWidth
            margin="normal"
            InputLabelProps={{
                shrink: true,
            }}
            />  
            <Button variant="contained" color="primary">
                Actualizar
            </Button> 
        </FormControl>
    </React.Fragment>
  );
}