import React from 'react';
import BannerStudyInCanada from '../Components/CA/BannerStudyInCanada';
import AppLayout from '../Components/Layouts/AppLayout';
import ExploreCanada from '../Components/CA/ExploreCanada';
import StudyInCAFull from '../Components/CA/StudyInCAFull';
import CTACA from '../Components/CA/CTACA';
import RequirementsCA from '../Components/CA/RequirementsCA';
import PostUniCA from '../Components/CA/PostUniCA';
import PartTimeCareersCA from '../Components/CA/PartTimeCareersCA';

export default function StudyInCanada() {
  return (
    <AppLayout>
        <>
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
