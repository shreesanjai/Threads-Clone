import { fetchUserPosts } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";


interface Props{
    currentUserId: string,
    accountId: string;
    accountType: string
}

const ThreadsTab = async({currentUserId, accountId, accountType} : Props) => {

    let result = await fetchUserPosts(accountId);
    console.log(result);
    
    if(!result) redirect('/')

    return (
        <section>

        </section>
    );
}

export default ThreadsTab;