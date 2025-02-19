import axios from 'axios';
import { useEffect, useState } from 'react';


const Article = () => {

    const [blog, setBlog] = useState([])
    const [error, setError] = useState(null);
    useEffect(() => {

        axios.get('../json/blogs_data.json')
            .then(data => setBlog(data.data))
            .catch(error => setError(error)
            )
    }, [])

    return (
        <div className='mb-10'>
            <div className='flex gap-10 w-10/12 mx-auto'>
                {
                    blog.slice(0, 3).map(post => (
                        <div key={post.id} className="card bg-base-100 w-96 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img
                                    src={post.url}
                                    alt=""
                                    className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{post.title}</h2> {/* Fixed typo: tittle → title */}
                                <p>{post.description}</p>
                                <div className="card-actions mt-4">
                                    <button className="btn btn-primary">Read More..</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Article;