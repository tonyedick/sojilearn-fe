import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../state/store';
import { Link } from 'react-router-dom';
import Moment from "moment";
import { dateFormat } from "../Helpers/types";
import { fetchFeaturedBlogs } from '../state/featuredblogs/featuredBlog';

export default function News() {
    const dispatch = useDispatch<AppDispatch>();
    const { featuredBlogs } = useSelector(
      (state: RootState) => state.featuredBlogs
    );

    useEffect(() => {
      dispatch(fetchFeaturedBlogs());
    }, [dispatch]);

    return (
        <div>
            <section className="min gray">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7 col-md-8">
                            <div className="sec-heading center">
                                <h2>Latest News &amp; <span className="theme-cl">Articles</span></h2>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        {featuredBlogs && featuredBlogs.length > 0 ? (
                            featuredBlogs.map((item: any) => (
                                <div className="col-lg-4 col-md-6" key={item?.id}>
                                    <div className="blg_grid_box">
                                        <div className="blg_grid_thumb">
                                            <Link to={`blog-detail/${item?.id}`}>
                                                <img src={item?.featuredImage} className="img-fluid" alt="" />
                                            </Link>
                                        </div>
                                        <div className="blg_grid_caption">
                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="blg_tag dark"><span>{item?.category}</span> </div>
                                                </div>
                                                <div className="col-6" style={{ fontWeight: 'bold', textAlign: 'end' }}>
                                                    {Moment(item?.created_at).format(dateFormat)}
                                                </div>
                                            </div>
                                            <div className="blg_title">
                                                <h4>{item?.title}</h4>
                                            </div>
                                           <div className="blg_desc">
                                                <p>{item?.intro.slice(0, 80)}...</p>
                                            </div>
                                            <div className="blg_more">
                                                <Link to={`/blog-detail/${item?.id}`} target="_blank">Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-lg-7 col-md-8">
                                <div className="sec-heading center">
                                    <h2>No Articles <span className="theme-cl">Yet</span></h2>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}
