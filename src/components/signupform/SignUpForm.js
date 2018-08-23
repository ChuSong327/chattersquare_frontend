import React, { Component } from "react";
import PropTypes from 'prop-types'; 
import { withStyles } from "@material-ui/core/styles";
import { 
    Card, 
    Typography, 
    FormControl, 
    Input, 
    InputLabel, 
    Button, 
} from "@material-ui/core";
import { styles }  from "./style";

class SignUpForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            created_at: new Date()
        };
        this.handleSignUpSubmit = this.handleSignUpSubmit.bind(this); 
        this.handleInputChange = this.handleInputChange.bind(this);
    };

    handleInputChange(event) {
        const id = event.target.id;
        this.setState({
            [ id ]: event.target.value
        });
    };

    handleSignUpSubmit(event) {
        event.preventDefault();
        const params = this.state;
        this.props.signUp(params).then(res => {
            const id = res[0].id;
            const currentUser = this.state;
            localStorage.setItem("currentUser", JSON.stringify(currentUser));
            localStorage.setItem("user_id", JSON.stringify(id));
            this.context.router.history.push(`/users/${id}/dashboard/chatrooms`);
        });
    };

    render(){
        const { classes, theme } = this.props;
        return(
            <div className={ classes.root }>
                <div className={ classes.left }>
                    <div className={ classes.circle }>
                        <div className={ classes.title }>
                            ChatterSqaure
                        </div>
                    </div>
                    <Card className={ classes.gridOne }>
                        <form onSubmit={this.handleSignUpSubmit}>
                            <FormControl
                                required={true}
                                className={ classes.formControl }>
                                <InputLabel 
                                    name="username" 
                                    type="text"
                                    className={ classes.inputLabel }>
                                    Username
                                </InputLabel>
                                <Input 
                                    required
                                    id="username" 
                                    className={ classes.input }
                                    value={ this.state.username }
                                    onChange={ this.handleInputChange }
                                />
                            </FormControl><br/>
                            <FormControl 
                                required={true}
                                className={ classes.formControl }>
                                <InputLabel 
                                    name="password" 
                                    className={ classes.inputLabel }>
                                    Password
                                </InputLabel>
                                <Input 
                                    id="password" 
                                    type="password"
                                    className={ classes.input }
                                    value={ this.state.password }
                                    onChange={ this.handleInputChange }
                                />
                            </FormControl><br/>
                            <FormControl 
                                required={true}
                                className={ classes.formControl }>
                                <InputLabel 
                                    name="firstname" 
                                    type="text"
                                    className={ classes.inputLabel }>
                                    First Name
                                </InputLabel>
                                <Input 
                                    id="firstname" 
                                    className={ classes.nameInput }
                                    value={ this.state.firstname }
                                    onChange={ this.handleInputChange }
                                />
                            </FormControl>
                            <FormControl
                                required={true}>
                                <InputLabel 
                                    name="lastname" 
                                    className={ classes.inputLabel }
                                    style={{ paddingLeft: theme.spacing.unit * 4 }}>
                                    Last Name
                                </InputLabel>
                                <Input 
                                    id="lastname" 
                                    type="text"
                                    className={ classes.nameInput }
                                    style={{ marginLeft: theme.spacing.unit * 3 }}
                                    value={ this.state.lastname }
                                    onChange={ this.handleInputChange }
                                />
                            </FormControl><br/>
                            <FormControl
                                required={true} 
                                className={ classes.formControl }>
                                <InputLabel 
                                    name="email" 
                                    className={ classes.inputLabel }>
                                    Email
                                </InputLabel>
                                <Input 
                                    id="email"
                                    type="text" 
                                    className={ classes.input }
                                    value={ this.state.email }
                                    onChange={ this.handleInputChange }
                                />
                            </FormControl><br/>
                            <Button 
                                variant="contained" 
                                type="submit"
                                className={ classes.button }
                                >
                                Sign Up
                            </Button> 
                            </form>
                    </Card>
                </div>
                <div>
                    <Card className={ classes.gridTwo }>
                        <Typography 
                            component="p" 
                            className={ classes.greeting }> 
                            A community for you to learn and grow. 
                        </Typography><br/>
                        <Typography 
                            component="p" 
                            className={ classes.slogan }> 
                            Join and make an impact.  
                        </Typography>
                    </Card>
                </div>
            </div>
        )
    }
};
SignUpForm.contextTypes = {
    router: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme:true })(SignUpForm);