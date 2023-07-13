import { CardList } from "@/common/CardList"
import { Metadata } from "next"

const metadata:Metadata = {
    title: "bar"
}

export default function Bar(){
    return (
        <>
        <CardList/>
        <div>bar</div>
        </>
    )
}