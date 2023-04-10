<<<<<<< HEAD
import React, { useState, useEffect } from "react";

function ActivityComponent() {
  const [currentActivity, setCurrentActivity] = useState("");
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const storedActivities = localStorage.getItem("activities");
    if (storedActivities) {
      setActivities(JSON.parse(storedActivities));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("activities", JSON.stringify(activities));
  }, [activities]);
=======
import React, { useState } from "react";

function ActivityComponent() {
  const [currentActivity, setCurrentActivity] = useState("");
  const [activities, setActivity] = useState([]);
>>>>>>> 9e767d5625c18f56d992e222e2d7aaf078b01903

  const activitesLeft = activities.filter(activity => !activity.isCompleted);

  function createNewActivity() {
    if (currentActivity.length > 0) {
      let activityArray = [...activities];
      activityArray.push({
        activity: currentActivity,
        isCompleted: false
      });
<<<<<<< HEAD
      setActivities(activityArray);
=======
      setActivity(activityArray);
>>>>>>> 9e767d5625c18f56d992e222e2d7aaf078b01903
    }
  }

  function completeActivity(index) {
    let activityArray = [...activities];
    activityArray[index].isCompleted = !activityArray[index].isCompleted;
<<<<<<< HEAD
    setActivities(activityArray);
=======
    setActivity(activityArray);
>>>>>>> 9e767d5625c18f56d992e222e2d7aaf078b01903
  }

  function deleteActivity(index) {
    let activityArray = [...activities];
    activityArray.splice(index, 1);
<<<<<<< HEAD
    setActivities(activityArray);
  }

  function deleteAllActivities() {
    setActivities([]);
=======
    setActivity(activityArray);
  }

  function deleteAllActivities() {
    setActivity([]);
>>>>>>> 9e767d5625c18f56d992e222e2d7aaf078b01903
  }

  return (
    <div className="list">
      <section className="top">
        <input
          className="inputField"
          value={currentActivity}
<<<<<<< HEAD
          onChange={e => {setCurrentActivity(e.target.value)}}
=======
          onChange={e => {
            setCurrentActivity(e.target.value);
          }}
>>>>>>> 9e767d5625c18f56d992e222e2d7aaf078b01903
          onKeyPress={e => {
            if (e.key === "Enter") {
              createNewActivity(currentActivity);
              setCurrentActivity("");
            }
          }}
<<<<<<< HEAD
          placeholder="ATT GÖRA-LISTA" />
=======
          placeholder="ATT-GÖRA LISTA" />
>>>>>>> 9e767d5625c18f56d992e222e2d7aaf078b01903
        <button className="add" onClick={() =>
          createNewActivity(currentActivity) & setCurrentActivity("")}>
          +
        </button>
      </section>
<<<<<<< HEAD
      <div className="info">
=======
      <p>
>>>>>>> 9e767d5625c18f56d992e222e2d7aaf078b01903
        {activities.length === 0 && "Din lista är tom - skriv in en aktivitet i rubriken ovan"}
        {activities.length > 0 && activitesLeft.length === 0 && `Nu är du färdig med alla saker!`}
        {activitesLeft.length > 0 && `Du har ${activitesLeft.length} ${activitesLeft.length === 1 ? "sak" : "saker"} kvar på listan att göra`}
        <div className="deleteAll">
          {activities.length > 0 && "Rensa listan"}
          <button onClick={() => deleteAllActivities()}>
            {activities.length > 0 && "🗑️"}
          </button>
        </div>
<<<<<<< HEAD
      </div>
=======
      </p>
>>>>>>> 9e767d5625c18f56d992e222e2d7aaf078b01903
      {activities.map((activity, index) => (
        <div key={activity} className="setActivity">
          <button className="checkbox" onClick={() => completeActivity(index)}>
            {activity.isCompleted && "✔"}
          </button>
          <div className={activity.isCompleted ? "done" : ""}>{`${index + 1}: ${activity.activity}`}
          </div>
          <button className="delete" onClick={() => deleteActivity(index)}>
            ⛔
          </button>
        </div>
      ))}
    </div>
  );
}
export default ActivityComponent;