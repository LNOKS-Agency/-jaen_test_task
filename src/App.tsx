import { EngageCardList, PopupViewer } from './components';
import { mockEngageGroups } from './mock';
import { PopupProvider } from './context';

export const App = () => {
  return (
    <PopupProvider>
      <div className="text-base-content theme-dark h-screen w-screen bg-base-300">
        <PopupViewer />
        <div>
          <EngageCardList groups={mockEngageGroups} />
        </div>
      </div>
    </PopupProvider>

  );
};
