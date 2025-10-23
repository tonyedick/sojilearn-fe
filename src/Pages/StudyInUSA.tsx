import React from 'react';
import { usePageTracking } from '../utils/websiteAnalytics';
import BannerStudyInUSA from '../Components/USA/BannerStudyInUSA';
import AppLayout from '../Components/Layouts/AppLayout';
import ExploreUSA from '../Components/USA/ExploreUSA';
import StudyInUSAFull from '../Components/USA/StudyInUSAFull';
import FAQUSA from '../Components/USA/FAQUSA';
import CTAUSA from '../Components/USA/CTAUSA';
import RequirementsUSA from '../Components/USA/RequirementsUSA';
import PostUniUSA from '../Components/USA/PostUniUSA';
import PartTimeCareersUSA from '../Components/USA/PartTimeCareersUSA';
import Meta from "../Components/Meta";
import USANews from '../Components/USA/USANews';

export default function StudyInUSA() {
  usePageTracking('study-in-usa');
  return (
    <AppLayout>
        <>
        <Meta
            title="Sojilearn - Study in USA"
            description="Explore the opportunities of studying in the USA with Sojilearn. Discover universities, courses, career prospects and student loan to study in the USA."
            canonical="https://www.sojilearn.com/study-in-usa"
            image="https://www.sojilearn.com/logo.png"
        />
        <BannerStudyInUSA />
        <ExploreUSA />
        <StudyInUSAFull />
        <RequirementsUSA />
        <PostUniUSA />
        <PartTimeCareersUSA />
        <USANews />
        <FAQUSA />
        <CTAUSA />
        </>
    </AppLayout>
  )
}
