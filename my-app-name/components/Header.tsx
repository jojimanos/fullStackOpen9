import React from "react"

type HeaderProps = {
    courseName: string
}

const Header = (props: HeaderProps): React.ReactElement => {
    return (
        <h1>
            {props.courseName}
        </h1>
    )
}

export default Header