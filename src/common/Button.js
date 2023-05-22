import'./Button.css'

const Button = (props) => {

    const btclick = () =>{
        console.log("props value ",props)

    }

    return(
        <div>
            <button className="bt-cal" onClick={btclick}>
                {props.btName}
            </button>
        </div>
    )
}

export default Button;