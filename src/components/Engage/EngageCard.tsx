import React from 'react';
import { IEngagementGroup } from '../../interface';
import { useJoinToGroup } from '../../hooks';
import { Badge, Button } from '../base';

export const EngageCard: React.FC<{
  group: IEngagementGroup
}> = ({ group }) => {
  const { joinToGroup, isUserCanJoin, openApplyPopup } = useJoinToGroup({ groupId: group.id });

  return (
    <div className="bg-base-200 px-3 py-2 rounded-md border border-base-100 h-[200px] flex flex-col">
      <div className="flex justify-between">
        <h1 className="text-2xl text-base-content">{group.name}</h1>
        <Badge.Common>
          {group.owner}
        </Badge.Common>
      </div>
      <div className="flex flex-1 text-neutral">
        <p>
          members:
          {' '}
          {group.memberCount}
        </p>
      </div>
      <div className=" text-neutral overflow-hidden">
        requirements:
        <div className="text-xs">
          {group.entranceRequirements.map((requirement) => (
            <div key={requirement.title} className="break-words">
              *
              {' '}
              {requirement.title}
              :
              {' '}
              {requirement.text}
            </div>
          ))}
        </div>
      </div>
      <div className="flex  justify-between items-end">
        <div className="text-2xl text-neutral">
          $
          {group.pricePerMonth}
          <span className="text-xs">/month</span>
        </div>
        {isUserCanJoin ? (
          <Button.Purple onClick={joinToGroup}>
            join
          </Button.Purple>
        )
          : (
            <Button.Purple onClick={openApplyPopup}>
              apply
            </Button.Purple>
          )}
      </div>
    </div>
  );
};
