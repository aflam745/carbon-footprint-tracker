// CarbonChart.tsx
import { useContext, useMemo } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { ActivityContext } from '../activityComponents/ActivityContext';
import './CarbonChart.css';

const CarbonChart = () => {
  const activityContext = useContext(ActivityContext);
  const activities = activityContext?.activities ?? [];

  // Aggregate activities: group by date and sum their rank.
  const aggregatedData = useMemo(() => {
    const dateTotals: { [date: string]: number } = {};

    activities.forEach(activity => {
      if (dateTotals[activity.date]) {
        dateTotals[activity.date] += activity.rank;
      } else {
        dateTotals[activity.date] = activity.rank;
      }
    });

    // Convert the object into an array of [timestamp, totalRank] pairs, sorted by date.
    return Object.entries(dateTotals)
      .sort(
        ([dateA], [dateB]) =>
          new Date(dateA).getTime() - new Date(dateB).getTime()
      )
      .map(([date, totalRank]) => [new Date(date).getTime(), totalRank]);
  }, [activities]);

  // Compute a yAxis maximum that is at least 200
  const yMax = useMemo(() => {
    const maxDataValue = aggregatedData.length > 0 ? Math.max(...aggregatedData.map(item => item[1])) : 0;
    return Math.max(200, maxDataValue);
  }, [aggregatedData]);

  const options = useMemo(() => ({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Carbon Footprint Over Time'
    },
    xAxis: {
      type: 'datetime',
      title: {
        text: 'Date'
      }
    },
    yAxis: {
      min: 0,
      max: yMax,
      title: {
        text: 'Total Carbon Footprint'
      },
      plotLines: [{
        color: 'red',       
        dashStyle: 'Dash',
        value: 200,
        width: 2,
      }]
    },
    series: [{
      name: 'Total Rank',
      data: aggregatedData
    }]
  }), [aggregatedData, yMax]);

  return (
    <div className="carbon-chart-container">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default CarbonChart;
