// /* eslint-disable react/jsx-key */
import ReviewCard from "./ReviewCard"
import axios from "axios";
import { useQuery } from "react-query";
import ParagraphSkeleton from "../../Common/ParagraphSkeleton";
import { useEffect, useRef, useState } from 'react';



const ClientReviews = () => {
    const [scrollInterval, setScrollInterval] = useState(null);
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            const container = containerRef.current;

            const handleAutoScroll = () => {
                container.scrollLeft += 2; // Adjust scrolling speed as needed

                if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
                    container.scrollLeft = 0; // Reset scroll position to the beginning
                }
            };

            const intervalId = setInterval(handleAutoScroll, 50); // Adjust scroll interval as needed

            setScrollInterval(intervalId);
            // console.log(intervalId)

            return () => {
                clearInterval(intervalId);
            };
        }
    }, []);
    
    const dNumber = [1, 2, 3, 4, 5];
    const { isLoading, error, data } = useQuery('review', () =>
        axios.get('api/review')
            .then(({ data }) => data)
            .catch(error => console.error('Error fetching testimonials:', error)))


    return (
        <>
            <div className="px-2 md:px-8 py-4 text-lg font-bold text-Snow">Clients Reviews</div>
            <div className="overflow-x-auto w-full grid  justify-items-center grid-flow-col gap-4 px-2 md:px-8 pt-2 pb-4" ref={containerRef}>

                {
                    isLoading ?
                    dNumber.map((key) => (
                            <ParagraphSkeleton key={key} dataClass="w-80 md:w-96 h-full p-4 md:p-8" />
                        ))
                        :
                        data?.map((data, key) => (
                            <ReviewCard key={key} data={data} />
                        ))
                }

            </div>

        </>
    )
}

export default ClientReviews