import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    maxWidth: 400,
    margin: '0 auto',
    // padding: theme.spacing(2),
    // borderRadius: theme.spacing(1),
  },
  submitButton: {
    // marginTop: theme.spacing(2),
  },
  focused: {
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: '#ffc451',
      },
    },
    '& .MuiInputLabel-root.Mui-focused': {
        color: '#ffc451',
    }
  },
}));

const ContactPage = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    demande: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Données du formulaire:', formData);
    // Ajoutez ici le code pour envoyer les données du formulaire à votre backend ou effectuer d'autres actions
  };

  return (
    <div className={classes.form} id="contact">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6"  style={{textAlign: 'center',color: '#ffc451', fontFamily: 'Markot-Book',fontWeight: 'bold'}}>
              CONTACTEZ-NOUS
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField
              
              name="nom"
              label="Nom"
              variant="outlined"
              fullWidth
              required
              value={formData.nom}
              onChange={handleChange}
              className={classes.focused}
              InputLabelProps={{
                  
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="prenom"
              label="Prénom"
              variant="outlined"
              fullWidth
              required
              value={formData.prenom}
              className={classes.focused}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="email"
              label="Adresse e-mail"
              variant="outlined"
              fullWidth
              required
              value={formData.email}
              className={classes.focused}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="telephone"
              label="Numéro de téléphone"
              variant="outlined"
              fullWidth
              required
              className={classes.focused}
              value={formData.telephone}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="demande"
              label="Votre demande"
              variant="outlined"
              fullWidth
              required
              select
              className={classes.focused}
              SelectProps={{
                native: true,
              }}
              value={formData.demande}
              onChange={handleChange}
            >
              <option value=""></option>
              <option value="Informations">Informations</option>
              <option value="devis">Devis</option>
              <option value="éligibilité">Éligibilité</option>
              <option value="partenariat">Partenariat</option>
              <option value="demande de rappel">Demande de rappel</option>
              <option value="autre">Autre</option>
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="message"
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              className={classes.focused}
              rows={4}
              value={formData.message}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              className={classes.submitButton}
            >
              Envoyer le formulaire
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default ContactPage;
