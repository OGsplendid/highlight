import { PropsWithChildren } from "react";

export function New({ children }: PropsWithChildren) {
    return (
        <div className="wrap-item wrap-item-new">
            <span className="label">New!</span>
            {children}
        </div>
    )
}
