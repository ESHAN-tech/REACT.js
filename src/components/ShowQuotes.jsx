
export default function ShowQuotes({ quotesArray }) {
    return (
        <>
            {quotesArray.map((qobject) => (
                <div key={qobject.id}>
                    <p>ID: {qobject.id}</p>
                    <p>Author: {qobject.author}</p>
                    <p>Quote: {qobject.quote}</p>
                </div>
            ))}
        </>
    );
}
