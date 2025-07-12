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

export default function StudyInUSA() {
  usePageTracking('study-in-usa');
  return (
    <AppLayout>
        <>
        <BannerStudyInUSA />
        <ExploreUSA />
        <StudyInUSAFull />
        <RequirementsUSA />
        <PostUniUSA />
        <PartTimeCareersUSA />
        <FAQUSA />
        <CTAUSA />
        </>
    </AppLayout>
  )
}
