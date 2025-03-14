import { createContext, useState, ReactNode } from "react";
import { ACHIEVEMENT_DATA, AchievementData } from "./achievement-data";

interface AchievementContextType {
  achievements: AchievementData[];
  totalPoints: number;
  updateAchievementsOnNewActivity: (uniqueDayCount: number) => void;
  collectAchievementPoints: (achievementTitle: string) => void;
}

export const AchievementContext = createContext<AchievementContextType | undefined>(undefined);

interface AchievementProviderProps {
  children: ReactNode;
}

export const AchievementProvider = ({ children }: AchievementProviderProps) => {
  const [achievements, setAchievements] = useState<AchievementData[]>(ACHIEVEMENT_DATA);
  const [totalPoints, setTotalPoints] = useState<number>(0);

  // For achievements like "Log 5 Activities" (type: "amount")
  const updateAchievementsOnNewActivity = (uniqueDayCount: number) => {
    setAchievements((prevAchievements) =>
      prevAchievements.map((achievement) => {
        let newAchievementValues = achievement
        if (achievement.type === "amount" && achievement.progress < achievement.goal) {
          const newProgress = achievement.progress + 1;
          newAchievementValues = {
            ...achievement,
            progress: newProgress,
            completed: newProgress === achievement.goal,
          };
        }
        if (achievement.type === "days" && achievement.progress < achievement.goal) {
            if (uniqueDayCount > achievement.progress) {
              newAchievementValues = {
                ...achievement,
                progress: uniqueDayCount,
                completed: uniqueDayCount === achievement.goal,
              };
            }
          }

        return newAchievementValues;
      })
    );
  };

  const collectAchievementPoints = (achievementTitle: string) => {
    setAchievements((prevAchievements) =>
        prevAchievements.map((achievement) => {
          if (achievement.title === achievementTitle && !achievement.collected) {
            // Update total points
            setTotalPoints((prevPoints) => prevPoints + achievement.points);
            return {
              ...achievement,
              collected: true,
            };
          }
          return achievement;
        })
      );
  };

  return (
    <AchievementContext.Provider
      value={{ achievements, totalPoints, updateAchievementsOnNewActivity, collectAchievementPoints }}
    >
      {children}
    </AchievementContext.Provider>
  );
};
