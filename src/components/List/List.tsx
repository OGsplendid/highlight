import { IItems } from "../../module";
// import { Article } from "../Article/Article";
// import { New } from "../New/New";
// import { Popular } from "../Popular/Popular";
// import { Video } from "../Video/Video";
import { WrappedArticle, WrappedVideo } from "../withWrapper/withWrapper";

export function List({ list }: IItems) {
    return list.map(item => {
        switch (item.type) {
            case 'video':
                return (
                    <WrappedVideo {...item} />
                    // item.views >= 1000 ? <Popular><Video {...item} /></Popular>
                    //     : item.views < 100 ? <New><Video {...item} /></New>
                    //     : <Video {...item} />
                );

            case 'article':
                return (
                    <WrappedArticle {...item} />
                    // item.views >= 1000 ? <Popular><Article {...item} /></Popular>
                    //     : item.views < 100 ? <New><Article {...item} /></New>
                    //     : <Article {...item} />
                );
        }
    });
}
