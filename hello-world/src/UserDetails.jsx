export const UserDetails = ({ name, isOnline, hideOffline, IsPremium, isNewUser }) => {

    if (hideOffline && !isOnline) return null;

    return (
        <div>
            <h3>
                {name}
                {IsPremium && <span>⭐️</span>}
                {isNewUser && <span>🥁New User</span>}
            </h3>
            <span>{isOnline ? "✅Online" : "❌Offline"}</span>
            <p> {isOnline ? "Available for chat" : "Not Available"} </p>
            {
                isOnline ? (
                    <button>Send Message</button>
                ) : (
                    <p>check back later</p>
                )
            }

        </div>
    )
}