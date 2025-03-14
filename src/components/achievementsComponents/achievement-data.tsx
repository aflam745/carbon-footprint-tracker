type AchievementData = {
    title: string;
    progress: number;
    goal: number;
    points: number;
    completed: boolean;
    collected: boolean;
    type: string;
}

const ACHIEVEMENT_DATA: AchievementData[] = [
    {
        title: 'Log 5 Activities',
        progress: 0,
        goal: 5,
        points: 10,
        completed: false,
        collected: false,
        type: "amount",
    },
    {
        title: 'Log activities for 3 days',
        progress: 0,
        goal: 3,
        points: 5,
        completed: false,
        collected: false,
        type: "days"
    },
    {
        title: 'Log 10 Activities',
        progress: 0,
        goal: 10,
        points: 25,
        completed: false,
        collected: false,
        type: "amount"
    },
    {
        title: 'Log activities for 5 days',
        progress: 0,
        goal: 5,
        points: 15,
        completed: false,
        collected: false,
        type: "days"
    },
]

export { ACHIEVEMENT_DATA }
export type { AchievementData }
