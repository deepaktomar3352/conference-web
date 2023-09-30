import { homeStyle } from "./HomeCss"
//  for list item 
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Grid } from "@mui/material";
// main Slider
import Main_Slider_01 from "./Interface_Components/Main_Slider_01";

export default function Home() {
    const classes = homeStyle();
    return (
        <div>

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
                                <Typography fontFamily={'poppins'} color="white">
                                    About
                                </Typography >
                                <Typography fontFamily={'poppins'} color="white">
                                    Source
                                </Typography>
                                <Typography fontFamily={'poppins'} color="white">
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
            <div>
                <img src="https://images.unsplash.com/photo-1516557070061-c3d1653fa646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJsYWNrfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" className={classes.Image_01}></img>
            </div>
        </div>
    )
}