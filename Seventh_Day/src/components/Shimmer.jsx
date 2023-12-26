const Shimmer = () =>{
    return (
        <div className="shimmer-container">
            {
                Array(20).fill("").map((card,index)=>(
                    <div key={index} className="shimmer-card"></div>
                ))
            }
        </div>
    )
}

export default Shimmer;