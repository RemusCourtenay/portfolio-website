import {Header, HeaderName} from "../ui-components";
import ResponsiveNavigationLinks from "./ResponsiveNavigationLinks";

function ResponsiveHeader(props){

    const firstName = props.firstName
    const anchors = props.anchors

    return(      
        <Header 
            headerNameGroup={
                <HeaderName 
                    firstName={firstName}
                    overrides={
                        {RedCircle: {viewBox:{ minX: 0, minY: 8, width: 8, height: 8 }}}
                    }
                />
            }
            navigationLinksGroup={<ResponsiveNavigationLinks anchors={anchors} />}
        />
    )
}

export default ResponsiveHeader;