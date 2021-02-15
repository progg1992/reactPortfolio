import React from 'react'
import Title from '../Components/Title'
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';

function AboutPage() {
    return (
        <div className="AboutPage">
            <Title title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Title title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'Javascript'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'C#'} progress={'35%'} width={'30%'} />
                <SkillsSection skill={'LINQ'} progress={'25%'} width={'25%'} />
                <SkillsSection skill={'ASP.Net'} progress={'15%'} width={'15%'} />
                <SkillsSection skill={'React Js'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Node Js'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Python'} progress={'65%'} width={'65%'} />
                <SkillsSection skill={'MySQL'} progress={'75%'} width={'75%'} />
                <SkillsSection skill={'MongoDB'} progress={'75%'} width={'75%'} />
            </div>
                
        </div>
    )
}

export default AboutPage;