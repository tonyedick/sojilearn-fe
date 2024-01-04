import React from 'react';
import BannerStudyInUk from '../Components/BannerStudyInUk';
import AppLayout from '../Components/Layouts/AppLayout';
import ExploreUK from '../Components/ExploreUK';
import StudyInUKFull from '../Components/StudyInUkFull';
import CTA from '../Components/CTA';
import FAQUK from '../Components/FAQUK';
import RequirementsUK from '../Components/RequirementsUK';
import PostUniUK from '../Components/PostUniUK';
// import { CardsCarousel } from '../Components/CardsCarousel';

export default function Home() {
  return (
    <AppLayout>
        <>
        <BannerStudyInUk />
        <ExploreUK />
        <StudyInUKFull />
        <RequirementsUK />
        <PostUniUK />
        {/* <CardsCarousel /> */}
        <FAQUK />
        <CTA />
        </>
    </AppLayout>
  )
}
