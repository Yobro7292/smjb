"use client"
import Divider from "../common/Divider"
import TestimonialCarasoul from "../common/TestimonialCarasoul"

const Testimonials = () => {
  return (
    <div className="w-full py-6 my-8 flex flex-col justify-center items-center">
        <Divider title={"Testimonials"} varient={"light"} />
        <div className="w-[80%] my-12">
        <TestimonialCarasoul />
        </div>
    </div>
  )
}

export default Testimonials