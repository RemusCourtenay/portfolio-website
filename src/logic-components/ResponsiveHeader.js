import {Header, HeaderName} from "../ui-components";
import ResponsiveNavigationLinks from "./ResponsiveNavigationLinks";

function ResponsiveHeader(props){

    const firstName = props.firstName
    const anchors = props.anchors

    return(      
        <Header 
            nameGroup={<HeaderName firstName={firstName}/>}
            navigationLinksGroup={<ResponsiveNavigationLinks anchors={anchors} />}
        />
    )
}

export default ResponsiveHeader;