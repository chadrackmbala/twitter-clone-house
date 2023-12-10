import AvatarImage from "../images/profile-photo.png"

export default function Avatar({style}) {
    return (
        <>
            <img src={AvatarImage} className={style} alt="avatar" />
        </>
    )
}