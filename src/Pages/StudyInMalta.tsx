import React from 'react';
import { usePageTracking } from '../utils/websiteAnalytics';
import BannerStudyInMalta from '../Components/Malta/BannerStudyInMalta';
import AppLayout from '../Components/Layouts/AppLayout';
import ExploreMalta from '../Components/Malta/ExploreMalta';
import StudyInMaltaFull from '../Components/Malta/StudyInMaltaFull';
import CTAMalta from '../Components/Malta/CTAMalta';
import FAQMalta from '../Components/Malta/FAQMalta';
import RequirementsMalta from '../Components/Malta/RequirementsMalta';
import PostUniMalta from '../Components/Malta/PostUniMalta';
import PartTimeCareersMalta from '../Components/Malta/PartTimeCareersMalta';
// import CustomScroll from '../Components/CustomScroll';
import Meta from "../Components/Meta";

export default function StudyInMalta() {
         usePageTracking('study-in-malta');
  return (
    <AppLayout>
        <>
        <Meta
            title="Sojilearn - Study in Malta"
            description="Explore the opportunities of studying in Malta with Sojilearn. Discover universities, courses, and career prospects in Malta."
            canonical="https://www.sojilearn.com/study-in-malta"
            image="https://www.sojilearn.com/logo.png"
        />
        <BannerStudyInMalta />
        <ExploreMalta />
        <StudyInMaltaFull />
        <RequirementsMalta />
        <PostUniMalta />
        <PartTimeCareersMalta />
        {/* <CustomScroll /> */}
        <FAQMalta />
        <CTAMalta />
        </>
    </AppLayout>
  )
}
