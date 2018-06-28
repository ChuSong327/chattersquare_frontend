import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
    root: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: "100px"
    },
    room: {
        height: 150,
        width: 200,
    }
});

class Rooms extends Component {
    componentDidMount(){
        this.props.getRooms();
    }
    render(){
        const { rooms } = this.props;
        const { classes } = this.props;
 
        if(rooms.length === 0) {
            return(
                <div>loading...</div>
            )
        }
        else if (rooms.length > 0) {
            return(
                <Grid container className={ classes.root }>
                {rooms.map((room, index) => {
                    const { name } = room;
                    const { id } = room;
                    return(
                        <Grid item key={ id }>
                            <Link to={`/rooms/${ id }`}>
                                <Card className={ classes.room }>
                                    <Typography>{ name }</Typography>
                                </Card>
                            </Link>
                        </Grid>
                    )
                })}
                </Grid>
            )
        }
    }
};

export default withStyles(styles)(Rooms);