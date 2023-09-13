import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// pages
import { SignUP } from "./pages/SignUpTS";
import { Login } from "./pages/LoginPage";
import { PostUpload } from "./pages/PostUpload";
import { MyGlobalStyle } from "./style/GlobalStyle";
import { SearchMain } from "./pages/search/SearchMainPage";
import { SearchHistory } from "./pages/search/SearchHistoryPage";
import { SearchByCategory } from "./pages/search/SearchByCategoryPage";
import { ProfilePage } from "./pages/profile/ProfilePage";
import { Test } from "./pages/Test"
import { PostTS } from "./pages/PostTS";

export function App(): JSX.Element {
  return (
    <BrowserRouter>
      <MyGlobalStyle />
        <Routes>
          <Route path="/" element={<Test />} />
          <Route path="/signup" element={<SignUP />} />
          <Route path="/login" element={<Login />} />
          <Route path="/postupload" element={<PostUpload />} />
          <Route path="/profilePage" element={<ProfilePage />} />
          <Route path="/searchmain" element={<SearchMain />} />
          <Route path="/searchhistory" element={<SearchHistory />} />
          <Route path="/searchbycategory" element={<SearchByCategory />} />
          <Route path="/post" element={<PostTS />} />
        </Routes>
    </BrowserRouter>
  );
}
