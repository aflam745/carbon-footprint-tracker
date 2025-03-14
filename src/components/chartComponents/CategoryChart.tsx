// CategoryChart.jsx
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { ActivityContext } from '../activityComponents/ActivityContext';
import "./CategoryChart.css";
import { useContext, useMemo } from 'react';

const CategoryChart = () => {
    const activityContext = useContext(ActivityContext);
    const activities = activityContext?.activities ?? []; // fallback to empty array

    const categories = ["Consumption", "Transportation", "Food"];

    const data = useMemo(() => {
      return categories.map(category =>
        activities
          .filter(act => act.category === category)
          .reduce((acc: number, act) => acc + act.rank, 0)
      );
    }, [activities, categories]);

    // Define chart options using useMemo for optimization.
    const options = useMemo(() => ({
      chart: {
        type: 'column'
      },
      title: {
        text: 'Carbon Footprint by Category'
      },
      xAxis: {
        categories: categories,
        title: {
          text: 'Category'
        }
      },
      yAxis: {
        title: {
          text: 'Carbon Footprint'
        }
      },
      series: [{
        name: 'Carbon Footprint',
        data: data
      }]
    }), [categories, data]);

    // Optionally show an error message if context is missing.
    if (!activityContext) {
      return <div>Error: Activity context not available.</div>;
    }

    return (
      <div className="category-chart-container">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    );
  };

  export default CategoryChart;
