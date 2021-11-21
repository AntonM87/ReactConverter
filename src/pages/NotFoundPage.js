import {Link} from "react-router-dom";

export default function NotFoundPage() {
    return (
        <div>
            <h1>404</h1>
            <h3>Page Not Found</h3>
            <Link to='/'>На главную</Link>
        </div>
    )
}