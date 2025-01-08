import React from 'react';
import BannerStudyInGermany from '../Components/GY/BannerStudyInGermany';
import AppLayout from '../Components/Layouts/AppLayout';
import ExploreGermany from '../Components/GY/ExploreGermany';
import StudyInGYFull from '../Components/GY/StudyInGYFull';
import CTAGY from '../Components/GY/CTAGY';
import FAQGY from '../Components/GY/FAQGY';
// import RequirementsGY from '../Components/GY/RequirementsGY';
import PostUniGY from '../Components/GY/PostUniGY';
import PartTimeCareersGY from '../Components/GY/PartTimeCareersGY';

export default function StudyInGermany() {
  return (
    <AppLayout>
        <>
        <BannerStudyInGermany />
        <ExploreGermany />
        <StudyInGYFull />
        {/* <RequirementsGY /> */}
        <PostUniGY />
        <PartTimeCareersGY />
        <FAQGY />
        <CTAGY />
        </>
    </AppLayout>
  )
}
