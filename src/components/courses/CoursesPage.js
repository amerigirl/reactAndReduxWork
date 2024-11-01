import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
class CoursesPage extends React.Component {




  render() {
    return (
      <>
        <h2>Courses</h2>
        {this.props.courses.map(course => (
          <div key={course.title}>{course.title}</div>
        ))}
      </>
    );
  }
}

CoursesPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  
  return {
    courses: state.courses
  };
}

export default connect(mapStateToProps)(CoursesPage);
