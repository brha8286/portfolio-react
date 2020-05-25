import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { useHistory } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) =>
    ({
        closeButton: {
            position: 'absolute',
            right: theme.spacing(1),
            top: theme.spacing(1),
            color: theme.palette.grey[500],
        },
    })
);

export default function ProjectDialog(props) {
    const history = useHistory();
    const classes = useStyles();
    const handleClose = () => {
        history.push("/projects/");
        debugger;
    }

    return (
        <Dialog aria-labelledby="simple-dialog-title" open={true} onClose={handleClose} fullWidth={true}>
            <DialogTitle id="simple-dialog-title">{props.title}</DialogTitle>
            <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
                <CloseIcon />
            </IconButton>
            Hello world
        </Dialog>
    )
}