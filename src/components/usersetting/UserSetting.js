import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
    FormControl,
    Input,
    InputLabel,
    Avatar,
    Button,
    Typography
} from "@material-ui/core";

import * as userAction from "../../utils/userUtil";
import { styles } from "./style";

class UserSetting extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.state.currentUser.id,
            username: this.props.state.currentUser.username,
            firstname: this.props.state.currentUser.firstname,
            lastname: this.props.state.currentUser.lastname,
            email: this.props.state.currentUser.email,
            phone: this.props.state.currentUser.phone,
            password: this.props.state.currentUser.password,
            profile: this.props.state.currentUser.profile,
            updated_at: new Date()
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleProfileChange = this.handleProfileChange.bind(this);
    };

    handleInputChange(event){
        const id = event.target.id;
        this.setState({
            [ id ]: event.target.value
        });
    };

    handleUpdate(){
        const params = this.state;
        this.props.state.updateUserInfo(params);
    };

    handleProfileChange(event){
        const file = event.target.files[0];
        const params = {
            preset: "mzgowfbe",
            file: file
        };
        userAction.uploadProfile(params).then(res => {
            this.setState({
                profile: res.secure_url
            })
        });
    };

    render(){
        const { classes } = this.props;
        const { firstname, lastname, email, phone, username, password }  = this.props.state.currentUser;
        return(
            <div className={ classes.root }>
                <input
                    accept="image/*"
                    id="upload"
                    type="file"
                    // hidden="hidden"
                    className={ classes.avatarInput }
                    onChange={ this.handleProfileChange}
                    />
                <label htmlFor="upload">
                    <Button 
                        component="span"
                        className={ classes.avatarButton }>
                        <Avatar 
                            src={ this.state.profile }
                            className={ classes.avatar }
                        />
                        <Typography className={ classes.change }>
                            Change
                        </Typography>
                    </Button>
                </label>
                <form className={ classes.form }>
                    <div className={ classes.formSection }>
                        <FormControl className={ classes.formControl }>
                            <InputLabel
                                required
                                name="username"
                                className={ classes.inputLabel }>
                                User Name
                            </InputLabel>
                            <Input
                                id="username"
                                type="text"
                                defaultValue={ username }
                                onChange={ this.handleInputChange }
                                className={ classes.input }
                            />
                        </FormControl>
                        <FormControl className={ classes.formControl }>
                            <InputLabel
                                required
                                name="password"
                                className={ classes.inputLabel }>
                                Password
                            </InputLabel>
                            <Input
                                id="password"
                                type="password"
                                defaultValue = { password }
                                onChange={ this.handleInputChange }
                                className={ classes.input }
                            />
                        </FormControl>
                    </div>
                    <div>
                        <FormControl className={ classes.formControl }>
                            <InputLabel
                                required
                                name="firstname"
                                className={ classes.inputLabel }>
                                First Name
                            </InputLabel>
                            <Input
                                id="firstname"
                                type="text"
                                defaultValue={ firstname }
                                onChange={ this.handleInputChange }
                                className={ classes.input }
                            />
                        </FormControl>
                        <FormControl className={ classes.formControl }>
                            <InputLabel
                                required
                                name="lastname"
                                className={ classes.inputLabel }>
                                Last Name
                            </InputLabel>
                            <Input
                                id="lastname"
                                type="text"
                                defaultValue={ lastname }
                                onChange={ this.handleInputChange }
                                className={ classes.input }
                            />
                        </FormControl>
                    </div>
                    <div>
                        <FormControl className={ classes.formControl }>
                            <InputLabel
                                required
                                name="email"
                                className={ classes.inputLabel }>
                                Email
                            </InputLabel>
                            <Input
                                id="email"
                                type="text"
                                defaultValue={ email }
                                onChange={ this.handleInputChange }
                                className={ classes.input }
                            />
                        </FormControl>
                        <FormControl className={ classes.formControl }>
                            <InputLabel
                                name="phone"
                                className={ classes.inputLabel }>
                                Phone
                            </InputLabel>
                            <Input
                                id="phone"
                                defaultValue={ phone }
                                onChange={ this.handleInputChange }
                                className={ classes.input }
                            />
                        </FormControl>
                    </div>
                    <FormControl>
                        <Button 
                            variant="contained" 
                            onClick={ this.handleUpdate }
                            className={ classes.button }>
                            Update
                        </Button>
                    </FormControl>
                </form>
            </div>
        )
    }
};

export default withStyles(styles, { withTheme: true })(UserSetting);