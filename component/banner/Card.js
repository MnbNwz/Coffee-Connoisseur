import Image from "next/image"
import Link from "next/link"
import style from "./card.module.css"
import cls from 'classnames'
const Card = (props) => {

    return (
        <div>
            <Link href={props.href}>
                <a className={style.cardLink}>
                    <div className={cls("glass", style.container)}>
                        <div className={style.cardHeaderWrapper}>
                            <h2 className={style.header}> {props.title} </h2>
                        </div>
                        <div className={style.cardImagWrapper}>
                            <Image
                                className={style.cardImage}
                                src={props.imageSrc} width={260} height={160} alt="Coffee Shops"
                            />
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    )
}

export default Card