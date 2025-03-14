## Carbon Footprint Tracker Application
Andrew Flammia

#### Setup:

Install packages:
`npm i`

Run dev server:
`npm run dev`

#### Video Demo:

[Carbon Footprint Tracker Application Demo](carbon-footprint-app_demo.mp4)

#### Features:

1. Activity Logging:
- User can create a new activity by filling out a form with information about the activity, such as: activity title, date, category, and carbon value.
- The activities are then displayed in cards in an activity log section of the app

2. Achievements:
- In section of the app next to where the completed activities are shown is an achievements section with cards displaying a few possible achievements and their corresponding points.
- When a user creates a new activity the corresponding achievements are automatically updated.
- When an achievement is completed the button in its card becomes clickable and the user can collect the point correlated with that achievement.
When points are collected the total points a user has is updated and displayed above the list of possible achievements.

3. Summary Views:
- I created a dashboard that displays two charts that display the users total carbon use each day and another chart shows the users total carbon use per category.

4. Data Visualization:
- I created a bar chart that sums up the total carbon rank for each of the possible categories so the user can see which category affects there carbon use the most.
- I created a line chart that displays the users total carbon use each day and displays it in a line chart so they can view their usage trends over time.

5. User Profile:
- I created a profile page that displays the users statistics for all the data throughout the application: activities logged, days logged, achievements completed, and points earned.

6. Resource Library:
- I added a feature for the user to generate a sustainability to read so they can learn new ways to reduce their carbon footprint.
