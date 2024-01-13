import { Suspense } from "react";
import Carrousel from "./Carrousel";

function HeaderCarrousel({ promise }) {
    return (
        <Suspense fallback={"Loading..."}>
            <div className="m-4">
                <Carrousel promise={promise} />
            </div>
        </Suspense>
    )
}

export default HeaderCarrousel