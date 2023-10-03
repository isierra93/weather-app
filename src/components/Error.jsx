export default function Error ({ message }) {
    
    return(
        <span>
            <p style={{color:"red"}}>
                { message }
            </p>
        </span>
    )
}