import { mockEngageGroups } from '../mock';

export const useGetGroupByIdQuery = (groupId: string) => {
  return mockEngageGroups.find((group) => group.id === groupId);
};
