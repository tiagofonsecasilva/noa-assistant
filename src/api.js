import axios from "axios";
const baseURL = `${process.env.REACT_APP_SERVER_HOSTNAME}/api`;

//http://localhost:5000/api/

/* PROJECT ROUTES */
export const getAllProjects = () => {
  return axios.get(`${baseURL}/projects`);
};

export const addProject = (project) => {
  return axios.post(`${baseURL}/projects`, project, { withCredentials: true });
};

export const updateProject = (updatedProject) => {
  return axios.put(`${baseURL}/projects/${updatedProject.id}`, updatedProject);
};

export const uploadFile = (uploadData) => {
  return axios.post(`${baseURL}/upload`, uploadData);
};

/* AUTHENTICATION API ROUTES */

export const signup = (user) => {
  return axios.post(`${baseURL}/signup`, user);
};

export const login = (user) => {
  return axios.post(`${baseURL}/login`, user, { withCredentials: true });
};

export const loggedIn = () => {
  return axios.get(`${baseURL}/loggedin`, { withCredentials: true });
};

export const logout = () => {
  return axios.post(`${baseURL}/logout`, null, { withCredentials: true });
};

// Courses Routes

export const getAllCourses = () => {
  return axios.get(`${baseURL}/courses`);
};

export const getCourse = (courseId) => {
  return axios.get(`${baseURL}/courses/${courseId}`);
};

export const deleteCourse = (courseId) => {
  return axios.delete(`${baseURL}/courses/${courseId}`);
};
