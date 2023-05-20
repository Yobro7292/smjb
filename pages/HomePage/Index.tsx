import { HeroImageRight } from "@/components/Hero/Index"
import Service from "@/components/Service/Index"
import Management from "@/components/Management/Index"
import Testimonials from "@/components/Testimonials/Index"
import Counter from "@/components/Counter/Index"
import { FaqSimple } from "@/components/FAQ/Index"
const HomePage = () => {
  return (
    <>
    <HeroImageRight />
    <Service />
    <Management />
    <Testimonials />
    <Counter />
    <FaqSimple />
    </>
  )
}

export default HomePage