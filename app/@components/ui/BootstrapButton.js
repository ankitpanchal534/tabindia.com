const { default: styled } = require("@emotion/styled");
const { Button } = require("@mui/material");

const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 14,
    padding: '8px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    borderRadius:'12px 0px 12px 0px',
    color:'black',
    fontWeight:700,
    textTransform:'uppercase',
    backgroundColor: '#FFDA00',
    borderColor: '#FFDA00',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      `Source Sans 3', sans-serif`
    ].join(','),
    '&:hover': {
      backgroundColor: '#FFDA00',
      borderColor: '#FFDA00',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#FFDA00',
      borderColor: '#FFDA00',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });
  
  export {BootstrapButton}
  export default BootstrapButton