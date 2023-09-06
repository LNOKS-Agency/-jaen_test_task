import React from 'react';
import { PopUpContainer } from '../Popup/PopUpContainer';
import { IPopup, usePopup } from '../../context';
import { Badge, Button } from '../base';
import { IEngagementEnterRequirement } from '../../interface';

export const EngageApplyPopup: React.FC<IPopup<{
  groupName: string
  entranceRequirements: IEngagementEnterRequirement[]
  apply: () => void
}>> = ({ additionalParameter, name }) => {
  const { closePopup } = usePopup().actions;

  const close = () => {
    closePopup({ name });
  };

  return (
    <PopUpContainer name={name}>
      <div
        className="relative transform rounded-lg bg-base-300 px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full max-w-xl null sm:p-6 opacity-100 translate-y-0 sm:scale-100"
      >
        <div>
          <div className="flex justify-between">
            <div className="flex">
              <h2 className="text-2xl text-primary pr-1"> Apply to group</h2>
              <span className="text-2xl">
                {additionalParameter.groupName}
              </span>
            </div>
            <Badge.Common>
              <button
                onClick={close}
                className="text-xl px-2"
              >
                X
              </button>
            </Badge.Common>
          </div>
          <div className="pt-3">
            <p className="text-neutral font-semibold text-xl mb-3">
              why should we accept you to the group?
            </p>
          </div>
          <textarea
            rows={5}
            className={`block w-full resize-none border-0 py-5  px-2
            placeholder-gray-500 focus:ring-0 sm:text-sm bg-base-100 rounded-lg mb-2`}
          />
        </div>
        <div className=" flex justify-end mt-10">
          <Button.Purple>
            apply
          </Button.Purple>
        </div>

      </div>
    </PopUpContainer>
  );
};
