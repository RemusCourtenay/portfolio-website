import { NavigationLinks } from "../ui-components";
import ResponsiveTextLink from "./ResponsiveTextLink";

function ResponsiveNavigationLinks(props) {

    const anchors = props.anchors

    return(
        <NavigationLinks 
        link1={<ResponsiveTextLink 
                content='Home'
                focus='True'
                anchor={anchors['Home']}
              />}
        link2={<ResponsiveTextLink 
                content='Skills'
                focus='False'
                anchor={anchors['Skills']}
              />}
        link3={<ResponsiveTextLink 
                content='Project'
                focus='False'
                anchor={anchors['Project']}
              />}
        link4={<ResponsiveTextLink 
                content='Experience'
                focus='False'
                anchor={anchors['Experience']}
              />}
        link5={<ResponsiveTextLink 
                content='Contact'
                focus='False'
                anchor={anchors['Contact']}
              />}
      />
    )
}

export default ResponsiveNavigationLinks;