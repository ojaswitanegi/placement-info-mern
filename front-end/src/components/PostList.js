import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/postMessage";
import { Grid, Paper, withStyles, List, ListItem, ListItemText, Typography, Divider } from "@material-ui/core";

const styles = theme => ({
    paper: {
        margin: theme.spacing(3),
        padding: theme.spacing(2)
    },
    smMargin: {
        margin: theme.spacing(1)
    },
    actionDiv: {
        textAlign: "center"
    }
})

const PostList = ({ classes, ...props }) => {
    //const {classes, ...props} = props
    

    useEffect(() => {
        props.fetchAllPostMessages()
    }, [])//DidMount

    return (
        <Grid container>
            <Grid item xs={50}>
                <Paper className={classes.paper}>
                    <List>
                        {
                            props.postMessageList.map((record, index) => {
                                return (
                                    <Fragment key={index}>
                                        <ListItem>
                                            <ListItemText>
                                                <Typography variant="h5">
                                                    {record.title}
                                                </Typography>
                                                <div>
                                                    {record.message}
                                                </div>
                                            </ListItemText>
                                        </ListItem>
                                        <Divider component="li" />
                                    </Fragment>
                                )
                            })
                        }
                    </List>
                </Paper>
            </Grid>
        </Grid>
    );
}

const mapStateToProps = state => ({
    postMessageList: state.postMessage.list
})

const mapActionToProps = {
    fetchAllPostMessages: actions.fetchAll,
    deletePostMessage: actions.Delete
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(PostList));