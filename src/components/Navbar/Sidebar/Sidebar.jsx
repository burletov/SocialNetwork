import React from "react";
import s from "./Sidebar.module.css";

const Sidebar = (props) => {
    return (
        <div className={s.sidebar}>
            <h1>Friends</h1>
            <div className={s.item}>
                <img src="https://healthyton.com/wp-content/uploads/2020/01/Anthony-Kiedis-1200x1200.jpg"/>
                Anthony
            </div>
            <div className={s.item}>
                <img
                    src="https://img.discogs.com/GVEqtd53thmAbWR6QFtCMmHz9NI=/534x566/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-225315-1512814894-5937.jpeg.jpg"/>
                Chad
            </div>
            <div className={s.item}>
                <img src="https://i1.sndcdn.com/avatars-000027820281-f8l77j-t500x500.jpg"/>
                John
            </div>
        </div>
    );
};
export default Sidebar;
