import React from "react";
import { ReactComponent as Github } from '../Assets/github.svg'
import { ReactComponent as LinkedIn } from '../Assets/linkedin.svg'
import { ReactComponent as Medium } from '../Assets/medium.svg'

export default function Footer() {
    return (
        <footer className="bg-gray-700 md:sticky top-0 z-10 flex flex-row">
            <a href='https://github.com/pdbesse' target='_blank' rel='noreferrer noopener' className="container mx-auto flex flex-wrap p-1 flex-col md:flex-row justify-center"><Github/>
            </a>
            <a href='https://linkedin.com/in/phillipbesse' target='_blank' rel='noreferrer noopener' className="container mx-auto flex flex-wrap p-1 flex-col md:flex-row justify-center"><LinkedIn/>
            </a>
            <a href='https://medium.com/@phillip.besse' target='_blank' rel='noreferrer noopener' className="container mx-auto flex flex-wrap p-1 flex-col md:flex-row justify-center"><Medium/>
            </a>
        </footer>
    )
}