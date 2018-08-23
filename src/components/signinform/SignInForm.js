import React, { Component } from "react";
import PropTypes from 'prop-types'; 
import { withStyles } from "@material-ui/core/styles";
import {
    Button,
    FormControl,
    Input,
} from "@material-ui/core";
import { styles } from "./style";

class SignInForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoClick = this.handleDemoClick.bind(this);
    };

    handleInputChange(event) {
        event.preventDefault();
        const name = event.target.name;
        this.setState({
            [ name ]: event.target.value
        });
    }

    handleSubmit(event){
        event.preventDefault();
        const params = this.state;
        this.props.signIn(params).then(res => {
            const id = res[0].id;
            const currentUser = this.state;
            localStorage.setItem("currentUser", JSON.stringify(currentUser));
            localStorage.setItem("user_id", JSON.stringify(id));
            this.context.router.history.push(`/users/${id}/dashboard/chatrooms`);
        });
    }

    handleDemoClick(){
        this.setState({
            username:"user23",
            password: "123456",
        });
    }
    
    render(){
        const { classes } = this.props;
        return(
            <div className={ classes.form }>
                <form onSubmit={ this.handleSubmit }>
                    <FormControl
                        required={true}  
                        action="/">
                        <Input
                            type="text"
                            name="username"
                            required={true}   
                            placeholder="Username" 
                            className={ classes.input }
                            value={ this.state.username }
                            onChange={ this.handleInputChange }
                        />
                    </FormControl>
                    <FormControl required={true}>
                        <Input 
                            type="password"
                            name="password" 
                            required={true}  
                            autoComplete="current-password"
                            placeholder="Password" 
                            className={ classes.input }
                            value={ this.state.password }
                            onChange={ this.handleInputChange }
                        />
                    </FormControl>
                    <Button
                        variant="contained"
                        type="submit"
                        className={ classes.button }
                        >
                        Sign in
                    </Button>
                    <Button
                        variant="contained"
                        className={ classes.button }
                        onClick={ this.handleDemoClick }>
                        Demo
                    </Button>
                </form>
            </div>
        )
    }
};

SignInForm.contextTypes = {
    router: PropTypes.object.isRequired
};
export default withStyles(styles, { withTheme: true })(SignInForm);