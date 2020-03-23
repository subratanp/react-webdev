import React, { Component } from 'react';
import './framestyle.css' ;



class Dataframe extends Component {
    state = {  
          htype: [ "Physcial","Virtual" ],
          vtype: ["VMWARE","KVM","Hyper-V","None"]



    }
    render() { 
        return (  

              <div>
                  <div className="dataBox" >   
                      <label>Machine Type</label>
                      <select id="htype">
        {this.state.htype.map((i)=>{  return <option value={i}>{i}</option> })}   
                      </select>
                      <label>Select HyperVisor</label>
                      <select id="vtype">
        {this.state.vtype.map((i)=>{  return <option value={i}>{i}</option> })}   
                      </select>




                  </div>
                 



              </div>


        );
    }
}
 
export default Dataframe;