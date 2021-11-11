import React from "react";
import { 
    Chat, 
    EmojiFlags, 
    ExpandMoreOutlined, 
    LocalHospital, 
    People, 
    Storefront, 
    VideoLibrary 
} from "@material-ui/icons";
import { useStateValue } from '../StateProvider';
import SidebarRow from "./SidebarRow";
import './Sidebar.css';


const Sidebar = () => {
    const [{ user }, dispatch] = useStateValue();

    return (
        <div className="sidebar">
            <SidebarRow src={user.photoUrl} title={user.displayName} />
            <SidebarRow Icon={LocalHospital} title="COVID-19 Information Center" />
            <SidebarRow Icon={EmojiFlags} title="Pages" />
            <SidebarRow Icon={People} title="Friends" />
            <SidebarRow Icon={Chat} title="Messenger" />
            <SidebarRow Icon={Storefront} title="Marketplace" />
            <SidebarRow Icon={VideoLibrary} title="Videos" />
            <SidebarRow Icon={ExpandMoreOutlined} title="More" />
        </div>
    );
};

export default Sidebar;