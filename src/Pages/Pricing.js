import React from 'react'
import PageWrapper from "../Layout/PageWrapper";
import Hero from '../Components/Pricing/Hero';
import Tiers from '../Components/Pricing/Tiers';
import Enterprise from '../Components/Pricing/Enterprise';

const Pricing = () => {
  return (
    <PageWrapper>
        <Hero/>
        <Tiers/>
        <Enterprise/>
    </PageWrapper>
  )
}

export default Pricing