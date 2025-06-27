import React from 'react';
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

export default function StudyInMalta() {
  return (
    <AppLayout>
        <>
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
