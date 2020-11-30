import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Nav = (props) => {
    return (
        <nav>
            <h1>Waves</h1>
            <button
                onClick={() => props.setLibraryStatus(!props.libraryStatus)}
            >
                Library
                <FontAwesomeIcon icon={faMusic} />
            </button>
        </nav>
    );
};

export default Nav;