import React from "react";
import Hero from "../hero/Hero";
const Home = ({movies})=>{
    return(
        
        <Hero movies = {movies}/> /*Apps' movies to Home's movies to Heros' movies to Hero's movie  */

    )
}
export default Home