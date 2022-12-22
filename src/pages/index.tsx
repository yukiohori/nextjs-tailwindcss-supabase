import { useEffect, useState } from 'react';

import { Card } from '@/components/Card';
import { Meta } from '@/layouts/Meta';
import supabase from '@/lib/supabaseClient';
import { Main } from '@/templates/Main';

const Index = () => {
  const [jobList, setJobList] = useState<any[]>([]);
  // const router = useRouter();

  useEffect(() => {
    const getJobList = async () => {
      const { data: dataJob } = await supabase.from('job').select('*');
      setJobList(dataJob || []);
    };
    getJobList();
  }, []);

  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      {jobList.length > 0 && (
        <>
          {jobList.map((job) => (
            <Card job={job} key={job.id} />
          ))}
        </>
      )}
    </Main>
  );
};

export default Index;
