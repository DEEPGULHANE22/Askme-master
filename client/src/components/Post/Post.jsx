import React from 'react'
import './post.css'
const Post = () => {
  return (
    <div className="post">
     
    <div className="post__info">
      {/* <Avatar src={user} /> */}
      <h3 className="user_name">Ganesh</h3>
      <small>1/2/23</small>
    </div>
    <div className="post__body">
      
      <div className="post__question">
        
      <p style={{
        textDecoration:'none'
      }}>hello</p>
      
    </div>
    </div>
    <div className="post__footer">
      <div className="post__footerAction">
        <div>
        {/* <ArrowUpwardOutlinedIcon  /> */}
      
        </div>
       
       
      </div>
     
      <h3>3</h3>

    <div >
     down
      </div>



      <div className="post__footerAction"  >
     
      <h5 className="report">up</h5>

      </div>
      <h3>deep</h3>
      <div style={{
        
      }}>
      </div>
      <div className="post__footerLeft">
      <button  className="post__btnAnswer"  style={{ marginRight:"15px"}} >Reply</button>

   
                <button   className="post__btnAnswer"  style={{ marginRight:"15px"}} >Block</button>

        <button  className="post__btnAnswer"  style={{ marginRight:"15px"}} >Delete</button>

        
      </div>

    </div>

    <p style={{
      color: "rgba(0,0,0,0.5)",
      fontSize: "12px",
      fontWeight: "bold",
      margin: "10px 0",
    }}>This is test answer</p>
    <div style={{
              margin: "5px 0px 0px 0px",
              padding: "5px 0px 0px 20px",
              borderTop: "1px solid lightgray",
            }}  
    className="post__answer">
      <div style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        padding: "10px 5px",
      }} 
      className="post-answer-container">
        <div style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "10px",
        fontSize: "12px", 
        fontWeight: 600,
        color: "#888",

      }} className="post-answered">
          {/* <Avatar /> */}
          <div style={{
        margin: "0px 10px",
      }}className="post-info">
            <p>
              Username
            </p>
            <span>Timestamp</span>
          </div>
        </div>
        <div className="post-answer">
          This is Test answer
        </div>

      </div>
    </div>
  </div>
  )
}

export default Post
