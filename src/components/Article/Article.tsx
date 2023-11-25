import { TItem } from "../../module";

export function Article({ title, views }: TItem) {
    return (
        <div className="item item-article">
            <h3><a href="#">{title}</a></h3>
            <p className="views">Прочтений: {views}</p>
        </div>
    )
}
