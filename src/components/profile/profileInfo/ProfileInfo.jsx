import c from './ProfileInfo.module.scss'


const ProfileInfo = () => {
    return (
        <div >
            {/* <div className={c.imageWrapper}>
                <img className={c.backgroundImage} src='/images/background.jpg' alt='logotype'></img>
            </div> */}
            <div className={c.profileWrapper}>
                <div className={c.avatar}>
                    <img src="/images/avatar.jpg" alt="avatar" />
                </div>
                <div className={c.name}>
                    <h3>Nikita Bykov</h3>
                    <p>/tetpic</p>

                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;
