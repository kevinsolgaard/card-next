"use client";

import { useEffect, useRef } from "react";
import card from "../page.module.scss";
import Image from "next/image";
import gsap from "gsap";
import { useSearchParams } from "next/navigation";
import { EnemyArray } from "@/types/type";

const Page = () => {


    const data: EnemyArray = [
        {
            name:"Alien Scum",
            img:"/assets/black-alien-scum.png",
            text:"Ninja Killer don't touch him"
        },
        {
            name:"Death Smokie",
            img:"/assets/death-smokie.png",
            text:"Ninja Killer don't touch him"
        },
        {
            name:"Ping Pang",
            img:"/assets/angry-ping.png",
            text:"Just some penguin shit"
        },
    ]


    const searchParams = useSearchParams();
    const queryString = searchParams.get('id');

    /* const dataID = query as string;

    const id = parseInt(dataID); */

    const id = Number(queryString)

    const refObj = useRef<HTMLDivElement>(null);


    useEffect( () => {
        gsap.to( refObj.current, {
            duratino: 0.05,
            scaleX: -1,
            repeat: 3,
            yoyo: true,
            onComplete: () => {
                gsap.to( refObj.current, {
                    duratino: 0.05,
                    scaleX: 1,
                } )
            }
        } )
    }, [id] );


    return(
        <main>
            <section ref={refObj} id={card.cardContainer}>
                <div id={card.card}>                    
                    <div id={card.headline}>{data[id].name}</div>                    
                    <div id={card.imagecon}><Image src={data[id].img} alt="Black alien scum" width={ 250 } height={ 250 }/></div>
                    <div id={card.content}>{data[id].text}</div> 
                </div>
            </section>
        </main>
    );
};

export default Page