import React from 'react';
import { usePageTracking } from '../utils/websiteAnalytics';
import BannerStudyInCanada from '../Components/CA/BannerStudyInCanada';
import AppLayout from '../Components/Layouts/AppLayout';
import ExploreCanada from '../Components/CA/ExploreCanada';
import StudyInCAFull from '../Components/CA/StudyInCAFull';
import CTACA from '../Components/CA/CTACA';
import RequirementsCA from '../Components/CA/RequirementsCA';
import PostUniCA from '../Components/CA/PostUniCA';
import PartTimeCareersCA from '../Components/CA/PartTimeCareersCA';
import Meta from "../Components/Meta";

export default function StudyInCanada() {
        usePageTracking('study-in-canada');
  return (
    <AppLayout>
        <>
        <Meta
            title="Sojilearn - Study in Canada"
            description="Explore the opportunities of studying in Canada with Sojilearn. Discover universities, courses, career prospects and how to secure student loan to study in Canada."
            canonical="https://www.sojilearn.com/study-in-canada"
            image="https://www.sojilearn.com/logo.png"
        />
        <BannerStudyInCanada />
        <ExploreCanada />
        <StudyInCAFull />
        <RequirementsCA />
        <PostUniCA />
        <PartTimeCareersCA />
        <CTACA />
        </>
    </AppLayout>
  )
}
