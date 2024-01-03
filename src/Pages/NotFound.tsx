
import { Link } from 'react-router-dom';
import AppLayout from '../Components/Layouts/AppLayout';

export default function NotFound() {
  return (
    <AppLayout>
        <>
        <section className="error-wrap">
            <div className="container">
                <div className="row justify-content-center">

                    <div className="col-lg-6 col-md-10">
                        <div className="text-center">

                            <img src="../../../../../assets/img/404.png" className="img-fluid" alt="" />
                            <p>Sorry! The page you requested could not be found.</p>
                            <Link className="btn theme-bg text-white btn-md" to="../../">Back To Home</Link>

                        </div>
                    </div>

                </div>
            </div>
        </section>
        <div className="clearfix"></div>
        <section className="theme-bg call_action_wrap-wrap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">

                        <div className="call_action_wrap">
                            <div className="call_action_wrap-head">
                                <h3>Do You Have Questions ?</h3>
                                <span>We are here to help you grow your career and empower your dreams.</span>
                            </div>
                            <Link to="/contact" className="btn btn-call_action_wrap">Contact Us Today</Link>
                        </div>

                    </div>
                </div>
            </div>
        </section>
        </>
       
    </AppLayout>
  )
}
