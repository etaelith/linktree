import Index from "@/components/main/MainUser"
export async function generateMetadata({ params }) {
    return {
        title: params.id,
        description: `user Number ${params.id}`
    };
}
const Page = ({ params }) => {

    return (
        <Index params={params} />
    )
}

export default Page