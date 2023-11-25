import React from "react"
import { Popular } from "../Popular/Popular";
import { New } from "../New/New";
import { TItem } from "../../module";
import { Video } from "../Video/Video";
import { Article } from "../Article/Article";

function withWrapper(Component) {
    return class extends React.Component<TItem, unknown> {
        render(): React.ReactNode {
            const { views } = this.props;
            return (
                views >= 1000 ? <Popular><Component {...this.props}/></Popular>
                : views < 100 ? <New><Component {...this.props}/></New>
                : <Component {...this.props}/>
            )
        }
    }
}

export const WrappedVideo = withWrapper(Video);
export const WrappedArticle = withWrapper(Article);
