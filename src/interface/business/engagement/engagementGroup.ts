import { IEngagementEnterRequirement } from './customEnterRequirement';

export interface IEngagementGroup {
  id: string;
  name: string;
  memberCount: number;
  pricePerMonth: number;
  owner: string;
  isPrivate: boolean;
  entranceRequirements: IEngagementEnterRequirement[];
}
