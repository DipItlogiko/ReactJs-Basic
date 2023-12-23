import { blogsData } from '../Data/Data.jsx'  /////jehetu ami amader src/Data/Data.jsx ar moddhe theke akta variable ke shudhu export defalut na kore shudhu export korechi tai amader oi variable take { }curly braces ar moddhe rakhte hobe import korar somoy
import Blog from '../Pages/Blog.jsx'

function Blogs() {   
    return (
        <div>
            <h1>Blogs Page</h1>
            <section>                 
                {blogsData.map((blog) => <Blog key={blog.id} {...blog} /> )}
            </section>
             
        </div>
    )
}

export default Blogs
