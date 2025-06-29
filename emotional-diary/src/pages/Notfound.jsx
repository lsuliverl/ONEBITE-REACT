import usePageTitle from "../hooks/usePageTitle";

const Notfound = () => {
    usePageTitle("잘못된 페이지");
    return <div>잘못된 페이지입니다.</div>;
};

export default Notfound;
