import { useGetGroupByIdQuery } from '../api';
import { usePopup } from '../context';
import { Popups } from '../constant';
import { EngageApplyPopup } from '../components/Engage/EngageApplyPopup';

export const useJoinToGroup = ({
  groupId,
}: { groupId: string }) => {
  const group = useGetGroupByIdQuery(groupId);

  const isUserCanJoin = group?.isPrivate || false;

  const { openPopup } = usePopup().actions;

  const sendPopup = () => {
    // TODO
  };

  const openApplyPopup = () => {
    if (group) {
      openPopup({
        name: Popups.engageApply,
        content: EngageApplyPopup,
        additionalParameter: {
          groupName: group.name,
          apply: sendPopup,
          entranceRequirements: group.entranceRequirements,
        },
      });
    }
  };

  const joinToGroup = () => {

  };
  return {
    isUserCanJoin,
    openApplyPopup,
    joinToGroup,
  };
};
