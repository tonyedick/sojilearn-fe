
import { usePageTracking } from '../utils/websiteAnalytics';
import React, { useRef } from 'react';
import Meta from "../Components/Meta";
import Hero from '../Components/ExternalCSS/Hero';
import AppLayout from '../Components/Layouts/AppLayout';
import MultiStepForm from '../Components/ExternalCSS/MultiStepForm';
import '../Components/ExternalCSS/main.css';
import Testimonials from '../Components/ExternalCSS/Testimonials';

export default function Application() {
    const formRef = useRef<HTMLDivElement>(null);
    usePageTracking('application');

    const scrollToForm = () => {
        formRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

  return (
    <AppLayout>
         <div className="tw-min-h-screen tw-bg-gray-50">
            <Meta
                title="Sojilearn - Apply now to study abroad"
                description="Sojilearn is a study abroad agency, helping students navigate their educational journey and achieve their dreams."
                canonical="https://www.sojilearn.com/apply"
                image="https://www.sojilearn.com/logo.png"
            />
            <Hero onGetStarted={scrollToForm} />

            <div className="tw-bg-white tw-py-8">
                <div className="tw-max-w-7xl tw-mx-auto tw-px-4 sm:tw-px-6 lg:tw-px-8">
                    <div className="tw-text-center">
                        <h2 className="tw-text-3xl tw-font-bold tw-text-gray-900 tw-mb-4">
                        Join 500+ Students Who've Made It Abroad in 2025
                        </h2>
                        <p className="tw-text-lg tw-text-gray-600">
                        Real results from real students who chose us
                        </p>
                    </div>

                    {/* Testimonials */}
                    <section id="tw-success-stories">
                        <div className="tw-grid md:tw-grid-cols-2 tw-gap-8">
                            <div className="tw-bg-gray-50 tw-rounded-2xl tw-p-6">
                                <div className="tw-flex tw-items-center tw-mb-4">
                                    <div className="tw-w-12 tw-h-12 theme-bg tw-rounded-full tw-flex tw-items-center tw-justify-center tw-text-white tw-font-bold">
                                    R
                                    </div>
                                    <div className="tw-ml-4">
                                    <h4 className="tw-font-semibold tw-text-gray-900">Rufai T. (MSc. Project Management), Canada</h4>
                                    <p className="tw-text-sm tw-text-gray-600">Support with student loan</p>
                                    </div>
                                </div>
                                <p className="tw-text-gray-700 tw-italic">
                                    "I was able to secure admission in a top university in Toronto, Canada, and qualify for student loan that covers my tuition and living expenses. I still cannot believe this is real."
                                </p>
                            </div>
                            <div className="tw-bg-gray-50 tw-rounded-2xl tw-p-6">
                                <div className="tw-flex tw-items-center tw-mb-4">
                                    <div className="tw-w-12 tw-h-12 theme-bg tw-rounded-full tw-flex tw-items-center tw-justify-center tw-text-white tw-font-bold">
                                    J
                                    </div>
                                    <div className="tw-ml-4">
                                    <h4 className="tw-font-semibold tw-text-gray-900">Justice N. (MSc. Artificial Intelligence), USA</h4>
                                    <p className="tw-text-sm tw-text-gray-600">Support with Student loan</p>
                                    </div>
                                </div>
                                <p className="tw-text-gray-700 tw-italic">
                                    "I needed support to secure admission in a top university in the US and fund my studies. With the help of Sojilearn, I was able to get admission into Northeastern Univeristy, Khoury School of Sciences, Boston USA and accessed over $72,000 to cover tuition and living expenses."
                                </p>
                            </div>
                            <div className="tw-bg-gray-50 tw-rounded-2xl tw-p-6">
                                <div className="tw-flex tw-items-center tw-mb-4">
                                    <div className="tw-w-12 tw-h-12 theme-bg tw-rounded-full tw-flex tw-items-center tw-justify-center tw-text-white tw-font-bold">
                                    L
                                    </div>
                                    <div className="tw-ml-4">
                                    <h4 className="tw-font-semibold tw-text-gray-900">Leonard A. (MSc. International Relations), UK</h4>
                                    <p className="tw-text-sm tw-text-gray-600">Registered in Coventry University for September 2025</p>
                                    </div>
                                </div>
                                <p className="tw-text-gray-700 tw-italic">
                                    "I was having difficulties drafting statement of purpose, but Sojilearn assisted me with everything as well as drafting a professional resume based on my background."
                                </p>
                            </div>
                            <div className="tw-bg-gray-50 tw-rounded-2xl tw-p-6">
                                <div className="tw-flex tw-items-center tw-mb-4">
                                    <div className="tw-w-12 tw-h-12 theme-bg tw-rounded-full tw-flex tw-items-center tw-justify-center tw-text-white tw-font-bold">
                                    C
                                    </div>
                                    <div className="tw-ml-4">
                                    <h4 className="tw-font-semibold tw-text-gray-900">Comfort O. (MRes), UK</h4>
                                    <p className="tw-text-sm tw-text-gray-600">Expert support for application</p>
                                    </div>
                                </div>
                                <p className="tw-text-gray-700 tw-italic">
                                    "I needed an MRes course to travel with my fiancé, thankfully I came across Sojilearn and got admission into MRes Operations Management at University of Gloucesteshire."
                                </p>
                            </div>
                            <div className="tw-bg-gray-50 tw-rounded-2xl tw-p-6">
                                <div className="tw-flex tw-items-center tw-mb-4">
                                    <div className="tw-w-12 tw-h-12 theme-bg tw-rounded-full tw-flex tw-items-center tw-justify-center tw-text-white tw-font-bold">
                                    B
                                    </div>
                                    <div className="tw-ml-4">
                                    <h4 className="tw-font-semibold tw-text-gray-900">Becky T. (MSc. Oil & Gas Engineering), UK</h4>
                                    <p className="tw-text-sm tw-text-gray-600">Now rounding up Masters degree at Coventry University</p>
                                    </div>
                                </div>
                                <p className="tw-text-gray-700 tw-italic">
                                    "The process was so smooth. No stress, no confusion. Sojilearn handled everything professionally, and provided accommodation support before I arrived UK."
                                </p>
                            </div>
                            <div className="tw-bg-gray-50 tw-rounded-2xl tw-p-6">
                                <div className="tw-flex tw-items-center tw-mb-4">
                                    <div className="tw-w-12 tw-h-12 theme-bg tw-rounded-full tw-flex tw-items-center tw-justify-center tw-text-white tw-font-bold">
                                    C
                                    </div>
                                    <div className="tw-ml-4">
                                    <h4 className="tw-font-semibold tw-text-gray-900">Ekpo O. (MSc Organizational Health Safety), UK</h4>
                                    <p className="tw-text-sm tw-text-gray-600">Preparing for study in January 2026.</p>
                                    </div>
                                </div>
                                <p className="tw-text-gray-700 tw-italic">
                                    "I needed an agency that could help me process admission, as well provide tailored guidance each step of the application process. Sojilearn came through for me, and helped me secure student loan to cover tuition and living expenses."
                                </p>
                            </div>
                            <div className="tw-bg-gray-50 tw-rounded-2xl tw-p-6">
                                <div className="tw-flex tw-items-center tw-mb-4">
                                    <div className="tw-w-12 tw-h-12 theme-bg tw-rounded-full tw-flex tw-items-center tw-justify-center tw-text-white tw-font-bold">
                                    I
                                    </div>
                                    <div className="tw-ml-4">
                                    <h4 className="tw-font-semibold tw-text-gray-900">Igbanam Y. (MSc. Public Health), UK</h4>
                                    <p className="tw-text-sm tw-text-gray-600">Preparing for study in January 2026</p>
                                    </div>
                                </div>
                                <p className="tw-text-gray-700 tw-italic">
                                    "I completed my UG in Benin Replublic. With Sojilearn's expert guidance, I was able to secure a place in a Top UK university."
                                </p>
                            </div>
                            <div className="tw-bg-gray-50 tw-rounded-2xl tw-p-6">
                                <div className="tw-flex tw-items-center tw-mb-4">
                                    <div className="tw-w-12 tw-h-12 theme-bg tw-rounded-full tw-flex tw-items-center tw-justify-center tw-text-white tw-font-bold">
                                    T
                                    </div>
                                    <div className="tw-ml-4">
                                    <h4 className="tw-font-semibold tw-text-gray-900">Oluremi G. (MSc. Data Science), UK</h4>
                                    <p className="tw-text-sm tw-text-gray-600">My expectations were exceeded</p>
                                    </div>
                                </div>
                                <p className="tw-text-gray-700 tw-italic">
                                    "I reached out to Sojilearn, to help secure admission in the UK. I was able to secure offers from University of Roehampton, University of Aberdeen. I also got access to funds to cover tuition and living expenses."
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <div ref={formRef} className="tw-bg-white">
                <div className="tw-max-w-7xl tw-mx-auto tw-px-4 sm:tw-px-6 lg:tw-px-8 tw-text-center tw-mb-2">
                    <h2 className="tw-text-3xl tw-font-bold tw-text-gray-900">
                        Ready to Start Your Study Abroad Journey?
                    </h2>
                    <p className="tw-text-lg tw-text-gray-600">
                        Fill out this quick form and get personalized guidance within 24 hours
                    </p>
                </div>
                <MultiStepForm />
            </div>

            {/* <div className="tw-bg-gray">`
                <Testimonials />
            </div> */}
        </div>
    </AppLayout>
  )
}
