import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  Button,
  ListItemIcon,
  ListItem,
} from "@mui/material";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { useState } from "react";
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { DataContext } from "../../../../Context/Context";

export default function DocumentList() {

  const { setRender } = useContext(DataContext)

  const [starMap, setStarMap] = useState({});

  const data = [
    {
      documentno: 1,
      username: "Rohit tomar",
      subject:
        "This is the demo data of documents in this demo we can visualize the view documents in this demo we can visualize the view",
      date: "01-dec-2023",
      time: "2:00pm",
    },
    {
      documentno: 2,
      username: "Rohit tomar",
      subject:
        "This is the demo data of documents in this demo we can visualize the view documents in this demo we can visualize the view",
      date: "01-dec-2023",
      time: "2:00pm",
    },
    {
      documentno: 3,
      username: "Rohit tomar",
      subject:
        "This is the demo data of documents in this demo we can visualize the view documents in this demo we can visualize the view",
      date: "01-dec-2023",
      time: "2:00pm",
    },
    {
      documentno: 4,
      username: "Rohit tomar",
      subject:
        "This is the demo data of documents in this demo we can visualize the view documents in this demo we can visualize the view",
      date: "01-dec-2023",
      time: "2:00pm",
    },
    {
      documentno: 5,
      username: "Rohit tomar",
      subject:
        "This is the demo data of documents in this demo we can visualize the view documents in this demo we can visualize the view",
      date: "01-dec-2023",
      time: "2:00pm",
    },
    {
      documentno: 6,
      username: "Rohit tomar",
      subject:
        "This is the demo data of documents in this demo we can visualize the view documents in this demo we can visualize the view",
      date: "01-dec-2023",
      time: "2:00pm",
    },
    {
      documentno: 7,
      username: "Rohit tomar",
      subject:
        "This is the demo data of documents in this demo we can visualize the view documents in this demo we can visualize the view",
      date: "01-dec-2023",
      time: "2:00pm",
    },
    {
      documentno: 8,
      username: "Rohit tomar",
      subject:
        "This is the demo data of documents in this demo we can visualize the view documents in this demo we can visualize the view",
      date: "01-dec-2023",
      time: "2:00pm",
    },
    {
      documentno: 9,
      username: "Rohit tomar",
      subject:
        "This is the demo data of documents in this demo we can visualize the view documents in this demo we can visualize the view",
      date: "01-dec-2023",
      time: "2:00pm",
    },
  ];

  const handleStar = (item) => {

    setStarMap((prevStarMap) => ({
      ...prevStarMap,
      [item.documentno]: !prevStarMap[item.documentno],
    }));
  };
  const showDocument = () => {
    return data.map((item) => {
      const isStarActive = starMap[item.documentno] || false;

      return (
        <Box component="div"  >
          <List style={{display: 'flex',justifyContent:'center',alignItems:'center',backgroundColor:'white',padding:15,borderRadius:10,height:50}}>
          <ListItemButton>
            <ListItem >
              <ListItemIcon>
                <div>
                  {isStarActive ? (
                    <StarIcon
                      onClick={() => handleStar(item)}
                      sx={{ color: "gold", cursor: "pointer" }}
                    />
                  ) : (
                    <StarBorderIcon
                      onClick={() => handleStar(item)}
                      sx={{ cursor: "pointer" }}
                    />
                  )}
                </div>
              </ListItemIcon>

              <div style={{ display: 'flex', width: '100%', cursor: 'pointer',height:10,justifyContent:'center',alignItems:'center' }} onClick={() => setRender('openDocument')}>
                <ListItemText>

                  <Typography

                    variant="h6"
                    color="text.secondary"
                    style={{
                      width: "10vw",
                      cursor: "pointer",
                      // overflow: "hidden",
                      // textOverflow: "ellipsis",
                      // whiteSpace: "nowrap",
                      
                    }}

                  >


                    <b>{item.username}</b>

                  </Typography>
                </ListItemText>
                <ListItemText>
                  <Typography
                    variant="h6"
                    color="text.secondary"
                    style={{
                      overflow: "hidden",
                      cursor: "pointer",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      marginLeft: "10vw",
                      marginRight: "2vw",
                    }}
                  >


                    {item.subject}

                  </Typography>
                </ListItemText>
                <Typography
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    width: "30vw",
                  }}
                >
                  {/* <Typography>
                    <Button
                      size="medium"
                      sx={{
                        background: "green",
                        color: "white",
                        borderRadius: 10,
                        cursor: "pointer",
                      }}
                    >
                      Accept
                    </Button>
                  </Typography>
                  <Typography>
                    <Button
                      size="medium"
                      sx={{
                        background: "red",
                        color: "white",
                        marginRight: "1vw",
                        borderRadius: 10,
                      }}
                    >
                      Reject
                    </Button>
                  </Typography> */}
                </Typography>
                <Typography sx={{ width: "15vw" }}>
                  <Typography>{item.time}</Typography>
                  {/* <Typography>{item.date}</Typography> */}
                </Typography>
              </div>
            </ListItem>
          </ListItemButton>
          </List>
        </Box>
      );
    });
  };

  return <Box sx={{ marginTop: -3 }}>{showDocument()}</Box>;
}