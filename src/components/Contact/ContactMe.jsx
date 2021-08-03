/* eslint-disable no-console */
import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane, faEnvelope, fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas, faPaperPlane, faEnvelope);

const useStyles = makeStyles((theme) => ({
  contactMe: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '50%',
  },
  main: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    '& label.Mui-focused': {
	  fontSize: '2rem',
    },
    '& label': {
      color: '#02aab0',
	  fontSize: '1.5rem',
    },
    '& fieldset': {
      borderColor: 'gray',
    },
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  message: {
    verticalAlign: 'center',
    width: '40%',
    height: '80%',
    margin: '0 auto',
  },
  msgField: {
    height: '3rem',
  },
  resize: {
	  fontSize: '1.5rem',
  }
}));

const ContactMe = () => {
  const classes = useStyles();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_xp79009', 'template_m44f5yi', e.target, 'user_p1Kqvf8YZfsBOvT87Ij6a')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <Container component="main" maxWidth="md" className={classes.main} id="contactMeArea">
      <CssBaseline />
      <div className={classes.contactMe}>
        <form className={classes.form} onSubmit={sendEmail} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstname"
                variant="outlined"
                required
                fullWidth
                id="firstname"
                label="First Name"
                color="red"
                style={{ backgroundColor: 'white', opacity: '0.75' }}
				InputProps={{
					classes: {
					  input: classes.resize,
					},
				}}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastname"
                label="Last Name"
                name="lastname"
                autoComplete="lname"
                style={{ backgroundColor: 'white', opacity: '0.75' }}
				InputProps={{
					classes: {
					  input: classes.resize,
					},
				}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                style={{ backgroundColor: 'white', opacity: '0.75' }}
				InputProps={{
					classes: {
					  input: classes.resize,
					},
				}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="subject"
                label="Subject"
                name="subject"
                autoComplete="subject"
                style={{ backgroundColor: 'white', opacity: '0.75' }}
				InputProps={{
					classes: {
					  input: classes.resize,
					},
				}}
              />
            </Grid>
          </Grid>

          <Grid container justify="flex-end">
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                multiline
                rows="8.5"
                name="message"
                label="Message"
                type="message"
                id="message"
                autoComplete="message"
                size="medium"
                style={{ marginTop: '2%', backgroundColor: 'white', opacity: '0.75' }}
				InputProps={{
					classes: {
					  input: classes.resize,
					},
				}}
              />
            </Grid>
            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
              <Button
                type="submit"
                variant="contained"
                className={classes.submit}
                style={{ fontSize: '1.5rem', width: '50%', backgroundColor: 'white', color: '#02aab0' }}
              >
                <span style={{ marginRight: '10px' }}>
                  <FontAwesomeIcon icon={['fas', 'paper-plane']} />
                </span>{' '}
                Send
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default ContactMe;
