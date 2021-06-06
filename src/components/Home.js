import React from 'react'
import Navbar from './Navbar'
import '../assets/Home.css'

const style={
    backgroundImage:'url(https://res.cloudinary.com/practicaldev/image/fetch/s--QMlLb1ga--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/bygjtuac5ph3ngxd2wxd.png)',
    backgroundSize: '100vh',
    backgroundPosition:'center'
}

export default function Home() {
    return (
        <>
            <Navbar/>
            <div className='home'>
                <div className="homeLeft">
                    <div className='homeLeftIcon'>
                        <i class="fas fa-hand-holding-heart"></i>
                        <div>5</div>
                    </div>
                    <div className='homeLeftIcon'>
                        <i class="far fa-bookmark"></i>
                        <div>5</div>
                    </div>
                    <div className='homeLeftIcon'>
                        <i class="fas fa-share-alt"></i>
                    </div>  
                </div>
                <div className="homeMiddle">
                    <div className="postHead">
                        <img src='https://res.cloudinary.com/practicaldev/image/fetch/s--QMlLb1ga--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/bygjtuac5ph3ngxd2wxd.png'/>
                    </div>
                    <div className="postTitle">
                        <div className="postTitleHeading">5 mini-projects to sharpen your frontend development skills!</div>
                        <div className="postTitleTags">
                            <div className="postTag">HTML</div> 
                            <div className="postTag">CSS</div> 
                            <div className="postTag">React</div> 
                            <div className="postTag">Node</div> 
                            <div className="postTag">HTML</div> 
                            <div className="postTag">CSS</div> 
                            <div className="postTag">React</div> 
                            <div className="postTag">Node</div> 
                            <div className="postTag">HTML</div> 
                            <div className="postTag">CSS</div> 
                            <div className="postTag">React</div> 
                            <div className="postTag">Node</div> 
                            <div className="postTag">HTML</div> 
                            <div className="postTag">CSS</div> 
                            <div className="postTag">React</div> 
                            <div className="postTag">Node</div> 
                            <div className="postTag">HTML</div> 
                            <div className="postTag">CSS</div> 
                            <div className="postTag">React</div> 
                            <div className="postTag">Node</div> 
                            <div className="postTag">HTML</div> 
                            <div className="postTag">CSS</div> 
                            <div className="postTag">React</div> 
                            <div className="postTag">Node</div> 
                            <div className="postTag">HTML</div> 
                            <div className="postTag">CSS</div> 
                            <div className="postTag">React</div> 
                            <div className="postTag">Node</div> 
                            <div className="postTag">HTML</div> 
                            <div className="postTag">CSS</div> 
                            <div className="postTag">React</div> 
                            <div className="postTag">Node</div> 
                        </div>
                        <div className="postUser">
                            <div className="postAvatar"><img className='postAvatar' src='https://www.w3schools.com/howto/img_avatar2.png'/></div>
                            <div className="postUsername">Ankit Rastogi</div>
                        </div>
                    </div>
                    <div className="postContent">Content</div>
                </div>
                <div className="homeRight">
                    <div className="userAbout">User About</div>
                    <div className="userRelatedPosts">Related Posts</div>
                </div>
            </div>
        </>
    )
}
