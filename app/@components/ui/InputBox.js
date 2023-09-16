import styled from "@emotion/styled";
import { InputBase, alpha } from "@mui/material";

const InputBox = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        borderRadius: 8,
        position: 'relative',
        backgroundColor: theme.palette.mode === 'light' ? '#F3F6F9' : '#1A2027',
        border: '1px solid',
        borderColor: theme.palette.mode === 'light' ? '#E0E3E7' : '#2D3843',
        fontSize: 16,
        width: '100%',
        padding: '7px 12px',
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
        // Use the system font instead of the default Roboto font.
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
        ].join(','),
        // '&:focus': {
        //     boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        //     borderColor: theme.palette.primary.main,
        // },
    },
    '& ::placeholder':{
        color:"black"
    }
}));

export {InputBox}
export default InputBox;