import React from 'react';
import { usePageTracking } from '../utils/websiteAnalytics';
import BannerStudyInGermany from '../Components/GY/BannerStudyInGermany';
import AppLayout from '../Components/Layouts/AppLayout';
import ExploreGermany from '../Components/GY/ExploreGermany';
import StudyInGYFull from '../Components/GY/StudyInGYFull';
import CTAGY from '../Components/GY/CTAGY';
import FAQGY from '../Components/GY/FAQGY';
import RequirementsGY from '../Components/GY/RequirementsGY';
import PostUniGY from '../Components/GY/PostUniGY';
import PartTimeCareersGY from '../Components/GY/PartTimeCareersGY';
import Meta from "../Components/Meta";
import GYNews from '../Components/GY/GYNews';

export default function StudyInGermany() {
        usePageTracking('study-in-germany');
  return (
    <AppLayout>
        <>
        <Meta
            title="Sojilearn - Study in Germany"
            description="Explore the opportunities of studying in Germany with Sojilearn. Discover universities, courses, and career prospects in Germany."
            canonical="https://www.sojilearn.com/study-in-germany"
            image="https://www.sojilearn.com/logo.png"
        />
        <BannerStudyInGermany />
        <ExploreGermany />
        <StudyInGYFull />
        <RequirementsGY />
        <PostUniGY />
        <PartTimeCareersGY />
        <GYNews />
        <FAQGY />
        <CTAGY />
        </>
    </AppLayout>
  )
}
