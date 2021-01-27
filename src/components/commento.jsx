// https://miguelpiedrafita.com/snippets/commentohttps://miguelpiedrafita.com/snippets/commento

import React, { useEffect, useState } from 'react'

const insertScript = src =>
    new Promise(resolve => {
        const script = window.document.createElement('script')

        script.async = true
        script.src = src
        script.id = 'commento-script'
        script.addEventListener('load', () => resolve(script))
        document.body.appendChild(script)
    })

const removeScript = id => {
    const script = window.document.getElementById(id)

    if (script) {
        document.body.removeChild(script)
    }
}

const Commento = ({ id, host }) => {
    const [isLoaded, setLoaded] = useState(false)

    useEffect(() => {
        if (!isLoaded) {
            insertScript(`${host}/js/commento.js`).then(() => setLoaded(true))
        }

        return () => removeScript('commento-script')
    }, [host, isLoaded])

    return <div id="commento" />
}

export default Commento