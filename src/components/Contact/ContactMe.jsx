/* eslint-disable no-console */
import React, { useState } from 'react';
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
  },
}));

const ContactMe = ({ messageSent, setMessage }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [messageBody, setMessageBody] = useState('');
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    messageBody: '',
  });

  const classes = useStyles();
  const sendEmail = (e) => {
    const fields = [firstName, lastName, email, subject, messageBody];
    let errorsLength = 0;

    fields.forEach((element, index) => {
      console.log(element);
      if (element.length === 0) {
        if (index === 0) {
          setErrors({...errors,  firstName: 'First name cannot be empty.' });
          errorsLength += 1;
        }
        if (index === 1) {
          setErrors({...errors, lastName: 'First name cannot be empty.' });
          errorsLength += 1;
        }
        if (index === 2) {
          setErrors({...errors, email: 'First name cannot be empty.' });
          errorsLength += 1;
        }
        if (index === 3) {
          setErrors({...errors, subject: 'First name cannot be empty.' });
          errorsLength += 1;
        }
        if (index === 4) {
          setErrors({...errors, messageBody: 'First name cannot be empty.' });
          errorsLength += 1;
        }
      }
    });

    if (errorsLength > 0) {
      e.preventDefault();
      return;
    }

    e.preventDefault();
    emailjs
      .sendForm('service_xp79009', 'template_m44f5yi', e.target, 'user_p1Kqvf8YZfsBOvT87Ij6a')
      .then(
        (result) => {
          console.log(result.text);
          setMessage(true);
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
                error={Boolean(errors?.firstName)}
                autoComplete="fname"
                name="firstname"
                variant="outlined"
                required
                fullWidth
                id="firstname"
                label="First Name"
                style={{ backgroundColor: 'white' }}
                InputProps={{
                  classes: {
                    input: classes.resize,
                  },
                }}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                value={firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                error={Boolean(errors?.lastName)}
                variant="outlined"
                required
                fullWidth
                id="lastname"
                label="Last Name"
                name="lastname"
                autoComplete="lname"
                style={{ backgroundColor: 'white' }}
                InputProps={{
                  classes: {
                    input: classes.resize,
                  },
                }}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                value={lastName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={Boolean(errors?.email)}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                style={{ backgroundColor: 'white' }}
                InputProps={{
                  classes: {
                    input: classes.resize,
                  },
                }}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={Boolean(errors?.subject)}
                variant="outlined"
                required
                fullWidth
                id="subject"
                label="Subject"
                name="subject"
                autoComplete="subject"
                style={{ backgroundColor: 'white' }}
                InputProps={{
                  classes: {
                    input: classes.resize,
                  },
                }}
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
                value={subject}
              />
            </Grid>
          </Grid>

          <Grid container justifyContent="flex-end">
            <Grid item xs={12}>
              <TextField
                error={Boolean(errors?.messageBody)}
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
                style={{ marginTop: '2%', backgroundColor: 'white' }}
                InputProps={{
                  classes: {
                    input: classes.resize,
                  },
                }}
                onChange={(e) => {
                  setMessageBody(e.target.value);
                }}
                value={messageBody}
              />
            </Grid>
            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
              <Button
                type="submit"
                variant="contained"
                className={classes.submit}
                style={{
                  fontSize: '1.5rem',
                  width: '50%',
                  backgroundColor: 'white',
                  color: '#02aab0',
                }}
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
