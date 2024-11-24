import React from "react";
import styles from "./MainPage.module.scss";
import Welcome from "../../Components/Welcome/Welcome";
import CategoriesMainPage from "../../Components/CategoriesMainPage/CategoriesMainPage";
import DiscountForm from "../../Components/DiscountForm/DiscountForm";
import Sales from "../../Components/Sales/Sales";

const MainPage: React.FC = () => {
    return (
        <>
            <Welcome />
            <CategoriesMainPage />
            <DiscountForm />
            <Sales />
        </>
    );
};

export default MainPage;
