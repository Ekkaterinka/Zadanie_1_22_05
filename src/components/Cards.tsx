import Picture from './Picture'
import List from './List'

export default function Cards() {
    return (
        <div>
            <div className='card' style={{ width: '18rem' }}>
                <Picture src='#' className="card-img-top" />
                <List>
                    <h3 className="card-title">Title</h3>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Distinctio ipsa accusamus repellat ullam consequuntur,
                        Fuga?</p>
                    <a href="#" className="btn btn-primary">OK</a>
                </List>
            </div>

            <div className='card' style={{ width: '18rem' }}>
                <List className='card'>
                    <h3 className="card-title">Title</h3>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Distinctio ipsa accusamus repellat ullam consequuntur,
                        Fuga?</p>
                    <a href="#" className="btn btn-primary">OK</a>
                </List>
            </div>
        </div>
    )
}
