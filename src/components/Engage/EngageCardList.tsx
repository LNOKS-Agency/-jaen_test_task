import React from 'react';
import { IEngagementGroup } from '../../interface';
import { EngageCard } from './EngageCard';

export const EngageCardList: React.FC<{
  groups: IEngagementGroup[]
}> = ({ groups }) => {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-2">
      {groups.map((group) => (
        <EngageCard
          group={group}
          key={group.id}
        />
      ))}
    </div>
  );
};
