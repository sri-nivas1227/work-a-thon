function User() {
    return (
        <div className="">
            <div className="content flex justify-between mt-4 px-12">
            <div className="content-left">
                <p className="text-3xl">
                    Progress percentage
                </p>
                <div className="relative progress-bar bg-blue-200 w-96 h-12 my-12 rounded-md shadow-2xl border-blue-800 border-2 ">
                    <p className="text-xl z-10 absolute top-2.5 right-40 text-white	">
         33.22%
                    </p>
                    <div className="percent bg-green-400 h-full rounded-md" style={{width:"50%"}}>

                    </div>
                </div>
                <p className="text-3xl">
                    Total Task Accomplished
                </p>
                <div className="my-12 text-xl">
                    50
                </div>
                <p className="text-3xl">
                    Tasks Pending
                </p>
                <div className="my-12 text-xl">
                    20
                </div>
            </div>
            <div className="content-rig">
                <div className="user-img rounded-lg shadow-xl shadow-blue-800 h-40 w-40 border-2 border-blue-800 ">
                    <img
                        src="https://images.unsplash.com/photo-1522508042487-6e6684f78c5b"
                        alt="pic"
                        className="w-full h-full rounded-lg"
                        style={{objectFit: "cover"}}
                        />
                </div>
            </div>
        </div>

        </div>
    )
}

export default User;