import image0 from "../assets/0.svg"
import image1 from "../assets/1.svg"
import image2 from "../assets/2.svg"
import image3 from "../assets/3.svg"
import image4 from "../assets/4.svg"
import image5 from "../assets/5.svg"
import image6 from "../assets/6.svg"
import image7 from "../assets/7.svg"
import image8 from "../assets/8.svg"
import image9 from "../assets/9.svg"

let images = [image0, image1, image2, image3, image4, image5, image6, image7, image8, image9]

interface Props {
    imageNumber: number
}

export function HangImage({ imageNumber }: Props) {
    if (imageNumber >= 9) {
        imageNumber = 9
    }
    return (
        <img
            src={images[imageNumber]}
            alt="Hang Image"
        />
    )
}