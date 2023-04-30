import Link from 'next/link'
import React from 'react'
import styles from '../../styles/components/CollectableCard.module.css'
import Image from 'next/image'
import LoadingSpinner from './LoadingSpinner'

type Props = {
	linkLocation: string
	collectibleNameSrc: string
	imgSrc: string
	itemPrice: number | undefined
	isPriceLoading: boolean
}

const CollectableCard = ({ linkLocation, collectibleNameSrc, itemPrice, imgSrc, isPriceLoading }: Props) => {
	return (
		<Link className={`${styles.collectibleLinkBox}`} href={linkLocation}>
			<div className={`${styles.collectibleContainer}`}>
				<div className="flex flex-col items-center mt-8 text-center">
					<Image className="mb-6" alt={'A coin!'} src={imgSrc} width={150} height={149.07} />
					<Image alt="Collectible Name" src={collectibleNameSrc} width={180} height={107} />
				</div>
				<div className="absolute text-center bottom-2">
					<p className={`${styles.collectibleText} translate-y-[-4px] font-light text-[12px]`}>
						Required to buy collectibles
					</p>
					<Image alt="Horizontal Line" src={require('../../resources/images/horizontalline.png')} />
					<div className="w-full mx-auto text-center max-h-[28px] flex justify-center items-center mt-[7px]">
						{isPriceLoading ? (
							<LoadingSpinner />
						) : (
							<h4 className={`${styles.collectibleText} font-bold text-lg`}>
								Price: <span className={styles.priceText}>${itemPrice}</span>
							</h4>
						)}
					</div>
				</div>
			</div>
		</Link>
	)
}

export default CollectableCard