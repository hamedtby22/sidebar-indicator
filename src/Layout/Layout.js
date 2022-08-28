import Sidebar from '../components/Sidebar.js'
const Layout = ({children}) => {
    return (
        <div>
            <Sidebar />
            {children}
        </div>
    );
};

export default Layout;