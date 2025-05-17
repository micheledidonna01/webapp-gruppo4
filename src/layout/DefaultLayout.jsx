import { Outlet } from "react-router-dom";


const DefaultLayout = () => {
    return (<>
        <header><span>Boo</span>Road</header>
        <main>
            <Outlet />
        </main>
    </>)
}

export default DefaultLayout;