import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import { Callback } from '../../Types/types';

function PaperComponent(props: any) {
    return (
        <Paper {...props} />
    );
}

interface Props {
    open: boolean;
    title: string;
    message: string;
    onConfirm: Callback;
    onClose: Callback;
}

const ConfirmModal: React.FC<Props> = ({ open, title, message, onConfirm, onClose }) => {

    return (
        <div>
            <Dialog
                open={open}
                onClose={onClose}
                PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title"
            >
                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                    {title}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {message}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={onClose}>
                        Cancel
                    </Button>
                    <Button onClick={onConfirm}>Subscribe</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default ConfirmModal;