import React from "react";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import LoginPage from "../pages/Login/LoginPage"; // 정확한 경로로 LoginPage import

// AnimatedRoutes: 애니메이션 라우팅
const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                {/* "/" 경로에서 LoginPage 렌더링 */}
                <Route path="/" element={<LoginPage />} />
            </Routes>
        </AnimatePresence>
    );
};

// AppRouter: 브라우저 라우팅
export const AppRouter = () => {
    return (
        <BrowserRouter>
            <AnimatedRoutes /> {/* AnimatedRoutes를 브라우저 라우터로 감싸기 */}
        </BrowserRouter>
    );
};
