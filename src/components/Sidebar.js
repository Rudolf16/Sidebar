import React, { useState } from 'react'
import PropTypes from 'prop-types'




export const Sidebar = ({sections}) => {
    const [state,setState]=useState(sections||[])
    const [isOpen,setIsOpen]=useState(false)
    const openHandler=()=>{
        setIsOpen(!isOpen)
    }
    
    const sideList=state.map(el=>{
       if(el.icon){
           return(
               
                   <li className={isOpen?"open sidebar_list_item":"close sidebar_list_item"} >
                    <a href={el.link} className='sidebar_list_link '>
                    <img className='sidebar_list_icon' src={el.icon} alt='smth'></img>
                    <div className='sidebar_list_name'>{el.name}</div>
                    </a>
                   </li>

               
           )
           }else{
               return(
                <a href={el.link} className=' sidebar_list_link'>
                    <li lassName='sidebar_list_item' >
                     <div className='sidebar_list_name'>{el.name}</div>
                    </li>
                </a>   
               )
           }
       }
    
    )

    return (
        <div className='side_container'>
            <button onClick={openHandler} href='' className='sidebar_button'>
                <span>Dashbord</span>
            </button>
            {/* <div className='side_list'> */}
            <ul className={isOpen?"openList":"closeList"}>
            {sideList}
            </ul>
            {/* </div> */}
        </div>
    )
}



Sidebar.propTypes={
    sections:PropTypes.arrayOf(PropTypes.shape({
        name:PropTypes.string,
        icon:PropTypes.string,
        link:PropTypes.string
    }))
}

Sidebar.defaultProps={
    sections:[
        {
          name:"Home",
          link:"https://www.google.com",
          icon:"https://img.icons8.com/color/search"
        },
        {
          name:"Home",
          link:"https://www.google.com",
          icon:"https://img.icons8.com/color/search"
        },
        {
          name:"Home",
          link:"https://www.google.com",
          icon:"https://img.icons8.com/color/search"
        },
        {
          name:"Home",
          link:"https://www.google.com",
          icon:"https://img.icons8.com/color/search"
        },
      ]
}
