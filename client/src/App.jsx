import { Navigate, Route, Routes } from "react-router-dom"

import HomePage from "./pages/homePage/HomePage"
import CoursePage from "./pages/coursePage/CoursePage"
import Courses from "./pages/courses/Courses"
import DashboardPage from "./pages/dashBoardpage/DashboardPage"
import EnrolledCourses from "./pages/enrolledpage/EnrolledCourses"
import WishListPage from "./pages/wishList/WishListPage"
import AddCoursePage from "./pages/addCoursePage/AddCoursePage"
import LoginPage from "./pages/loginPage/LoginPage"
import RegisterPage from "./pages/registerPage/RegisterPage"

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { useContext } from "react"
import { AuthContext } from "./Context/Context"
import LearningPage from "./pages/learningPage/LearningPage"
import ContactUs from "./pages/constactUs/ContactUs"
import ProfilePage from "./pages/profilePage/profilePage"


function App() {

  const { currentUser } = useContext(AuthContext)
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/course/:id" element={<CoursePage />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/learning/:id" element={!currentUser ? <Navigate to="/login" /> : <LearningPage />} />
        <Route path="/dashboard/profile" element={!currentUser ? <Navigate to="/login" /> : <ProfilePage />} />
        <Route path="/dashboard/courses" element={!currentUser ? <Navigate to="/login" /> : <EnrolledCourses />} />
        <Route path="/dashboard/wishlist" element={!currentUser ? <Navigate to="/login" /> : <WishListPage />} />
        <Route path="/dashboard/reviews" element={!currentUser ? <Navigate to="/login" /> : <DashboardPage />} />
        <Route path="/dashboard/certificates" element={!currentUser ? <Navigate to="/login" /> : <DashboardPage />} />
        <Route path="/dashboard/addcourse" element={!currentUser ? <Navigate to="/login" /> : <AddCoursePage />} />
        <Route path="/dashboard/myquiz" element={!currentUser ? <Navigate to="/login" /> : <DashboardPage />} />
        <Route path="/dashboard/" element={!currentUser ? <Navigate to="/login" /> : <DashboardPage />} />
        <Route path="/login" element={!currentUser ? <LoginPage /> : <Navigate to={"/"} />} />
        <Route path="/register" element={<RegisterPage />} />

      </Routes>
    </QueryClientProvider>
  )
}

export default App
