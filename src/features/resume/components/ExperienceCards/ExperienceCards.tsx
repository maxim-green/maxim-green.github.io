import {useRef, useState} from 'react';
import {set} from 'zod';
import {clsx} from 'clsx';
import {ExperienceCard} from '../ExperienceCard/ExperienceCard.tsx';

interface Props {
  data: {
    id: string,
    company: string,
    description?: string,
    body?: string,
    position: string,
    website?: string,
    logo?: string,
    startDate: string,
    endDate?: string,
    location: {
      city: string,
      country: string
    },
    skills: string[]
  }[]
}



export const ExperienceCards = (
  {data}: Props
) => {
  const line = <div className="absolute w-[1px] h-full left-[250px]">
    <div
      className="absolute w-full h-32 bg-white top-0 left-0 z-10"
      style={{
        background: "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)"
      }}
    />
    <div
      className="absolute w-full h-full left-0 border-l-gray-400 border-dashed border-l-[1px] z-0"
    />
    <div
      className="absolute w-full h-32 bg-white bottom-0 left-0 z-10"
      style={{
        background: "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)"
      }}
    />
  </div>

  return <div className="relative flex flex-col gap-12">
    {line}
    {data
      .sort((itemA, itemB) => {
        const timeA = new Date(itemA.startDate).getTime();
        const timeB = new Date(itemB.startDate).getTime();
        return timeB - timeA;
      })
      .map((item) => (
        <ExperienceCard
          key={item.id}
          data={item}
        />
      ))}
  </div>
}