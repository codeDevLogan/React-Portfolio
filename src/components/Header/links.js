export default function Links({ itemType, linkType, hrefLink, text }) {
    return (
        <li className={itemType}>
            <a className={linkType} href={hrefLink}>{text}</a>
        </li>
    )
}