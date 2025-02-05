import {useRef, useState} from 'react';
import {set} from 'zod';
import {clsx} from 'clsx';
import {ExperienceCard} from '../ExperienceCard/ExperienceCard.tsx';

interface Props {
  data: {
    name: string,
    position: string,
    url: string,
    logo: string | null,
    startDate: string,
    endDate: string | null,
    location: {
      city: string,
      country: string
    },
    summary: string,
    summaryDetailed: string | null,
    skills: string[] | null
  }[]
}



export const ExperienceCards = (
  {data}: Props
) => {
  return <div className="relative flex flex-col gap-12">
    <div
      className="absolute w-[1px] h-full left-[250px] border-l-gray-400 border-dashed border-l-[1px]"
    />
    {data.map((item, i) => {
      return <ExperienceCard
        key={item.name}
        data={item}
      />
    })}
  </div>
}