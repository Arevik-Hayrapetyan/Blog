import React from "react";
import { getItems } from "../helpers/localStorage";
import Blog from "./Blog";

class EditPage extends Blog{
       constructor(props){
           super(props);
           this.state = {
               value:""
           }
       }
       render(){
           return (
               <>
               <div>Arev</div>
               </>
           )
       }
}
export default EditPage