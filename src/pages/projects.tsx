import MainContainer from "@/components/MainContainer";
import InfiniteScrollCont from "@/components/Projects/InfiniteScrollCont";
import Link from "next/link";



export default function Projects () {


    
    return (
        <MainContainer title="masleeh's projects">
            <Link href="/" className="go-home">home</Link>

            <style jsx global>{`
                ::-webkit-scrollbar{
                    opacity: 0;
                }
            `}
            </style>
            <InfiniteScrollCont />

        </MainContainer>
    )
}