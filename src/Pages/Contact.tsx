import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import AppLayout from '../Components/Layouts/AppLayout';
import { Link } from 'react-router-dom';

type FormValues = {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const submit = async (data: FormValues) => {
    try {
      const apiUrl = `${process.env.REACT_APP_BASEURL}/api/contactus`;
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success('Submitted successfully, we will get back to you shortly');
        reset();
      } else {
        const errorMessage = result?.message?.content?.[0] || 'Something went wrong, please try again!';
        toast.error(errorMessage);
      }
    } catch (error) {
      console.error('An unexpected error occurred:', error);
      toast.error('An unexpected error occurred, please try again!');
    }
  };
  return (
    <AppLayout>
        <>
        <section className="page-title gray">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">

                        <div className="breadcrumbs-wrap">
                            <h1 className="breadcrumb-title">Get in Touch</h1>
                            <nav className="transparent">
                                <ol className="breadcrumb p-0">
                                    <li className="breadcrumb-item"><Link to="../">Home</Link></li>
                                    <li className="breadcrumb-item active theme-cl" aria-current="page">Contact Us</li>
                                </ol>
                            </nav>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="row align-items-start">

                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <form 
                            action="."
                            method="post"
                            autoComplete="off"
                            encType="multipart/form-data" 
                            onSubmit={handleSubmit(submit)}
                        >
                            <div className="form-group">
                                <h4>We'd love to here from you</h4>
                                <span>Send a message and we'll respond as soon as possible </span>
                            </div>
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                    <div className="form-group">
                                        <label>Name *</label>
                                        <input 
                                            {...register('name', {
                                            required: 'Name is required',
                                            })}
                                            type="text" name="name" className="form-control" placeholder="Name" />
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                    <div className="form-group">
                                        <label>Email *</label>
                                        <input 
                                            {...register('email', {
                                                required: 'Email is required',
                                            })}
                                            type="email" name="email" className="form-control" placeholder="Email" />
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                    <div className="form-group">
                                        <label>Company</label>
                                        <input 
                                            {...register('company')}
                                            type="text" name="company" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                    <div className="form-group">
                                        <label>Phone</label>
                                        <input 
                                            {...register('phone')}
                                            type="tel" name="phone" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                    <div className="form-group">
                                        <label>Your Message *</label>
                                        <textarea 
                                             {...register('message', {
                                                required: 'Message is required',
                                            })}
                                            name="message" required className="form-control"></textarea>
                                    </div>
                                </div>
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                    <div className="form-group">
                                        <button className="btn theme-bg text-white btn-md" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>


                    <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12">
                        <div className="lmp_caption pl-lg-5">
                            <ol className="list-unstyled p-0">
                            <li className="d-flex align-items-start my-3 my-md-4">
                                <div className="rounded-circle p-3 p-sm-4 d-flex align-items-center justify-content-center theme-bg-light">
                                <div className="position-absolute theme-cl h5 mb-0"><i className="fas fa-home"></i></div>
                                </div>
                                <div className="ml-3 ml-md-4">
                                <h4>Reach Us</h4>
                                <p>
                                    Obaladejobi Street, Ikeja GRA, Lago, Nigeria.<br />
                                    21, Agbaje Akio Street, Okeafo GRA, Iwo,<br />Osun State, Nigeria
                                </p>
                                </div>
                            </li>
                            <li className="d-flex align-items-start my-3 my-md-4">
                                <div className="rounded-circle p-3 p-sm-4 d-flex align-items-center justify-content-center theme-bg-light">
                                <div className="position-absolute theme-cl h5 mb-0"><i className="fas fa-at"></i></div>
                                </div>
                                <div className="ml-3 ml-md-4">
                                <h4>Drop A Mail</h4>
                                <p>
                                    sojilearn@gmail.com<br />
                                    info@sojilearn.com
                                </p>
                                </div>
                            </li>
                            <li className="d-flex align-items-start my-3 my-md-4">
                                <div className="rounded-circle p-3 p-sm-4 d-flex align-items-center justify-content-center theme-bg-light">
                                <div className="position-absolute theme-cl h5 mb-0"><i className="fas fa-phone-alt"></i></div>
                                </div>
                                <div className="ml-3 ml-md-4">
                                <h4>Make a Call</h4>
                                <p>
                                    (+234) 813 780 6643<br />+234 815 274 2646
                                </p>
                                </div>
                            </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div className="clearfix"></div>
        <section className="p-0">
            <iframe src="https://www.google.com/maps/embed?pb=" className="full-width" style={{border:"0", height: "450"}} allowFullScreen loading="lazy"></iframe>
        </section>
        <section className="theme-bg call_action_wrap-wrap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">

                        <div className="call_action_wrap">
                            <div className="call_action_wrap-head">
                                <h3>Do You Have Questions ?</h3>
                                <span>We are here to help you grow your career and empower your dreams.</span>
                            </div>
                            <Link to="{{Route('contact')}}" className="btn btn-call_action_wrap">Contact Us Today</Link>
                        </div>

                    </div>
                </div>
            </div>
        </section>
        </>
    </AppLayout>
  )
}
