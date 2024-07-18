import cl from "./Overlay.module.scss"

const Overlay: FC = ( { active, onClick }) => {
    
    return (
        <>
            {
                active
                &&
                <div 
                    className={cl["overlay"]}
                    onClick={onClick}
                ></div>
            }
        </>
    );
};

export default Overlay;