import React, { useRef, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import fr from 'date-fns/locale/fr';
import { format } from 'date-fns';
import emailjs from '@emailjs/browser';
import { CircularProgress } from '@mui/material';
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

const PriseDeRendezVous = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    telephone: '',
    email: '',
    adresse: '',
    rendezVous: '',
    informations: '',
  });
const [loading,setloading] = useState(false)
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const form = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    setloading(true)
    emailjs.sendForm("service_nqwqfd5","template_e39h309",form.current,"8ovpGJ2OJPb-Hiuv3")
    .then((result)=>{
      console.log(result.text);
    })
    .catch((error)=>{
      console.log(error);
    })
    .finally(()=>{ 
    setloading(false)
    //  setTimeout(() => {
    //    setlottieJson(loading.animationData)
    //    setclicked(false)
    //  }, 4000);
    })
   };

  return (
    <div className='hidden' id="rdv" style={{height:'100vh',maxWidth: 400, margin: '0 auto', justifyContent:'center', alignItems:'center',paddingTop: '20px'}}>
      <form ref={form} onSubmit={handleSubmit}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
          <Typography variant="h6"  style={{textAlign: 'center',color: '#ffc451', fontFamily: 'Markot-Book',fontWeight: 'bold'}}>
              RENDEZ-VOUS
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField
              className={classes.focused}
              name="nom"
              label="Nom"
              variant="outlined"
              fullWidth
              required
              value={formData.nom}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              className={classes.focused}
              name="prenom"
              label="Prénom"
              variant="outlined"
              fullWidth
              required
              value={formData.prenom}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={classes.focused}
              name="telephone"
              label="Numéro de téléphone"
              variant="outlined"
              fullWidth
              required
              value={formData.telephone}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              style={{fontFamily: 'Markot-Book'}}
              className={classes.focused}
              name="email"
              label="Adresse e-mail"
              variant="outlined"
              fullWidth
              required
              value={formData.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={classes.focused}
              name="adresse"
              label="Adresse postale"
              variant="outlined"
              fullWidth
              required
              value={formData.adresse}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>            
          <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Mon Rendez-vous"
                name="rendezVous"
                minDate={new Date()}
                localeText={{ year: 'Année', month: 'Mois', day: 'Jour' }}
                value={formData.rendezVous}
                className={classes.focused}
                sx={{ width: '100%' }}
                
                renderDay={(day, _value, DayProps) => {
                    const formattedDate = format(day, 'dd MMMM yy', { locale: fr });
                    return <span {...DayProps}>{formattedDate}</span>;
                  }}
                
                onChange={(date) =>
                  setFormData((prevData) => ({
                    ...prevData,
                    rendezVous: date,
                  }))
                }
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={classes.focused}
              name="informations"
              label="Informations complémentaires"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={formData.informations}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="warning"
              fullWidth
              className={classes.submitButton}
            >
              {loading ? <CircularProgress style={{color: 'white'}} size={25}/> : 'Réserver'}
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default PriseDeRendezVous;
