import { useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../integrations/supabase/client';
import ConstructionLayout from '../Components/Layouts/ConstructionLayout';
// import { Mail } from 'lucide-react';

export default function UnderConstruction() {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);


  
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setLoading(true);
        try {
        const { error } = await supabase
            .from('newsletter_subscribers')
            .insert([
            {
                email: email.toLowerCase().trim(),
                source: 'blog_signup'
            }
            ]);

        if (error) {
            // Check if it's a duplicate email error
            if (error.code === '23505') {
            alert("This email is already subscribed to our newsletter.");
            } else {
            throw error;
            }
        } else {
            alert("Successful! Thank you for subscribing to our newsletter.");
            setEmail('');
        }
        } catch (error) {
        console.error('Newsletter subscription error:', error);
        alert("Subscription failed, Please try again later.");
        } finally {
        setLoading(false);
        }
    };

    return (
    <ConstructionLayout>
        <>
        <section className="error-wrap gray">
            <div className="container">
                <div className="row justify-content-center">

                    <div className="col-lg-6 col-md-10">
                        <div className="text-center">
                            <div>
                                <img src="../assets/img/under.png" className="img-fluid" alt="construction warning" loading="lazy"/>
                            </div>
                            <br/>
                                <h5>We're building something unique for you. Please check back in 48 hours.</h5>
                            <Link className="btn theme-bg text-white btn-md" to="/">Back To Home</Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        <div className="clearfix"></div>
        <section id="newsletter" className="theme-bg call_action_wrap-wrap">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="call_action_wrap text-center p-4" style={{ background: "#fff", borderRadius: "16px", boxShadow: "0 2px 16px rgba(0,0,0,0.05)" }}>
                        {/* Icon in round shaded circle */}
                        <div className="col-12 mb-3">
                                <i className="fas fa-envelope fa-2x text-primary"></i>
                        </div>
                        <div className="col-12 text-dark">
                            <h3 className="mb-2 text-dark">Join Our Newsletter</h3>
                            <p className="mb-4 h6">Get the latest study abroad tips, scholarship opportunities, and visa updates delivered to your inbox.</p>
                        </div>
                       <div className="col-12">
                         <form onSubmit={handleSubmit} className="d-flex justify-content-center" style={{ gap: "8px" }}>
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <button className="btn theme-bg text-white btn-md" type="submit" disabled={loading}> {loading ? 'Subscribing...' : 'Subscribe'}</button>
                        </form>
                       </div>
                    </div>
                </div>
            </div>
        </section>
        </>
       
    </ConstructionLayout>
  )
}
