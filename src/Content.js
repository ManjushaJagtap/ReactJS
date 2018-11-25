import React, { Component } from 'react';
import GermanShepherd from './GermanShepherd.jpg';
import Samoyed from './Samoyed.jpg';
import GoldenRetriever from './GoldenRetriever.jpg';

class Post extends Component {
  render() {
    return (
   <div style={{content: "",backgroundColor:"#FFF8DC", display: "table",   clear: "both", width:"100%"}}>
  <div  style={{    float: "left",    width: "25%",    padding: "10px",    height: "500px",border:"1px brown solid"}} >
            <h1 style={{textAlign:"center"}} >German Shepherd</h1>
            <h4 style={{textAlign:"center"}}> Date :10/10/2018 </h4>
            <img src={GermanShepherd} alt="" width="230px" height="150px" style={{paddingLeft:"70px"}}></img>
            <p style={{padding:"20px",fontSize:16}}>
            <b>Temperament</b>: Confident, Courageous, Smart <br></br>
            <b>AKC Breed Popularity</b>: Ranks 2 of 192 <br></br>
            <b>Height</b>: 24-26 inches (male), 22-24 inches (female) <br></br>
            <b>Weight</b>: 65-90 pounds (male), 50-70 pounds (female) <br></br>
            <b>Life Expectancy</b>: 7-10 years <br></br>
            <b>Group</b>: Herding Group
            </p>
   </div>
  <div  style={{    float: "left",   width: "25%",    padding: "10px",    height: "500px",border:"1px brown solid"}}>
        <h1 style={{textAlign:"center"}} >Samoyed</h1>
        <h4 style={{textAlign:"center"}}> Date :10/10/2018 </h4>
        <img src={Samoyed} alt="" width="230px" height="150px" style={{paddingLeft:"70px"}}></img>
        <p style={{padding:"20px",fontSize:16}}>
        <b>Temperament</b>: Adaptable, Friendly, Gentle <br></br>
        <b>AKC Breed Popularity</b>: Ranks 65 of 192 <br></br>
        <b>Height</b>: 21-23.5 inches (male), 19-21 inches (female) <br></br>
        <b>Weight</b>: 45-65 pounds (male), 35-50 pounds (female) <br></br>
        <b>Life Expectancy</b>: 12-14 years <br></br>
        <b>Group</b>: Working Group 
        </p>
    </div>
  <div  style={{    float: "left",   width: "25%",    padding: "10px",    height: "500px",border:"1px brown solid"}} >
        <h1 style={{textAlign:"center"}} >Golden Retriever</h1>
        <h4 style={{textAlign:"center"}}> Date :10/10/2018 </h4>
        <img src={GoldenRetriever} alt="" width="230px" height="150px" style={{paddingLeft:"70px"}}></img>
        <p style={{padding:"20px",fontSize:16}}>
        <b>Temperament</b>: Friendly, Intelligent, Devoted <br></br>
        <b>AKC Breed Popularity</b>: Ranks 3 of 192 <br></br>
        <b>Height</b>: 23-24 inches (male), 21.5-22.5 inches (female) <br></br>
        <b>Weight</b>: 65-75 pounds (male), 55-65 pounds (female) <br></br>
        <b>Life Expectancy</b>: 10-12 years <br></br>
        <b>Group</b>: Sporting Group 
        </p>
  </div>
  <div   style={{float: "left",backgroundColor:"#FFF8DC",width: "19.9%",paddingTop: "160px", height: "360px",border:"1px brown solid",textAlign:"center"}}>
            <a href="https://www.aspca.org/pet-care/dog-care/general-dog-care" target = "_blank" rel="noopener noreferrer" style={{fontStyle:"Comic Sans MS",textalign:"center"}}>Dog Care</a><br/>
            <a href="https://www.adoptapet.com/dog-adoption" target = "_blank" rel="noopener noreferrer">Adoption</a><br/>
            <a href="https://tlcpetdoctor.com/" target = "_blank" rel="noopener noreferrer">Veterinarian</a><br/>
            <a href="https://www.akc.org/" target = "_blank" rel="noopener noreferrer">Reference</a><br/>
           

  </div>
</div>

   );
  }
}

export default Post;
