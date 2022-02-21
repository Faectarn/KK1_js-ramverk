import React, { useState } from "react";

function ActivityComponent() {
  const [currentActivity, setCurrentActivity] = useState("");
  const [activities, setActivity] = useState([]);

  const activitesLeft = activities.filter(activity => !activity.isCompleted);

  function createNewActivity() {
    if (currentActivity.length > 0) {
      let activityArray = [...activities];
      activityArray.push({
        activity: currentActivity,
        isCompleted: false
      });
      setActivity(activityArray);
    }
  }

  function completeActivity(index) {
    let activityArray = [...activities];
    activityArray[index].isCompleted = !activityArray[index].isCompleted;
    setActivity(activityArray);
  }

  function deleteActivity(index) {
    let activityArray = [...activities];
    activityArray.splice(index, 1);
    setActivity(activityArray);
  }

  function deleteAllActivities() {
    setActivity([]);
  }

  return (
    <div className="list">
      <section className="top">
        <input
          className="inputField"
          value={currentActivity}
          onChange={e => {
            setCurrentActivity(e.target.value);
          }}
          onKeyPress={e => {
            if (e.key === "Enter") {
              createNewActivity(currentActivity);
              setCurrentActivity("");
            }
          }}
          placeholder="ATT-GÖRA LISTA" />
        <button className="add" onClick={() =>
          createNewActivity(currentActivity) & setCurrentActivity("")}>
          +
        </button>
      </section>
      <p>
        {activities.length == 0 && "Din lista är tom - skriv in en aktivitet i rubriken ovan"}
        {activities.length > 0 && activitesLeft.length == 0 && `Nu är du färdig med alla saker!`}
        {activitesLeft.length > 0 && `Du har ${activitesLeft.length} ${activitesLeft.length == 1 ? "sak" : "saker"} kvar på listan att göra`}
        <div className="deleteAll">
          {activities.length > 0 && "Rensa listan"}
          <button onClick={() => deleteAllActivities()}>
            {activities.length > 0 && "🗑️"}
          </button>
        </div>
      </p>
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