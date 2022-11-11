import { FC } from 'react';
import { NextRouter, useRouter } from 'next/router';

import TaskDetails from '@/components/taskDetails';

const TaskDetailsPage: FC = () => {
  const router: NextRouter = useRouter();
  const id: any = router.query.id;
  const TASK_DETAILS_URL: string = `${process.env.NEXT_PUBLIC_BASE_URL}/tasks/${id}/details`;

  return <>{id && <TaskDetails url={TASK_DETAILS_URL} taskID={id} />}</>;
};
export default TaskDetailsPage;