import { HeroImageRight } from "@/components/Hero/Index"
import Service from "@/components/Service/Index"
import Management from "@/components/Management/Index"
import Testimonials from "@/components/Testimonials/Index"
import Counter from "@/components/Counter/Index"
import { FooterLinks } from "@/features/Footer/Index"

const HomePage = () => {
  return (
    <>
    <HeroImageRight />
    <Service />
    <Management />
    <Testimonials />
    <Counter />
    </>
  )
}

export default HomePage