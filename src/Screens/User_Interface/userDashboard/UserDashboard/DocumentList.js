import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  Button,
} from "@mui/material";

export default function () {
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

  const showDocument = () => {
    return data.map((item) => {
      return (
        <Box component="div">
          <List>
            <ListItemButton sx={{ background: "white" }}>
              <ListItemText>
                <Typography
                  variant="h6"
                  color="text.secondary"
                  style={{
                    width: "10vw",
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
                  width: "27vw",
                }}
              >
                <Typography>
                  <Button
                    size="medium"
                    sx={{ background: "green", color: "white" ,borderRadius:10}}
                  >
                    Accept
                  </Button>
                </Typography>
                <Typography>
                  <Button
                    size="medium"
                    sx={{ background: "red", color: "white",marginRight:'1vw' ,borderRadius:10}}
                  >
                    Reject
                  </Button>
                </Typography>
              </Typography>
              <Typography sx={{width:'15vw'}}>
                <Typography>{item.time}</Typography>
                <Typography>{item.date}</Typography>
              </Typography>
            </ListItemButton>
          </List>
        </Box>
      );
    });
  };

  return <Box sx={{marginTop:-3}}>{showDocument()}</Box>;
}
