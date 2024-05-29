import React, { useRef, useState } from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Popover } from "@mui/material";
import { OptionsButtonTile, OptionsIconButton, OptionsTile, TblOptionAnchor } from "./styles";

export type TableOption = {
    label : string,
    onClick : any,
    icon : any,
    objIsFnArg ?: boolean
}

type ContentTableOptionsProps = {
    options : TableOption[],
    data?:any
}

export const ContentTableOptions = ({options, data}: ContentTableOptionsProps) => {
    const divRef = useRef<HTMLDivElement>(null) 
    const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if(divRef.current) setAnchorEl(divRef.current);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleOptionClick = (option : TableOption) => {
        if(data && option.objIsFnArg) option.onClick(data)
        else option.onClick()
        handleClose()
    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <OptionsButtonTile ref={divRef}>
            <OptionsIconButton aria-describedby={id} onClick={handleClick}>
                <MoreVertIcon/>
            </OptionsIconButton>
            <Popover 
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <OptionsTile>
                    {
                        options.map((opt, index) => (
                            <TblOptionAnchor key={index} onClick={() => handleOptionClick(opt)}>{opt.icon}{opt.label}</TblOptionAnchor>
                        ))
                    }
                </OptionsTile>
            </Popover>
        </OptionsButtonTile>
    )
}