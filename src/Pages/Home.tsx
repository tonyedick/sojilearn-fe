import React from 'react';
import Hero from '../Components/Banner';
import AppLayout from '../Components/Layouts/AppLayout';
import Explore from '../Components/Explore';
import StudyInUKCom from '../Components/UK/StudyInUkCom';
import StudyInCanada from '../Components/CA/StudyInCanada';
import Steps from '../Components/Steps';
import News from '../Components/News';
import CTA from '../Components/CTA';
import FAQ from '../Components/FAQ';
import SimplifyAdmit from '../Components/SimplifyAdmit';

export default function Home() {
  return (
    <AppLayout>
        <>
        <Hero />
        <Explore />
        <Steps />
        <StudyInUKCom />
        <SimplifyAdmit />
        <StudyInCanada />
        <News />
        <FAQ />
        <CTA />
        </>
    </AppLayout>
  )
}
