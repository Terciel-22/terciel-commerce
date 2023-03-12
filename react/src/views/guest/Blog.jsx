import { useEffect, useState } from "react"
import axiosClient from "../../axios-client";
import PageLoadingAnimation from "../../components/inc/PageLoadingAnimation";

export default function Blog() {

    const [loading, setLoading] = useState(false);
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        window.scrollTo({ top: 0, behavior: "smooth" });
        setLoading(true);
        axiosClient.get("/blogs")
            .then(({data})=>{
                setBlogs(data.data);
                setLoading(false);
            })
    },[]);

    return (
        <>
            {loading ? (
                <PageLoadingAnimation />
            ):(
                <>
                    <section id="blog-home" className="container pt-5 mt-5">
                        <h2 className="font-weight-bold pt-5">Blogs</h2>
                        <hr />
                    </section>

                    <section id="blog-container" className="container pt-5 ">
                        <div className="row">
                            {blogs.map((blog,index)=>
                                <div className="blog col-lg-6 col-md-6 col-12 pb-5" key={index}>
                                    <div className="blog-img">
                                        <img className="img-fluid w-100" src={blog.image} alt={blog.title} />
                                    </div>
                                    <h3 className="text-center fw-normal pt-3">{blog.title}</h3>
                                    <p className="text-center">{blog.created_at}</p>
                                </div>
                            )}
                        </div>
                    </section>
                </>
            )}
        </>
    )
}
