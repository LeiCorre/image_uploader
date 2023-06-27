import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ImageContext } from './ImageContext';

export function ImageProvider (props) {

    return (
        <ImageContext.Provider value={{}}>
            {props.children}
        </ImageContext.Provider>
    )    
}

