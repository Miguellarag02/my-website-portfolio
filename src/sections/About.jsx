import React from "react";
import Globe from "react-globe.gl";
import Button from "../components/Button";

const About = () => {
    const [hasCopied, setHasCopied] = React.useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("miguelangellarag@gmail.com");
        setHasCopied(true);
        setTimeout(() => setHasCopied(false), 2000);
    };

    return (
        <section className="c-space my-20" id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                       <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain"/>
                       <div>
                            <p className="grid-headtext">Hi I'm Miguel Angel</p>
                            <p className="grid-subtext"> With 2 years of experience in software development. I have honed my skills in C++/C, Python and Matlab works</p>
                       </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                       <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:w-[276px] h-fit object-contain"/>
                       <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">I specialize in C++/C, Python, and MATLAB programming. I have a strong foundation in these languages and have applied them in various projects.</p>
                       </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                       <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe 
                                height={326}
                                width={326}
                                backgroundColor="rgba(0,0,0,0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                labelsData={[{
                                    lat: 37.386943, 
                                    lng:-6.0067444,
                                    text:"I'm here",
                                    size: 400
                                }]}
                            />
                       </div>
                       <div>
                            <p className="grid-headtext">I work remotely</p>
                            <p className="grid-subtext">I am based in Seville, Spain but I am open to remote work opportunities worldwide.</p>
                            <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
                       </div>
                    </div> 
                </div>
                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                       <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain"/>
                       <div>
                            <p className="grid-headtext">My Passion for Coding</p>
                            <p className="grid-subtext">I love creating efficient and innovative solutions through programming. My expertise lies in C++/C, Python, and MATLAB programming. I thrive in collaborative environments and am always eager to take on new challenges that push my skills further.</p>
                       </div>
                    </div>
                </div>
                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                       <img src="/assets/grid4.png" alt="grid-4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"/>
                       <div className="space-y-2">
                            <p className="grid-subtext text-center">Contact me</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? '/assets/tick.svg' : '/assets/copy.svg'} alt="copy-icon" />
                                <p className="lg:text-xl font-medium text-gray_gradient text-white">
                                    miguelangellarag@gmail.com
                                </p>
                            </div>
                       </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;