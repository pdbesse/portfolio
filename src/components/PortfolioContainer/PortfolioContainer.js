import React from 'react';
import Header from '../Header/Header'
import About from '../About/About'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
import Resume from '../Resume/Resume'
import Footer from '../Footer/Footer'

export default function PortfolioContainer() {
    // const [currentSection, setCurrentSection] = useState('about');

    // const renderSection = () => {
    //     if (currentSection === 'About') {
    //         return <About />;
    //     }
    // }

    return (
        <div>
            <Header/>
            <About />
            <Projects />
            <Resume />
            <Contact />
            <Footer />
        </div>
    )

    // const setSection = () => {
    //     if (currentSection === 'About') {
    //         return <About />;
    //     }
    //     if (currentSection === 'Portfolio') {
    //         return <Projects />;
    //     }
    //     if (currentSection === 'Resume') {
    //         return <Resume />;
    //     }
    //     return <Contact />;
    // }
    // };

    // const handleSectionChange = (section) => setCurrentSection(section);
}