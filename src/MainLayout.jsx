import React from 'react';
import { Navbar, PresentationCard } from './fragments';
import { MainColumn } from './MainColumn';

export function MainLayout() {
  return (
    <>
      <MainColumn>
        <h1 className="site-name">Carlos Pinedo Sánchez</h1>
        <h3 className="site-subtitle">Junior web developer</h3>
        <PresentationCard></PresentationCard>
        <Navbar></Navbar>
      </MainColumn>
    </>
  );
}
