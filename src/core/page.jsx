import { Dashboard } from "../view/pages/common/Dashborad";
import Courses from "../view/pages/student/courses/all";
import AllCourses from "../view/pages/professor/courses/all";
import Course from "../view/pages/student/courses/single";
import Login from "./../view/pages/guest/Login";
import AddCourse from "../view/pages/professor/courses/add";
import EditCourse from "../view/pages/professor/courses/edit";
import ListOfCourses from "../view/pages/professor/courses/list";
import Exam from "../view/pages/student/exam/exam";
import AddQuestion from "../view/pages/professor/exam/addQus";
import EditProfile from "../view/pages/common/editprofile";
import Welcome from "../view/pages/common/Welcome";
import NotFound from "../view/pages/common/notFound";
import AddUser from "../view/pages/admin/AddUser";
import ProfList from "./../view/pages/admin/ProfList";
import StudentList from "./../view/pages/admin/StudentList";
const guest = [
  {
    name: "login",
    path: "/login",
    element: <Login />,
  },
  {
    name: "welcome",
    path: "/",
    element: <Welcome />,
  },
];

const defaultPageForAuth = {
  name: "dashboard",
  path: "/dashboard",
  element: <Dashboard />,
};

const student = [
  {
    name: "courses",
    path: "/courses",
    element: <Courses />,
  },
  {
    name: "course",
    path: "/courses/:id",
    element: <Course />,
  },
  {
    name: "exams",
    path: "/exam",
    element: <Exam />,
  },
].map((page) => {
  page.path = `/student${page.path}`;
  return page;
});

const professor = [
  {
    name: "courses",
    path: "/courses",
    element: <AllCourses />,
  },
  {
    name: "AddCourse",
    path: "/add-course",
    element: <AddCourse />,
  },
  {
    name: "EditCourse",
    path: "/edit-course/:id",
    element: <EditCourse />,
  },
  {
    name: "ListCourse",
    path: "/list-courses",
    element: <ListOfCourses />,
  },
  {
    name: "question",
    path: "/add-question",
    element: <AddQuestion />,
  },
].map((page) => {
  page.path = `/professor${page.path}`;
  return page;
});

const common = [
  defaultPageForAuth,
  {
    name: "EditProfile",
    path: "/edit",
    element: <EditProfile />,
  },
];
const admin = [
  {
    name: "AddUser",
    path: "/add-user",
    element: <AddUser />,
  },
  {
    name: "ProfList",
    path: "/professors-list",
    element: <ProfList />,
  },
  {
    name: "StudentList",
    path: "/students-list",
    element: <StudentList />,
  },
].map((page) => {
  page.path = `/admin${page.path}`;
  return page;
});

const notfound = [
  {
    name: "notFound",
    path: "*",
    element: <NotFound />,
  },
];

const allRoutes = [
  ...common,
  ...professor,
  ...student,
  ...guest,
  ...notfound,
  ...admin,
];

export {
  common,
  professor,
  student,
  guest,
  allRoutes,
  defaultPageForAuth,
  notfound,
  admin,
};
