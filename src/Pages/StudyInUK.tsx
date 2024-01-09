import React from 'react';
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

export default function StudyInUK() {
  return (
    <AppLayout>
        <>
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
