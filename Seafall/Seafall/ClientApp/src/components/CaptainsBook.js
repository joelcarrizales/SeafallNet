import book1 from '../images/Book1.jpg';
import book2 from '../images/Book2.jpg';
import book3 from '../images/Book3.jpg';

const CaptainsBook = props => {

    return (
            <div className="pages">
                <img src={book1} alt="Book1.jpg" style={{width: '100%'}} />
                <br />
                <img src={book2} alt="Book2.jpg" style={{ width: '100%'}} />
                <br />
                <img src={book3} alt="Book3.jpg" style={{ width: '100%'}} />
            </div>
        );
}

export {CaptainsBook}