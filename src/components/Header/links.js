export default function Links({ itemType, linkType, hrefLink, text }) {
    return (
        <li className={itemType}>
            <a className={linkType} href={hrefLink}><p id="linkText">{text}</p></a>
        </li>
    )
}