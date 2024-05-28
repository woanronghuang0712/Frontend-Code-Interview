import React from 'react';
import { useRef,useState,useEffect,useCallback } from 'react';
import { MainTitle, Paragraph,Problems } from '../components/utils';
import RequirementList from '../components/RequirementList';


import {
  paragraphs,
  requirements,
  problems,
} from '../data/requirementsData';

export default function Home() {



  return (
    <>
        <MainTitle >Frontend Engineer Assessment</MainTitle>
        
        <Paragraph paragraphs={paragraphs.introParagraph} intro />
        <RequirementList items={requirements.intro_requirements} />
        <p className="mt-4">Good luck! Let's get started.</p>
        {problems.map((e) => (
          <Problems title={e.title} contents={e.contents} key={e.idx} />
        ))}
      
    </>
  );
}
