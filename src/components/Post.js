import React, { useState, useEffect } from 'react';
import sanityClient from '../client.js';

export default function Post() {
    const [postData, setPost] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "post"]`)
    })



}