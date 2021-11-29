import {Link} from "react-router-dom";

export default function NotFoundPage() {
    return (
        <div className='err404'>
            <h1><strong>404</strong></h1>
            <h3>Page Not Found</h3>
            <div className="rates-page-link"><Link to='/'>На главную</Link></div>
        </div>
    )
}