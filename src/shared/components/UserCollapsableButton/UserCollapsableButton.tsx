import React, { useContext, useState } from "react";
import { ButtonDiv, CollapsableDiv, ExpandMoreTile, ExpandedDiv, UserAvatar, Username } from "./styles";
import { AuthContext } from "../../../context/auth/AuthContext";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const UserCollapsableButton = () => {
    const {user} = useContext(AuthContext);
    const [expanded, setExpanded] = useState(false);

    const handleButtonClick = () => {
        setExpanded(value => !value);
    }

    return(
        <>
        {
            user ? (
                <ButtonDiv>
                    <CollapsableDiv onClick={handleButtonClick}>
                        <Username>{user.nome + " Nascimento"}</Username>
                        <UserAvatar $size="40px"/>
                        <ExpandMoreTile>
                            <ExpandMoreIcon/>
                        </ExpandMoreTile>
                        {
                            expanded ? (
                                <ExpandedDiv/>
                            ) : (null)
                        }
                    </CollapsableDiv>
                </ButtonDiv>
            ) : (
                null
            )
        }
        </>
        
    )
}