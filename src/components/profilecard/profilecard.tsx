import './profilecard.css';


type ProfileCardProps = {
    name: string;
    role: string;
    avatarUrl: string;
    isOnline: boolean;
}

export default function Profilecard({name, role, avatarUrl, isOnline}: ProfileCardProps) {


    return (
        <div>
            <section>
                <div className={isOnline ? "online" : "offline"}>{isOnline ? "Online" : "Offline"}</div>
            </section>
            <section>
                <div>
                    Nom: {name}
                    Rôle: {role}
                </div>
            </section>
            <section>
                <div>
                    <img src={avatarUrl} alt="Avatar"/>
                </div>
            </section>
        </div>


    )

}