import {useEffect, useRef, useState} from 'react';
import {clsx} from 'clsx';

interface CardData {
  id: string,
  company: string,
  description?: string,
  body?: string,
  website?: string,
  position: string,
  startDate: string,
  endDate?: string,
  skills?: string[],
  location: {
    city: string,
    country: string
  },
}

interface CardProps {
  data: CardData;
  onReady?: (size: { heightOpened?: number, heightClosed?: number }) => void
}

const getYearFromDate = (date: string) => {
  return new Date(date).getFullYear();
}

const Chevron = (
  {direction}: {direction: 'up' | 'down'}
) => {
  if (direction === 'down') {
    return (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
           xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd"
              d="M16.7067 21.7067C16.5192 21.894 16.265 21.9992 16 21.9992C15.735 21.9992 15.4809 21.894 15.2934 21.7067L5.29335 11.7067C5.11671 11.5171 5.02055 11.2664 5.02512 11.0073C5.02969 10.7483 5.13464 10.5011 5.31786 10.3179C5.50107 10.1347 5.74825 10.0297 6.00732 10.0251C6.26639 10.0206 6.51712 10.1167 6.70669 10.2934L16 19.5867L25.2934 10.2934C25.3849 10.1951 25.4953 10.1163 25.618 10.0617C25.7406 10.007 25.8731 9.97762 26.0073 9.97525C26.1416 9.97288 26.275 9.99758 26.3995 10.0479C26.524 10.0982 26.6371 10.173 26.7321 10.268C26.827 10.3629 26.9019 10.4761 26.9522 10.6006C27.0025 10.7251 27.0272 10.8585 27.0248 10.9927C27.0224 11.127 26.9931 11.2594 26.9384 11.3821C26.8837 11.5048 26.8049 11.6152 26.7067 11.7067L16.7067 21.7067Z"
              fill="#CACACA"/>
      </svg>
    );
  }
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
         xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd"
            d="M15.2933 10.2934C15.4808 10.1061 15.735 10.0009 16 10.0009C16.265 10.0009 16.5191 10.1061 16.7066 10.2934L26.7066 20.2934C26.8833 20.4829 26.9795 20.7336 26.9749 20.9927C26.9703 21.2518 26.8654 21.499 26.6821 21.6822C26.4989 21.8654 26.2517 21.9703 25.9927 21.9749C25.7336 21.9795 25.4829 21.8833 25.2933 21.7067L16 12.4134L6.70665 21.7067C6.6151 21.8049 6.5047 21.8837 6.38203 21.9384C6.25937 21.993 6.12695 22.0224 5.99268 22.0248C5.85841 22.0272 5.72503 22.0025 5.60052 21.9522C5.476 21.9019 5.36289 21.827 5.26793 21.7321C5.17297 21.6371 5.09811 21.524 5.04782 21.3995C4.99752 21.275 4.97282 21.1416 4.97519 21.0073C4.97756 20.8731 5.00695 20.7406 5.0616 20.618C5.11626 20.4953 5.19506 20.3849 5.29331 20.2934L15.2933 10.2934Z"
            fill="#CACACA"/>
    </svg>
  );
}

export const ExperienceCard = (
  {
    data,
    onReady
  }: CardProps
) => {
  const {company, position, description, skills, website, body, location, startDate, endDate} = data;

  const ref = useRef<{ heightOpened?: number, heightClosed?: number }>({});
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [initialized, setInitialized] = useState(false);
  const [opened, setOpened] = useState(true);

  useEffect(() => {
    if (opened && !ref.current.heightOpened) {
      ref.current.heightOpened = wrapperRef.current?.clientHeight;
      setOpened(false);
    }
  }, [])

  useEffect(() => {
    if (!opened && !ref.current.heightClosed) {
      ref.current.heightClosed = wrapperRef.current?.clientHeight;
      onReady?.(ref.current);
      setInitialized(true);
    }
  }, [opened]);

  return (
    <div
      className="flex flex-row gap-6 z-10"
      style={{
        height: !opened ? ref.current.heightClosed : ref.current.heightOpened,
        visibility: !initialized ? 'hidden' : 'visible',
        transition: '.3s'
      }}
      ref={wrapperRef}
    >
      <div 
        className="flex flex-col gap-3 shrink-0 w-[220px]"
        style={{
          height: 32,
          marginTop: (ref.current.heightClosed || 0) / 2 - 32,
        }}
      >
        <div className="text-2xl font-bold text-gray-800">
          {getYearFromDate(startDate)} - {endDate ? getYearFromDate(endDate) : 'Ongoing'}
        </div>
        <div className="text-lg text-gray-400">
          {location.city}, {location.country}
        </div>
      </div>
      <div
        className="shrink-0 h-[13px] w-[13px] bg-gray-500 rounded-full"
        style={{
          marginTop: (ref.current.heightClosed || 0) / 2
        }}
      />
      <div
        className="flex flex-row gap-6 px-12 py-9 card card-bordered border-gray-300 bg-base-100 shadow-sm"
      >
        <div className="flex flex-col">
          <div className="text-3xl text-gray-700 mb-1 font-bold">
            {position}
          </div>
          <div className="text-2xl text-gray-400 mb-4 flex flex-row items-center gap-4">
            {company}
            {website && <a
              href={`https://${website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-blue-500 inline-flex gap-1 items-center"
            >
              {website}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                   viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                   className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"/>
              </svg>
            </a>}
          </div>
          {skills && <div className="flex flex-row flex-wrap gap-3 mb-5">
            {skills.map(item => (
              <div
                key={item}
                className="flex items-center shrink-0 h-7 px-4 text-sm text-gray-500 border whitespace-nowrap rounded-full">
                {item}
              </div>
            ))}
          </div>}
          <div className="prose text-gray-400">
            <div>
              {description}
            </div>
            {body && (opened || initialized) && <div
              className="text-gray-400 transition-opacity overflow-hidden"
              style={{
                opacity: opened ? 1 : 0,
              }}
              dangerouslySetInnerHTML={{__html: body}}
            />}
          </div>
        </div>
        <button
          className="block h-8 w-8 p-0 m-0"
          onClick={() => {
            setOpened(o => !o);
          }}
          style={{
            marginTop: (ref.current.heightClosed || 0) / 2 - 48
          }}
        >
          <Chevron direction={opened ? 'up' : 'down'}/>
        </button>
      </div>
    </div>
  );
}