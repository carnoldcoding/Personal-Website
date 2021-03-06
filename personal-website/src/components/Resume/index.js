import React, {useEffect} from 'react'
import Aos from "aos";
import "aos/dist/aos.css"
import svg1 from '../../images/svg-1.svg'
import IC from '../../images/IC.jpg'
import SV from '../../images/42.png'
import {FaFileDownload, FaDownload} from 'react-icons/fa'
import {Button} from '../ButtonElement'

import { ResumeContainer, ResumeWrapper, ResumeRow, 
    TextWrapper, TopLine, Heading, Subtitle, Column1, Column2,
    ResumeH1, ImgWrap, BtnWrap, Img, ResumeLink,
    ResumeDownloadLink, ResumeHeader, ResumeHeaderRow } from './ResumeElements'

const ResumeSection = () => {
    useEffect(() =>{Aos.init({ duration: 3000});
    }, []);
    return (
        <ResumeContainer id="resume">
            <ResumeWrapper id="resumeWrapper"> 
                <ResumeHeader data-aos="fade-down">
                    <ResumeHeaderRow>
                        <ResumeH1>Resume</ResumeH1>

                        <ResumeDownloadLink href="https://drive.google.com/file/d/1j_d-oPAo7BTxyVtaZafBMeP4JZaQpnSW/view?usp=sharing" target="_blank">
                            <FaFileDownload/>
                        </ResumeDownloadLink>
                    </ResumeHeaderRow>

                    <TopLine>My work credentials</TopLine>

                </ResumeHeader>
                <ResumeRow>
                    <Column1>
                    <ResumeLink href="https://www.ithaca.edu/" target = "_blank">
                        <ImgWrap data-aos="fade-right">
                            <Img src = {IC}/>
                        </ImgWrap>
                    </ResumeLink>
                    </Column1>

                    <Column2>
                        <TextWrapper data-aos="fade-left">    
                            <Subtitle>Graduated from Ithaca College in August 2021. Made the Dean's List in 2020, and 2021.</Subtitle>
                        </TextWrapper>
                    </Column2>
                </ResumeRow>

                <ResumeRow>
                <Column1>
                    <ResumeLink href="https://42.fr/en/homepage/" target = "_blank">
                        <ImgWrap data-aos="fade-right">
                            <Img src = {SV}/>
                        </ImgWrap>
                    </ResumeLink>
                </Column1>

                    <Column2>
                        <TextWrapper data-aos="fade-left">    
                            <Subtitle>Graduated from 42 Silicon Valley's Bootcamp in 2019</Subtitle>
                        </TextWrapper>
                    </Column2>
                </ResumeRow>
                <BtnWrap data-aos="fade-right">
                    <Button to="projects" primary = 'true' dark = 'false' smooth={true}
                        duration={500}
                        spy={true} offset={-40}> Next
                    </Button>
                </BtnWrap>

            </ResumeWrapper>
        </ResumeContainer>
    )
}

export default ResumeSection
