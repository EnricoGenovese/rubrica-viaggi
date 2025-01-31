import travels from "../model/Data";

export default function Travels() {
    return (
        <>
            <div className="container">
                {travels.map((travel) => (
                    <>
                        <div>
                            <h2>{travel.title}</h2>
                        </div>
                        <div>

                        </div>
                    </>
                ))}
            </div>
        </>
    )
}