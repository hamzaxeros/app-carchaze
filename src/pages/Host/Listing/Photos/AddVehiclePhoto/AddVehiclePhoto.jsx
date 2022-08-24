/**
 * AddPhoto
 * @module 🔗:src/pages/Host/Listing/Photos/AddPhoto/AddPhoto.jsx
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Add Photo of the Vehicle
 * 
 */

 import React from "react";
 import Button from "../../../../../components/public/resources/Button/Button";
 
 const AddPhoto = (props) => {
 
 
   return (
     <React.Fragment>
       <div className="AddPhoto-outer mv-44">
         <div className="AddPhoto-content">
           <div className="AddPhoto-photo"></div>
         </div>
         <div className="AddPhoto-footer">
             <Button style={{"backgroundColor":'white',"color":'red',"border":'1px solid red',"margin-bottom":'16px'}} title={"Add vehicles photos"} />
             <Button title={"Continue"} />
         </div>
 
       </div>
     </React.Fragment>
   )
 }
 
 export default AddPhoto;