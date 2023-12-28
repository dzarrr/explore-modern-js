import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Portal from '@mui/material/Portal';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function InputFileUpload() {
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // TODO: create file reader, convert File to base64

    // need to learn again how does this work on the event loop cycle :D
    if (e.target.files) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }
    // console.log(e.target.files[0]);
  };

  return (
    <Button
      component="label"
      variant="contained"
      startIcon={<CloudUploadIcon />}
    >
      Upload file
      <VisuallyHiddenInput
        name="image-upload-input"
        onChange={handleChange}
        type="file"
      />
      {showAlert && (
        <Portal>
          <Alert
            sx={{
              top: '0',
              position: 'absolute',
              width: '50%',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
            severity="success"
          >
            file upload successful
          </Alert>
        </Portal>
      )}
    </Button>
  );
}
