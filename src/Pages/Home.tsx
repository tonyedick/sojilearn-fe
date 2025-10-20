import React from 'react';
import { usePageTracking } from '../utils/websiteAnalytics';
import Hero from '../Components/Banner';
import AppLayout from '../Components/Layouts/AppLayout';
import Explore from '../Components/Explore';
import StudyInUKCom from '../Components/UK/StudyInUkCom';
import StudyInCanada from '../Components/CA/StudyInCanada';
import Steps from '../Components/Steps';
import WhySoji from '../Components/WhySoji';
import News from '../Components/News';
import CTA from '../Components/CTA';
import FAQ from '../Components/FAQ';
import SimplifyAdmit from '../Components/SimplifyAdmit';
import Meta from "../Components/Meta";

export default function Home() {
    usePageTracking('home');
  return (
    <AppLayout>
        <>
        <Meta
        title="Sojilearn - Study Abroad Agency"
        description="Sojilearn is a study abroad agency that helps students navigate their educational journey and achieve their dreams."
        canonical="https://www.sojilearn.com"
        image="https://www.sojilearn.com/logo.png"
        />
        <Hero />
        <Explore />
        <Steps />
        <StudyInUKCom />
        <SimplifyAdmit />
        <StudyInCanada />
        <WhySoji />
        <News />
        <FAQ />
        <CTA />
        </>
    </AppLayout>
  )
}
