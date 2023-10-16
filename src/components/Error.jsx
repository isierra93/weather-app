export default function Error ({ error }) {
    
    return(
        <span style={{color:"red"}}>
            { error.message }
        </span>
    )
}