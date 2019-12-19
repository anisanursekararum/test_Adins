import React, { Component } from 'react';
import './App.css';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class Login extends Component {
  state = {
    username: '',
    password: '',
  }
  componentDidMount() {
    
  }
  render() {
    return (
          <div>              
              <center>
                  <Card className="card">
                  <form name="form" onSubmit={this.handleSubmit}>
                  <br/>
                  <Typography gutterBottom>
                    LOGIN
                  </Typography>
                  <br/>
                  <TextField
                    name="username"
                    label="Username"
                    // value={email}
                    onChange={this.handleChange}
                    className="textField"
                  />
                  <br />
                  <TextField id="standard-password"
                    name="password"
                    label="Password"
                    margin="normal"
                    className="textField"
                    // value={password}
                    onChange={this.handleChange}
                    // type={showPassword ? 'text' : 'password'}
                  />
                  <div >
                    <br/>
                    <Button type="submit" color="secondary"
                      variant="contained" size="medium"  className="btn">Login</Button>
                  </div>
                  </form>
            </Card>
          </center>
        </div>
    );
  }
}