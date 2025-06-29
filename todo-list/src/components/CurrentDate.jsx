import "./css/CurrentDate.css";
const CurrentDate = () => {
    const today = new Date().toDateString();

    return (
        <div className="CurrentDate">
            <p>오늘은</p>
            <h1>{today}</h1>
        </div>
    );
};

export default CurrentDate;
