import { useState } from "react";
import {useHistory} from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("mario");
    const [isPending, setisPending] = useState(false);
    const history = useHistory();

    const handSubmit = (e) =>{
        e.preventDefault();
        const blog = {title, body, author};

        setisPending(true);

        fetch("http://localhost:8000/blogs",{
            method: 'POST',
            headers: {'Content-Type':"application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log('New blog added');
            setisPending(false);

            // Redirects it to home page
            history.push('/');
        })

    }

    return ( 
        <div className="create">
            <h1>Add a blog</h1>
            <form onSubmit={handSubmit}>
                <label> Blog Title</label>
                <input
                    type='text'
                    required
                    value={title}
                    onChange={(e)=>{setTitle(e.target.value);}}
                ></input>

                <label> Blog Body</label>
                <textarea
                    required
                    value={body}
                    onChange={(e)=>{setBody(e.target.value);}}
                ></textarea>

                <label> Blog author</label>
                <select 
                    required
                    value={author}
                    onChange={(e)=>{
                        setAuthor(e.target.value);
                    }}
                >
                    <option value="mario">mario</option>
                    <option value="wario">wario</option>
                </select>

                {!isPending && <button>Add Blog</button>}
                { isPending && <button disabled>Adding the blog</button>}

                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>

            </form>
        </div>
     );
}
 
export default Create;