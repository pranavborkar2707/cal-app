import Button from "../../common/Button";
const CalWrapper = (props) => {
   

    const allbt =props.allbtarr.map((btvalue)=>{
        return <Button btName={btvalue}></Button>
    })
    return(
        <div>
            {allbt}
        </div>
    )
}

export default CalWrapper;