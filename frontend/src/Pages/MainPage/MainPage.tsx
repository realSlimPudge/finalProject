import React from "react";
import styles from "./MainPage.module.scss";
import Welcome from "../../Components/Welcome/Welcome";
import Categories from "../../Components/Categories/Categories";

const MainPage: React.FC = () => {
    return (
        <>
            <Welcome />
            <Categories count={4} />
        </>
    );
};

export default MainPage;
