import React from 'react';
import { usePageTracking } from '../utils/websiteAnalytics';
import BannerStudyInUk from '../Components/UK/BannerStudyInUk';
import AppLayout from '../Components/Layouts/AppLayout';
import ExploreUK from '../Components/UK/ExploreUK';
import StudyInUKFull from '../Components/UK/StudyInUkFull';
import CTAUK from '../Components/UK/CTAUK';
import FAQUK from '../Components/UK/FAQUK';
import RequirementsUK from '../Components/UK/RequirementsUK';
import PostUniUK from '../Components/UK/PostUniUK';
import PartTimeCareersUK from '../Components/UK/PartTimeCareersUK';
// import CustomScroll from '../Components/CustomScroll';
import Meta from "../Components/Meta";

export default function StudyInUK() {
      usePageTracking('study-in-uk');
  return (
    <AppLayout>
        <>
        <Meta
            title="Sojilearn - Study in UK"
            description="Explore the opportunities of studying in the UK with Sojilearn. Discover universities, courses, career prospects and student loan to study in the UK."
            canonical="https://www.sojilearn.com/study-in-uk"
            image="https://www.sojilearn.com/logo.png"
        />
        <BannerStudyInUk />
        <ExploreUK />
        <StudyInUKFull />
        <RequirementsUK />
        <PostUniUK />
        <PartTimeCareersUK />
        {/* <CustomScroll /> */}
        <FAQUK />
        <CTAUK />
        </>
    </AppLayout>
  )
}
