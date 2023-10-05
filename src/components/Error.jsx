export default function Error ({ error }) {
    
    return(
        <span>
            <p style={{color:"red"}}>
                { error.message }
            </p>
        </span>
    )
}