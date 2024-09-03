import image1 from "../../images/image-product-1.jpg"
import image2 from "../../images/image-product-2.jpg"
import image3 from "../../images/image-product-3.jpg"
import image4 from "../../images/image-product-4.jpg"

export default function ProductImages() {
  return (
    <div className="min-w-[450px] mx-12">
      <img src={image1} alt="Product image 1" className="h-[300px] w-full xl:h-[450px] object-cover xl:object-contain rounded-lg" />
      <div className="hidden xl:flex justify-between mt-8">
        <img src={image1} alt="Product image 1" className="h-[88px] object-contain rounded-lg" />
        <img src={image2} alt="Product image 1" className="h-[88px] object-contain rounded-lg" />
        <img src={image3} alt="Product image 1" className="h-[88px] object-contain rounded-lg" />
        <img src={image4} alt="Product image 1" className="h-[88px] object-contain rounded-lg" />
      </div>
    </div>
  )
}