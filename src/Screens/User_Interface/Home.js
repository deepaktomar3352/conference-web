import { homeStyle } from "./HomeCss"
//  for list item 
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Grid } from "@mui/material";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";

=======
import "./Interface_Components/styles.css"
>>>>>>> 07be42b41b670e317247500e3864460c45fcbb57
// main Slider
import Main_Slider_01 from "./Interface_Components/Main_Slider_01";

export default function Home() {

    const navigate=useNavigate();

    const classes = homeStyle();
    
    return (
        <div className={classes.DivStyle}  >

            <div>
                <AppBar className={classes.app_bar} color='transparent' backgroundColor='transparent'>
                    <Toolbar >
                        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        </IconButton>
                        <Typography style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', width: '95%' }}>
                            <Typography variant="h6" fontWeight={600} fontFamily={'poppins'} color="white" component="div">
                                PaperUp
                            </Typography>
                            <Typography style={{ display: 'flex', flexDirection: 'row', width: '22%', justifyContent: 'space-between' }}>
                                <Typography className={classes.typography} fontFamily={'poppins'} color="white">
                                    About
                                </Typography >
                                <Typography className={classes.typography} fontFamily={'poppins'} color="white">
                                    Source
                                </Typography>
                                <Typography className={classes.typography} onClick={()=>navigate('/SignIn_SignUp')} fontFamily={'poppins'} color="white">
                                    Signin/Signup
                                </Typography>
                            </Typography>
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
            <div>
                <div className={classes.main_slider_01}>
                    <Main_Slider_01 />
                </div>
            </div>
            {/* <div >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjFARngTDeO5YhC1g9YoWfHCDlc0WB-HIjQ&usqp=CAU" className={classes.Image_01}></img>
            </div> */}
        </div>
    )
}