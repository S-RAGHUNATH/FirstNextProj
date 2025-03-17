import Navbar from "./components/navbar"
import axios from "axios";
import Link from "next/link";

const index = ({posts}) => (
    //post value coming from getInitialProps()
    <div>
        <Navbar/>
        <h1>out index pageeee</h1>
        <ul>
            {posts.map(post => (
                <li key={post.id}>
                   <Link href={`/post?id=${post.id}`} as ={`/p/${post.id}`}> {post.title} </Link>
                   {/* {} is must for using `` as above */}
                    </li>
            ))}
        </ul>
    </div>
)

//getInitialProps is outside func comp
index.getInitialProps = async() => {     //for func comp

    let res = await axios.get("https://jsonplaceholder.typicode.com/posts");  //using await as it is async operation
    let {data} = res

    console.log(data[0])
   // console.log("inside get InitialProps for functional");
    return {posts: data, mood: 'happy'}  //posts is prop now and can be accessed inside the component's func
    // mood: 'happy' - jst to show we can pass any addtional obj data as well from getInitialProps to func comp
    //return {}// getInitialProps mthd basically supposed to set ur component initial props. hence use return {} if u hav nthng to return
}
 export default index




// *************************************CLASS COMPONENT********************************
// import React, {Component} from "react";
// class Index extends Component{
//     constructor(props){
//         super(props);
//     }

//getInitialProps is inside class comp
//     static async getInitialProps(){        //for class comp
//         console.log("inside get InitialProps")
//         return {}  //getInitialProps mthd basically supposed to set ur component initial props. hence use return {} if u hav nthng to return
//     }

//     render(){
//         return(
//             <div>
//                 <h1>outt ind xx pageee</h1>
//             </div>
//         )
//     }
// }
//export default Index
//while refreshing the page, redenering happens on both client and server side and while routing to another page(page refresh will not happen) rendering willnot happen on server side and happens only on client side







//________________________________________




























