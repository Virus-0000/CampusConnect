import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Alert = ({ alerts }) => {
  useEffect(() => {
    if (alerts.length > 0) {
      const timer = setTimeout(() => {
        // Alert will disappear when Redux state is cleared
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [alerts]);

  if (!alerts || alerts.length === 0) {
    return null;
  }

  return (
    <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md space-y-3">
      {alerts.map((alert) => (
        <div
          key={alert.id}
          className={`px-4 py-3 rounded-xl font-medium shadow-lg text-white ${
            alert.alertType === "danger"
              ? "bg-red-600"
              : alert.alertType === "success"
              ? "bg-green-600"
              : "bg-blue-600"
          }`}
        >
          {alert.msg}
        </div>
      ))}
    </div>
  );
};

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);