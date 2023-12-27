import React from 'react'
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ShortcutIcon from '@mui/icons-material/Shortcut';
import { useNavigate} from 'react-router-dom';
import { useContext } from 'react';
import { DataContext } from '../../../../../Context/Context';

export default function OpenDocument(props) {
 const navigate = useNavigate()
  const data = [
    {
      documentno: 1,
      username: "Rohit tomar",
      subject:
        "This is the demo data of documents in this demo we can visualize the view documents in this demo we can visualize the view This is the demo data of documents in this demo we can visualize the view documents in this demo we can visualize the viewThis is the demo data of documents in this demo we can visualize the view documents in this demo we can visualize the viewThis is the demo data of documents in this demo we can visualize the view documents in this demo we can visualize the viewThis is the demo data of documents in this demo we can visualize the view documents in this demo we can visualize the view",
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
  const { render, setRender } = useContext(DataContext);
  const dataIndexToShow = 0;
  const selectedItem = data[dataIndexToShow];
  return (
    <div style={{ height: 'auto', width: '100%', padding: 20, borderRadius: 10,backgroundColor:'white' }}>
     <div onClick={()=>setRender("index")} style={{textAlign:'start',width:25,height:20}}>
     <ArrowBackIcon style={{fontSize:18,cursor:'pointer'}}  />
     </div>
      <div key={selectedItem.documentno}>

        <div style={{ textAlign: 'start',marginTop:'2%',paddingLeft: 50,fontWeight:'bold' }}>
          {selectedItem.username}
        </div>

        <div style={{ paddingLeft: 50, marginTop: '3%', textAlign: 'start', }}>
          {selectedItem.subject}
        </div>

      </div>
      <div style={{textAlign:'start',marginTop:'5%',paddingLeft: 50,}}>
        <img style={{width:250,cursor:'pointer'}} src={'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D'} />
      </div>
      <div style={{ display: 'flex',paddingLeft:50,width:235,justifyContent:'space-between',marginTop:'2%'}}>
        <Button
          color="secondary"
          size="small"
          variant="outlined"
          
          style={{ borderRadius: '20px',display:'flex',justifyContent:'center',alignItems:'center',textTransform:'capitalize' }}
        ><ShortcutIcon style={{padding:3,transform: 'scaleX(-1)',marginRight:3,marginBottom:2}} />Reply</Button>
        <Button
          color="secondary"
          size="small"
          variant="outlined"
          
          style={{ borderRadius: '20px',display:'flex',justifyContent:'center',alignItems:'center',textTransform:'capitalize' }}
        ><ShortcutIcon style={{padding:3,}} />Forward</Button>
      </div>
    </div>
  )
}
