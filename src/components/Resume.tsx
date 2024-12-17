import resumeData  from '../data/resume.json';

export const Resume = () => {
  return <code style={{whiteSpace: 'pre-wrap'}}>
    {JSON.stringify(resumeData, null, 4)}
  </code>
}