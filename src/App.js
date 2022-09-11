import React, { useState } from "react";
import logo from "./logo.svg";
import { ReactDOM } from "react-dom";

// import ReactCardFlip from "react-card-flip";


import Icon from "./components/icon";

import { ToastContainer ,toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Card, CardBody, Container, Col, Row, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

const itemArray = new Array(9).fill("empty");

const App = () => {


  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");

 const [turns,setTurns]=useState(0)

 const [overmsg,setOvermsg]=useState("")

  const reloadGame = () => {

    setIsCross(false);
    setWinMessage("")
    setTurns(0)
    setOvermsg("")

    itemArray.fill("empty")
    
  };
 
 
  const checkIsWinner = () => {
    

    if (itemArray[0]===itemArray[1] && itemArray[0]===itemArray[2] && itemArray[0]!=="empty")
        {
            setWinMessage(` ${itemArray[0]} is the Winner `)
        }

        else if(itemArray[3]===itemArray[4] && itemArray[3]===itemArray[5] && itemArray[3]!=="empty"){
            setWinMessage(` ${itemArray[3]} is the Winner `)
        } else if(itemArray[6]===itemArray[7] && itemArray[6]===itemArray[8] && itemArray[6]!=="empty"){
            setWinMessage(` ${itemArray[6]} is the Winner `)
        }

        else if(itemArray[0]===itemArray[3] && itemArray[0]===itemArray[6] && itemArray[0]!=="empty"){
            setWinMessage(` ${itemArray[0]} is the Winner `)
        }

        else if(itemArray[4]===itemArray[1] && itemArray[1]===itemArray[7] && itemArray[4]!=="empty"){
            setWinMessage(` ${itemArray[4]} is the Winner `)
        }

        else if(itemArray[2]===itemArray[5] && itemArray[5]===itemArray[8] && itemArray[2]!=="empty"){
            setWinMessage(` ${itemArray[2]} is the Winner `)
        }

        else if(itemArray[0]===itemArray[4] && itemArray[0]===itemArray[8] && itemArray[0]!=="empty"){
            setWinMessage(` ${itemArray[0]} is the Winner `)
        }

        else if(itemArray[2]===itemArray[4] && itemArray[2]===itemArray[6] && itemArray[2]!=="empty"){
            setWinMessage(` ${itemArray[2]} is the Winner `)
        }

      

        if (turns===7){
            console.log("checking again");
            console.log(` win sg : ${winMessage}`);
            
        }

        

            
        
            
 
       
           
  };


  const Game_over=()=>{

    if (turns==8 && winMessage==""){
        console.log(winMessage)
        console.log(`turns:${turns} overmsg"${overmsg} winmsg:${winMessage} `);
        setOvermsg("Game Over") 
    }
    else{
        console.log(turns);
        setTurns(turns+1)
    }

  } 

  const changeItem = itemNumber => {


   
    if( winMessage){
        return toast(winMessage,{type:"success",position: "top-center",autoClose: 2000})
    }

    if (itemArray[itemNumber]=="empty"){

        itemArray[itemNumber]=isCross ? "cross":"circle"
        setIsCross(!isCross)
    }else if(overmsg) {

        return toast("Game is Over ",{type:"error" ,position: "top-center",autoClose: 2000})
    }else{

        return toast("Already Filled ",{type:"info",position: "top-center",autoClose: 2000})
    }


    
    
    checkIsWinner()

    Game_over()
   
    
  
   
  

  
  };

  
 

  return (

    

    <div>
       
       <div className="hd-div">
       <h1 className="hd">TIC TAC TOE</h1>
        <p >Using React Js</p>
       </div>
        
        
        
            <Container className="p-5">
            <ToastContainer position="bottom-center" />

            <Row>

                <Col md={6} className="offset-md-3">

               
                {winMessage ? (

<div className="mb-2 mt-2">

    <h1 className="text-center green text-uppercase" >
        {winMessage}
    </h1>

    <div className="btn-cont">
                <button type="" className="  m-btn" block onClick={reloadGame} >Start Again</button>
        </div>
    {/* <Button/> */}

                

</div>
):overmsg ? (

    <div className="mb-2 mt-2">

        <h1 className=" text-center red text-uppercase" >
            {overmsg}
        </h1>
        
        <div className="btn-cont">
                <button type="" className="  m-btn" block onClick={reloadGame} >Start Again</button>
        </div>

       
        {/* <Button/> */}

                    

    </div>
):(

<div>
 <h1 className="turn text-uppercase  text-center" >
            {isCross ? "cross":"circle"} turns
        </h1>


      
</div>



)}
                   
                
               

                <div className="grid">
                    {itemArray.map((item, index) => (
                    <Card  id="card" className="card-bg" onClick={()=>changeItem(index)}>
                        <CardBody className="box">
                        <Icon name={item} />
                        </CardBody>
                    </Card>
                    ))}
                </div>
                </Col>
            </Row>
           

            </Container>
           
  
    </div>
    
  );
};



export default App;
