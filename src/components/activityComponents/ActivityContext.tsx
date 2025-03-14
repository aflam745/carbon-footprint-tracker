import { createContext, useState, ReactNode, useContext } from "react";
import { ActivityData } from "./activity-data";
import { AchievementContext } from "../achievementsComponents/AchievementContext";

interface ActivityContextType {
  activities: ActivityData[];
  uniqueDayCount: number;
  addActivity: (activity: ActivityData) => void;
}

export const ActivityContext = createContext<ActivityContextType | undefined>(undefined);

interface ActivityProviderProps {
  children: ReactNode;
}

export const ActivityProvider = ({ children }: ActivityProviderProps) => {
  const [activities, setActivities] = useState<ActivityData[]>([]);
  const [uniqueDayCount, setUniqueDayCount] = useState<number>(0);

  const achievementContext = useContext(AchievementContext);

  const addActivity = (activity: ActivityData) => {
    let uniqCount = 0;
    setActivities((prevActivities) => {
      const newActivities = [...prevActivities, activity];
        // Calculate the unique number of days from all activities.
      uniqCount = new Set(newActivities.map((act) => act.date)).size
      setUniqueDayCount(() => uniqCount)

      achievementContext?.updateAchievementsOnNewActivity(uniqCount);

      return newActivities;
    });
  };

  return (
    <ActivityContext.Provider value={{ activities, uniqueDayCount, addActivity }}>
      {children}
    </ActivityContext.Provider>
  );
};
