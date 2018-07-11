import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import connectComponent from '../../helpers/connect-component';

import {
  close,
  formUpdate,
  save,
} from '../../state/dialogs/title-bar-color/actions';

import {
  STRING_CANCEL,
  STRING_LEAVE_IT_BLANK_FOR_DEFAULT,
  STRING_SAVE,
  STRING_TITLE_BAR_COLOR,
  STRING_USE_AT_YOUR_OWN_RISK,
} from '../../constants/strings';

const styles = {
  content: {
    minWidth: 320,
  },
};

const DialogTitleBarColor = (props) => {
  const {
    classes,
    content,
    onClose,
    onFormUpdate,
    onSave,
    open,
  } = props;

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        {STRING_TITLE_BAR_COLOR}
      </DialogTitle>
      <DialogContent className={classes.content}>
        <Typography variant="body1">
          {STRING_USE_AT_YOUR_OWN_RISK}
        </Typography>
        <Typography variant="body1">
          {STRING_LEAVE_IT_BLANK_FOR_DEFAULT}
        </Typography>
        <Typography variant="body1">
          Hex. Ex: #000000.
        </Typography>
        <TextField
          fullWidth
          margin="normal"
          onChange={e => onFormUpdate({ content: e.target.value })}
          value={content}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          {STRING_CANCEL}
        </Button>
        <Button
          color="primary"
          onClick={onSave}
        >
          {STRING_SAVE}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

DialogTitleBarColor.propTypes = {
  classes: PropTypes.object.isRequired,
  content: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  onFormUpdate: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  open: PropTypes.bool,
};

DialogTitleBarColor.defaultProps = {
  content: '',
  open: false,
};

const mapStateToProps = state => ({
  content: state.dialogs.titleBarColor.form.content,
  open: state.dialogs.titleBarColor.open,
});

const actionCreators = {
  close,
  formUpdate,
  save,
};

export default connectComponent(
  DialogTitleBarColor,
  mapStateToProps,
  actionCreators,
  styles,
);
