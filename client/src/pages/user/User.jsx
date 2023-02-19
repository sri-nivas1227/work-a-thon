import './User.css';
import users_data from './profile-data'

function User() {

    const arr = window.location.href.split('/');

    const ind = arr.length === 4 ? 0 : arr[4];

    const data = users_data[ind];

    let taskCount = 70;
    // let taskCompleted = 35;
    let taskPending = taskCount - data.taskCompleted;
    let progress = (data.taskCompleted*100.0/taskCount).toFixed(2);

    return (
        <div className="">
            <div className="content flex justify-between mt-4 px-12">
            <div className="content-left">
                <p className="text-3xl mb-12">
                    Progress percentage
                </p>
                {/* <div className="relative bg-blue-200 w-96 h-12 rounded-md shadow-2xl border-blue-800 border-2"> */}
                <div className="relative progress-bar stripes">
                    <p className="text-xl z-10 absolute top-2.5 right-44 text-white	">
                        {progress + ' %'}
                    </p>
                    <div className="percent bg-blue-600 h-full rounded-md" style={{width: progress + '%'}}>

                    </div>
                </div>
                <p className="text-3xl mt-16 mb-8">
                    Tasks Accomplished
                </p>
                <p className="my-12 text-xl text-center">
                    {data.taskCompleted}
                </p>
                <p className="text-3xl mt-16 mb-8">
                    Tasks Pending
                </p>
                <p className="my-12 text-xl text-center">
                    {taskPending}
                </p>
            </div>
            <div className="content-right flex align-top">
                <div className="info text-md max-w-xl mt-16">
                    <p className="name text-3xl font-semibold">{data.name}</p>
                    <p className="dest my-2 text-gray-500">{data.title}</p>
                    <div className="location flex items-center">
                        <p className="location-text">
                            {data.location}&emsp;
                        </p>
                        
                        <img width="18" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACUklEQVR4nO2ZS2sUQRCAP19EySoiEZUEAkFBiOCe4uYHeBO9RXPKWfAUBQ8eJCEs3kQ95PULPMSDt+BF8R1EL4K5JkhQE8FgFNfXSEMFliUmXdnqnh7xg4JlZqiaj+6p2emG/6zJbqAfmABmgA/Adwn3+7mcOyfXJschYBT4AmSe4a6dBA6TAC3AMLCiEGgMN1rXJFcutAEPmhBojCfAwdgSx4B5Q4nVmJPcUTgQSKJextUIyk6ZAlngeBz6mRmOIJFJVEO22Ga6kzZqQFcIkdGIEpnEuLVECficg8iK1DajX3kD34AbwAmgVcL9vinnNLn6LEUmFIXfAsfXyVWWa3zzjVmKzChGYj2JehnfkXlmKbLoWdRNJ19ueeZ8bylS8yzao8hZUYyyGb7TQNNhSp45v9ppwLsAIns8cy5YirzJcWq9thS561nUvSesH/YpS5Gq4sF0rXUjyooGMmQp0udZNJOXXdnwhXjaUmQ/8EtRvCZTpyINwEWvHPMdiQz4IU3BlFeKG7CKhxT8oyqTuBRC5Ghkid9AJ4F4GVHkPgE5H1HkbEgR130+RZBYAHYQmOsRRK4QgY5NfK5qYhnYSyTGAoqMEJH2QGtcH4F9RGYogMgFcmCX8WL2bIxO9TcGDEVOkSNbgRcGEvdIgLJsn21Wwu0lHiERqk2IDJIQLbJIoJVw29XbSIwK8FMh4f4ddJMoIwqRiyTMduCRh8S0dLyk6QCWNliUdtt4heCMfKo2Srhn6CQF4+oaIpcpIFuA23USd+RYISnJjtNT601N/lX+AJW6sAqkjpn4AAAAAElFTkSuQmCC"></img>
                        
                        </div>
                    <p className="summary mt-8">{data.summary}</p>

                </div>
                <div className="ml-28 user-img rounded-lg shadow-xl shadow-gray-500 h-40 w-40 border-2 border-gray-300 ">
                    <img
                        src={data.img_url}
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