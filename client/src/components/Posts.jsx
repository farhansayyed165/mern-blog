export default function Posts({props}) {
    return (
       
            <div className="post">
                <div className="image">
                    <img src={props.imgURL} alt="" />
                </div>
                <div className="text">

                    <h2>{props.heading}</h2>
                    <p className="info">

                        <a href="" className="author">{props.author}</a>
                        <time>{props.time}</time>
                    </p>
                    <p>
                        {props.summary}
                    </p>
                </div>

            </div>

    )
}