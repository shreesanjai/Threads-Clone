
import ProfileHeader from '@/components/shared/ProfileHeader';
import { fetchUser } from '@/lib/actions/user.actions';
import { currentUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

export default async function Page({params}: { params :{id: string}}) {

    const user = await currentUser();

    if(!user) return null;

    const userInfo = await fetchUser(params.id);

    if(!userInfo?.onboarded) redirect('/onboard');

    return (
        <section>
           <ProfileHeader 
                accountId = {userInfo.id} 
                authUserId = {userInfo.id}
                name = {userInfo.name}
                username = {userInfo.username}
                imgUrl = {userInfo.image}
                bio = {userInfo.bio}
           />
        </section>
    );
}
