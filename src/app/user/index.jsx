export default async function User({data}){
    const user = data
    
    return(
    <div className=" h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col items-center gap-3">
        <img
          src={user.avatar_url}
          className={`
            rounded-full w-16
          `}
        />
        <span className="font-serif text-2xl font-bold">{user.name}</span>
      </div>
      <div className="w-fit font-serif text-md font-medium flex flex-col">
        {user.bio}
        <div className="flex justify-evenly">
          <span>followers: {user.followers}</span>
          <span>following: {user.following}</span>
        </div>
      </div>
    </div>
    )
}
