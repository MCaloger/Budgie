import React, { useEffect, useState } from "react";

export default function Notification(props) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(async () => {
      setVisible(false);
    }, props.delay);

    return () => clearTimeout(timer);
  }, [props.delay]);

  function assignNotificationClass(success) {
    return success
      ? "notification notification-success"
      : "notification notification-failure";
  }

  const showIfVisible = () => {
    return visible ? (
      <div
        className={assignNotificationClass(props.notification.success)}
        onClick={() => setVisible(false)}
      >
        {props.notification.message}
      </div>
    ) : null;
  };

  return showIfVisible();
}
