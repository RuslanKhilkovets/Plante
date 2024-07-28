import cl from "./ErrorPageContent.module.scss";

const ErrorPageContent = () => {
    return (
        <div className={cl["error-page"]}>
            <p className={cl["error-page__title"]}>404</p>
            <p className={cl["error-page__subtitle"]}>Сторінка не знайдена</p>
        </div>
    );
};

export default ErrorPageContent;