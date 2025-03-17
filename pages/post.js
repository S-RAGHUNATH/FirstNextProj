import axios from "axios"
import { withRouter } from "next/router"   //alternative for getInitialProps
const Post = ({id, comments}) => {
    return(
        <div>
         <h1>you r lookng at {id}</h1>
         {comments.map(comment => (
            <Comment {...comment} key={comment.id}/>
    ))}
        </div>
    )
}

const Comment = ({email, body})=> {
    return (
        <div>
            <h5>{email}</h5>
            <p>{body}</p>
        </div>
    )
}

Post.getInitialProps = async({query}) => {

    const res = await (`https://jsonplaceholder.typicode.com/comments?postId=${query.id}`)
    let {data} = res;
    return {...query, comments:data}  //query string section of URL passed as an obj in getInitialProps //data can be referred as comments
    //...query - spread all the objects that are passed in query using spread operator. if u dont use dot operator (...) id value not getting passed to post comp
} 
export default Post // withRouter(Post)