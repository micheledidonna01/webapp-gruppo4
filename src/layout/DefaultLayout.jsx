import { Outlet } from "react-router-dom";


const DefaultLayout = () => {
    return (<>
        <header>Booviaggi</header>
        <main>
            <Outlet />
        </main>
    </>)
}

export default DefaultLayout;