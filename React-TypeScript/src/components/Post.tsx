import React from "react";
import Card from "./Card";

function Post() {
    return(
        <Card>  {/* akhane Card Component take call kore Children Props aakare ar moddhe thaka element guloke pass kore diyechi amader ai Post component ar moddhe theke Card Component ar moddhe  */}
            <h3>Post Title1</h3>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem numquam, assumenda quis accusamus eius iste quas vel impedit alias quae?</p>
        </Card>
    )
}

export default Post