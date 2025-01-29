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

export const Experience = (
  {data}: Props
) => {
  return <code>
    {JSON.stringify(data, null, 2)}
  </code>
}