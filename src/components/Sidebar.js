import { useEffect, useState,useRef } from 'react';
import {Link,useLocation} from 'react-router-dom';

//data
import { sidebarItem } from '../router';

//styles
import './Sidebar.scss';

const Sidebar = () => {

    const [smartIndex, setsmartIndex] = useState(0);
    const [stageHeight, setStageHeight] = useState(0);
    const sidebarRef = useRef();
    const indicatorRef = useRef();
    const location = useLocation();

    useEffect(() => {
        setTimeout(() => {
            const sidebarItemSize = sidebarRef.current.querySelector('.sidebar__menu__item');
            indicatorRef.current.style.height = `${sidebarItemSize.clientHeight}px`;
            setStageHeight(sidebarItemSize.clientHeight);
        }, 50);
    }, []);

    // change active index
    useEffect(() => {
        const currentPath = window.location.pathname.split('/')[1];
        const activeItem = sidebarItem.findIndex(item => item.section === currentPath);
        setsmartIndex(currentPath.length === 0 ? 0 : activeItem);
    }, [location]);


    return (
        <div className='sidebar'>
            <div className='sidebar__logo'>
                Admin Panel
            </div>
            <div ref={sidebarRef} className='sidebar__menu'>
                <div ref={indicatorRef} className='sidebar__menu__indicator' style={{
                    transform: `translateX(-50%) translateY(${smartIndex * stageHeight}px)`
                }}></div>
                {
                    sidebarItem.map((item,index) =>(
                        <Link to={item.to} key={index}>
                            <div className={`sidebar__menu__item ${smartIndex === index ? 'active' : ''}`}>
                                <div className='sidebar__menu__item__icon'>
                                    {item.icon}
                                </div>
                                <div className='sidebar__menu__item__text'>
                                    {item.display}
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default Sidebar;