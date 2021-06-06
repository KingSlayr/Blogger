import React,{useState} from 'react'
import '../assets/Navbar.css'

export default function Navbar() {
    const [user, setUser] = useState(true)
    const [dropdown, setDropdown] = useState(false)
    
    return (
        <div onMouseLeave={()=>setDropdown(false)} className='navbar'>
            <div className="navbar_left">
                <div className="navbar_logo">Blogger</div>
                <input className='navbar_search' type='text' placeholder='Search...'/>
            </div>
            <div onMouseLeave={()=>setDropdown(false)}  className="navbar_right">
                {user?(
                    <div className="navbar_userItem">
                        <div className="navbar_userItem_icons">
                            <i class="far fa-bell"></i>
                            <div className='navbar_userItem_value'>5</div>
                        </div>
                        <div className="navbar_userItem_icons">
                            <i class="far fa-comment-dots"></i>
                            <div className='navbar_userItem_value'>5</div>
                        </div>
                        <div style={{height:'8vh',display:'flex',flexDirection:'column',justifyContent:'center'}}>
                            <img onMouseEnter={()=>setDropdown(true)}  className='userAvatar' src='https://www.w3schools.com/howto/img_avatar2.png'/>
                        </div>
                        {dropdown &&
                        <div onMouseLeave={()=>setDropdown(!dropdown)}  className='navbar_dropdown'>
                            <div className="navbar_dropdownItem">Ankit Rastogi</div><hr/>
                            <div className="navbar_dropdownItem">
                                <div>Create Blog</div>
                                <i class="fas fa-plus-circle"></i>
                            </div>
                            <div className="navbar_dropdownItem">Settings</div><hr/>
                            <div className="navbar_dropdownItem">
                                <div>Log out</div>
                                <i class="fas fa-sign-out-alt"></i>
                            </div>
                        </div>}
                    </div>
                ):(
                    <div className='navbar_userItem'>
                        <div className="navbar_rightIcon">
                            <i class="far fa-user"></i>
                        </div>
                        <button>Sign In</button>
                    </div>
                )}
            </div>
        </div>
    )
}