import * as types from "./actionTypes";
import { courses } from "../../../tools/mockData";

//action creators
export function createCourse(course) {
  return { type: types.CREATE_COURSE, course };
}

export function loadCoursesSuccess(courses){
   return {type: types.LOAD_COURSES_SUCCESS, courses}
}


// Thunks for handling async operations (mocking API calls)
export function loadCourses() {
  return function (dispatch) {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch(loadCoursesSuccess(courses)); // Dispatch the success action with mock data
        resolve(courses);
      }, 1000); // Simulating an API call delay
    });
  };
}