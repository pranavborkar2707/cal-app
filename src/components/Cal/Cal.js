import CalWrapper from "../CalWrapper/CalWrapper";

const Cal = () => {

    const allbtarr=[0,1,2,3,4,5,6,7,8,9];

    return(
        <div>
            <p>This Is Cal js</p>
            <CalWrapper allbtarr={allbtarr}/>
        </div>
    )
}

export default Cal;