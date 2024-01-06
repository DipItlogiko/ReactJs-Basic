import React from "react";

type ButtonProps = {   /////amra amader App.tsx component ar moddhe theke jei children Props ta pass korechi amader Button Component ar moddhe oi children props take ami akhane receive korechi and ButtonProps ar moddhe object ar moddhe amra oi children props ar propsType ba dataType ta set kore diyechi React.ReactNode
    children: React.ReactNode;
}

function Button(props: ButtonProps) {  ////akhane amader ButtonProps ar moddhe ja ja ache sob props ar moddhe set kore diyechi
    return(
        <div>
            <button>{ props.children }</button>  {/* akhane props.children ar moddhe ja ashbe oita print korbe */}
        </div>
    )
}

export default Button