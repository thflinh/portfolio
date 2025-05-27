import { useEffect, useState } from "react";

//id, size, x, y, opacity, animationDuration
//id, size, x, y, delay, animationDuration


export const StarBackground = () => {
    //create a list to keep track of the star
    //each star is a list of objects
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([])

    useEffect(() => {
        generateStars();
        generateMeteors();

        //add handle to resize device's meteors
        const handleResize = () => {
            generateStars();

        };

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener("resize", handleResize);

    }, []);

    //when join the website -> generate that star
    const generateStars = () => {
        //how many stars on the website depend on the size of the window
        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 10000);
        const newStars = [];

        //loop through the number of stars
        for (let i = 0; i < numberOfStars; i++)
        {
            newStars.push({
                id: i, size: Math.random() * 3 + 1,
                x: Math.random() * 100, 
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5, 
                animationDuration: Math.random() * 4 + 2,
            });
        }

        setStars(newStars);
    };

    const generateMeteors = () => {
        //how many stars on the website depend on the size of the window
        const numberOfMeteors = 4; //how much meteor as we want
        const newMeteors = [];

        //loop through the number of stars
        for (let i = 0; i < numberOfMeteors; i++)
        {
            newMeteors.push({
                id: i, 
                size: Math.random() * 2 + 1,
                x: Math.random() * 100, 
                y: Math.random() * 20,
                delay: Math.random() * 15, 
                animationDuration: Math.random() * 3 + 3,
            });
        }

        setMeteors(newMeteors);
    };

    return ( 
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0"> 
        {stars.map((star) => (
            <div key={star.id} className="star animate-pulse-subtle" style={{
                width: star.size + "px",
                height: star.size + "px",
                left: star.x + "%", 
                top: star.y + "%",
                opacity: star.opacity,
                animationDuration: star.animationDuration + "s", }} />
        ))}

        {meteors.map((meteor) => (
            <div key={meteor.id} className="meteor animate-meteor" 
            style={{
                width: meteor.size * 50 + "px",
                height: meteor.size + "px",
                left: meteor.x + "%", 
                top: meteor.y + "%",
                animationDelay: meteor.delay,
                animationDuration: meteor.animationDuration + "s", }} 
                />
        ))}

    </div>
    );
};