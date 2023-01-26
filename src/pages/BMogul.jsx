import React from 'react'
import Link from 'next/Link'

const BMogul = () => {
    return (
        <div>
            <h1>Burhanuddin Mogul</h1>
            <div style={{ display: "flex" }}>
                <img src="/Bmogul.jpg" alt="My Image" style={{ width: "150px", height: "150px" }} />
                <div>
                    <p>Computer Science Major at NJIT</p>
                    <a href="https://www.linkedin.com/in/mogulburhanuddin" passHref={true} target="_blank">
                        <button>Linkedin</button>
                    </a><br/>
                    <a href="https://github.com/bmogul" passHref={true} target="_blank">
                        <button>Github</button>
                    </a><br/>
                </div>
            </div>
        </div>
    )
}

export default BMogul