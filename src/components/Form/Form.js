import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ name: '', phone: '', purpose: '', address: '', selectedFile: '' });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ name: '', phone: '', purpose: '', address: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing "${post.title}"` : 'Digital Record Book'}</Typography>
        <TextField name="name" variant="outlined" label="Name" fullWidth value={postData.name} onChange={(e) => setPostData({ ...postData, name: e.target.value })} />
        <TextField type="number" name="phone" variant="outlined" label="PhoneNumber" fullWidth value={postData.phone} onChange={(e) => setPostData({ ...postData, phone: e.target.value })} />
        <TextField name="purpose" variant="outlined" label="Purpose" fullWidth multiline rows={3} value={postData.purpose} onChange={(e) => setPostData({ ...postData, purpose: e.target.value })} />
        <TextField name="address" variant="outlined" label="Address" fullWidth value={postData.address} onChange={(e) => setPostData({ ...postData, address: e.target.value})} />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default Form;
