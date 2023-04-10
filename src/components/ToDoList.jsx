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

  const activitesLeft = activities.filter(activity => !activity.isCompleted);

  function createNewActivity() {
    if (currentActivity.length > 0) {
      let activityArray = [...activities];
      activityArray.push({
        activity: currentActivity,
        isCompleted: false
      });
      setActivities(activityArray);
    }
  }

  function completeActivity(index) {
    let activityArray = [...activities];
    activityArray[index].isCompleted = !activityArray[index].isCompleted;
    setActivities(activityArray);
  }

  function deleteActivity(index) {
    let activityArray = [...activities];
    activityArray.splice(index, 1);
    setActivities(activityArray);
  }

  function deleteAllActivities() {
    setActivities([]);
  }

  return (
    <div className="list">
      <section className="top">
        <input
          className="inputField"
          value={currentActivity}
          onChange={e => {setCurrentActivity(e.target.value)}}
          onKeyPress={e => {
            if (e.key === "Enter") {
              createNewActivity(currentActivity);
              setCurrentActivity("");
            }
          }}
          placeholder="ATT GÖRA-LISTA" />
        <button className="add" onClick={() =>
          createNewActivity(currentActivity) & setCurrentActivity("")}>
          +
        </button>
      </section>
      <div className="info">
        {activities.length === 0 && "Din lista är tom - skriv in en aktivitet i rubriken ovan"}
        {activities.length > 0 && activitesLeft.length === 0 && `Nu är du färdig med alla saker!`}
        {activitesLeft.length > 0 && `Du har ${activitesLeft.length} ${activitesLeft.length === 1 ? "sak" : "saker"} kvar på listan att göra`}
        <div className="deleteAll">
          {activities.length > 0 && "Rensa listan"}
          <button onClick={() => deleteAllActivities()}>
            {activities.length > 0 && "🗑️"}
          </button>
        </div>
      </div>
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