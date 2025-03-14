import "./App.css";
import AppRoutes from "./routes";
import { ActivityProvider } from "./components/activityComponents/ActivityContext";
import Header from "./components/headerComponents/Header";
import { AchievementProvider } from "./components/achievementsComponents/AchievementContext";


function App() {
  return (
    <div className="App">
      <AchievementProvider>
        <ActivityProvider>
          <Header />
          <main className="main-content">
            <AppRoutes />
          </main>
        </ActivityProvider>
      </AchievementProvider>,
    </div>
  );
}

export default App;
